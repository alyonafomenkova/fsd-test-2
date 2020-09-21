import '../button/button.js';
import './dropdown.scss';
import './dropdown.pug';

class Dropdown {
  constructor(dropdown) {
    this.dropdown = dropdown;
    this.Mode = {
      PEOPLE: 'people',
      FACILITIES: 'facilities'
    };
    this.type;
    this.totalCount;
  }

  init() {
    this._updateType();
    this._disableButtons();
    this._updateTotalCount();
    this._updatePlaceholder();
    this._setupBind();
    document.addEventListener('click', this._handleDocumentClick);

    if (this.type === this.Mode.PEOPLE) {
      this._addListenersForPeopleMode();
    } else if (this.type === this.Mode.FACILITIES) {
      this._addListenersForFacilitiesMode();
    } else throw new Error('Unknown dropdown\'s mode');
  }

  _setupDom() {
    this.selection = this.dropdown.querySelector('.js-dropdown__selection');
    this.decrementButtons = this.dropdown.querySelectorAll('.js-dropdown__decrement-button');
    this.incrementButtons = this.dropdown.querySelectorAll('.js-dropdown__increment-button');
    this.quantityNodes = this.dropdown.querySelectorAll('.js-dropdown__quantity');
  }

  _setupBind() {
    this._handleSelectionButtonClick = this._handleSelectionButtonClick.bind(this);
    this._handleDecrementButtonClick = this._handleDecrementButtonClick.bind(this);
    this._handleIncrementButtonClick = this._handleIncrementButtonClick.bind(this);
    this._handleClearButtonClick = this._handleClearButtonClick.bind(this);
    this._handleApplyButtonClick = this._handleApplyButtonClick.bind(this);
  }

  _toggleMenu() {
    const menu = this.dropdown.querySelector('.js-dropdown__menu');
    menu.classList.toggle('dropdown__menu_state_expanded');
    menu.classList.toggle('js-dropdown__menu_state_expanded');
  };

  _handleDocumentClick(evt) {
    const target = evt.target.closest('.dropdown__container');
    if (target) {
      return;
    } else {
      const menus = document.querySelectorAll('.js-dropdown__menu_state_expanded');
      menus.forEach((menu) => {
        menu.classList.remove('dropdown__menu_state_expanded');
        menu.classList.remove('js-dropdown__menu_state_expanded');
      });
    }
  };

  _toggleClearButton() {
    const clearButton = this.dropdown.querySelector('.js-dropdown__clear-button');
    this._updateTotalCount();
    if (this.totalCount > 0) {
      clearButton.classList.remove('dropdown__clear-button_visibility_invisible');
    } else {
      clearButton.classList.add('dropdown__clear-button_visibility_invisible');
    }
  }

  _setPluralForGuests(count) {
    if (count === 1) {
      return 'гость';
    } else if (count >= 2 && count <= 4) {
      return 'гостя';
    } else if (count === 0 || count >= 5) {
      return 'гостей';
    }
  };

  _setPluralForBedrooms(count) {
    if (count === 1) {
      return `${count} спальня`;
    } else if (count >= 2 && count <= 4) {
      return `${count} спальни`;
    } else if (count === 0 || count >= 5) {
      return `${count} спален`;
    }
  };

  _setPluralForBeds(count) {
    if (count === 1) {
      return `${count} кровать`;
    } else if (count >= 2 && count <= 4) {
      return `${count} кровати`;
    } else if (count === 0 || count >= 5) {
      return `${count} кроватей`;
    }
  };

  _updateTotalCount() {
    this.totalCount = 0;
    this.quantityNodes.forEach((node) => {
      this.totalCount += +node.innerText;
    });
  }

  _updateType() {
    this.type = this.dropdown.getAttribute('data-type');
  }

  _updatePlaceholder() {
    const placeholder = this.dropdown.querySelector('.js-dropdown__selection-text');
    const defaultPlaceholderText = placeholder.getAttribute('data-placeholder');

    if (this.totalCount > 0) {
      placeholder.innerText = ``;
      if (this.type === this.Mode.PEOPLE) {
        placeholder.innerText = this.totalCount + ' ' + this._setPluralForGuests(this.totalCount);
      } else if (this.type === this.Mode.FACILITIES) {
        const bedroomCount = Number.parseInt(this.quantityNodes[0].innerText);
        const bedCount = Number.parseInt(this.quantityNodes[1].innerText);
        placeholder.innerText = this._setPluralForBedrooms(bedroomCount) + ', ' + this._setPluralForBeds(bedCount) + '...';
      } else throw new Error('Unknown dropdown\'s mode');
    } else {
      placeholder.innerText = defaultPlaceholderText;
    }
  }

  _disableButtons() {
    const optionList = this.dropdown.querySelectorAll('.js-dropdown__option');
    this._setupDom();

    optionList.forEach((option) => {
      const index = option.getAttribute('data-index');
      const currentCount = this.quantityNodes[index].innerText;
      const minCount = this.decrementButtons[index].getAttribute('data-min-count');
      const maxCount = this.incrementButtons[index].getAttribute('data-max-count');
      if (currentCount === minCount) {
        this.decrementButtons[index].disabled = true;
      }
      if (currentCount === maxCount) {
        this.incrementButtons[index].disabled = true;
      }
    });
  }

  _enableDecrementButton(button) {
    button.disabled = false;
  }

  _incrementCount() {
    const incrementButton = event.target;
    const index = incrementButton.getAttribute('data-index');
    const maxCount = Number.parseInt(incrementButton.getAttribute('data-max-count'));
    let currentCountNode = this.quantityNodes[index];
    let currentCountValue = Number.parseInt(currentCountNode.innerText);
    let decrementButton = this.decrementButtons[index];
    if (currentCountValue < maxCount) {
      currentCountValue += 1;
      currentCountNode.innerHTML = ``;
      currentCountNode.innerHTML = currentCountValue;
      this._enableDecrementButton(decrementButton);
    }
  }

  _decrementCount() {
    const decrementButton = event.target;
    const index = decrementButton.getAttribute('data-index');
    const minCount = Number.parseInt(decrementButton.getAttribute('data-min-count'));
    let currentCountNode = this.quantityNodes[index];
    let currentCountValue = Number.parseInt(currentCountNode.innerText);
    if (currentCountValue > minCount) {
      currentCountValue -= 1;
      currentCountNode.innerHTML = ``;
      currentCountNode.innerHTML = currentCountValue;
    }
  }

  _resetCounts() {
    this.quantityNodes.forEach((node) => {
      node.innerText = 0;
    });
  }

  _handleSelectionButtonClick() {
    this._toggleMenu();
  }

  _handleDecrementButtonClick() {
    this._decrementCount();
    this._disableButtons();
    this._updateTotalCount();
    this._updatePlaceholder();
    if (this.type === this.Mode.PEOPLE) {
      this._toggleClearButton();
    }
  }

  _handleIncrementButtonClick() {
    this._incrementCount();
    this._disableButtons();
    this._updateTotalCount();
    this._updatePlaceholder();
    if (this.type === this.Mode.PEOPLE) {
      this._toggleClearButton();
    }
  }

  _handleClearButtonClick() {
    this._resetCounts();
    this._disableButtons();
    this._updateTotalCount();
    this._updatePlaceholder();
    this._toggleClearButton();
  }

  _handleApplyButtonClick() {
    this._toggleMenu();
  }

  _addListenersForPeopleMode() {
    const clearButton = this.dropdown.querySelector('.js-dropdown__clear-button');
    const applyButton = this.dropdown.querySelector('.js-dropdown__apply-button');

    this._setupDom();
    this.selection.addEventListener('click', this._handleSelectionButtonClick);
    this.decrementButtons.forEach((decrementButton) => {
      decrementButton.addEventListener('click', this._handleDecrementButtonClick);
    });
    this.incrementButtons.forEach((incrementButton) => {
      incrementButton.addEventListener('click', this._handleIncrementButtonClick);
    });
    clearButton.addEventListener('click', this._handleClearButtonClick);
    applyButton.addEventListener('click', this._handleApplyButtonClick);
    this._toggleClearButton();
  }

  _addListenersForFacilitiesMode() {
    this._setupDom();
    this.selection.addEventListener('click', this._handleSelectionButtonClick);
    this.decrementButtons.forEach((decrementButton) => {
      decrementButton.addEventListener('click', this._handleDecrementButtonClick);
    });
    this.incrementButtons.forEach((incrementButton) => {
      incrementButton.addEventListener('click', this._handleIncrementButtonClick);
    });
  }
}

const dropdowns = document.querySelectorAll('.js-dropdown');

dropdowns.forEach((it) => {
  const dropdown = new Dropdown(it);
  dropdown.init();
});
