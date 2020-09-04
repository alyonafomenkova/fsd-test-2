import '../button/button.js';
import './dropdown.scss';
import './dropdown.pug';

class Dropdown {
  constructor(dropdown) {
    this.dropdown = dropdown;
    this.type = this.dropdown.getAttribute('data-type');
    this.selection = this.dropdown.querySelector('.js-dropdown__selection');
    this.placeholder = this.dropdown.querySelector('.js-dropdown__selection-text');
    this.defaultPlaceholderText = this.placeholder.getAttribute('data-placeholder');
    this.menu = this.dropdown.querySelector('.js-dropdown__menu');
    this.optionList = this.dropdown.querySelectorAll('.js-dropdown__option');
    this.decrementButtons = this.dropdown.querySelectorAll('.js-dropdown__decrement-button');
    this.incrementButtons = this.dropdown.querySelectorAll('.js-dropdown__increment-button');
    this.quantityNodes = this.dropdown.querySelectorAll('.js-dropdown__quantity');
    this.handleSelectionButtonClick = this.handleSelectionButtonClick.bind(this);
    this.handleDecrementButtonClick = this.handleDecrementButtonClick.bind(this);
    this.handleIncrementButtonClick = this.handleIncrementButtonClick.bind(this);
    this.handleClearButtonClick = this.handleClearButtonClick.bind(this);
    this.handleApplyButtonClick = this.handleApplyButtonClick.bind(this);
    this.totalCount;
    this.Mode = {
      PEOPLE: `people`,
      FACILITIES: `facilities`
    };
  }

  toggleMenu() {
    this.menu.classList.toggle('dropdown__menu--expanded');
  };

  handleDocumentClick(evt) {
    const target = evt.target.closest('.dropdown__container');
    if (target) {
      return;
    } else {
      const menus = document.querySelectorAll('.dropdown__menu--expanded');
      menus.forEach((menu) => {
        menu.classList.remove('dropdown__menu--expanded');
      });
    }
  };

  toggleClearButton() {
    const clearButton = this.dropdown.querySelector('.js-dropdown__clear-button');
    this.updateTotalCount();
    if (this.totalCount > 0) {
      clearButton.classList.remove('dropdown__clear-button--invisible');
    } else {
      clearButton.classList.add('dropdown__clear-button--invisible');
    }
  }

  setPluralForGuests(count) {
    if (count === 1) {
      return 'гость';
    } else if (count >= 2 && count <= 4) {
      return 'гостя';
    } else if (count === 0 || count >= 5) {
      return 'гостей';
    }
  };

  setPluralForBedrooms(count) {
    if (count === 1) {
      return `${count} спальня`;
    } else if (count >= 2 && count <= 4) {
      return `${count} спальни`;
    } else if (count === 0 || count >= 5) {
      return `${count} спален`;
    }
  };

  setPluralForBeds(count) {
    if (count === 1) {
      return `${count} кровать`;
    } else if (count >= 2 && count <= 4) {
      return `${count} кровати`;
    } else if (count === 0 || count >= 5) {
      return `${count} кроватей`;
    }
  };

  updateTotalCount() {
    this.totalCount = 0;
    this.quantityNodes.forEach((node) => {
      this.totalCount += +node.innerText;
    });
  }

  updatePlaceholder() {
    if (this.totalCount > 0) {
      this.placeholder.innerText = ``;
      if (this.type === this.Mode.PEOPLE) {
        this.placeholder.innerText = this.totalCount + ' ' + this.setPluralForGuests(this.totalCount);
      } else if (this.type === this.Mode.FACILITIES) {
        const bedroomCount = Number.parseInt(this.quantityNodes[0].innerText);
        const bedCount = Number.parseInt(this.quantityNodes[1].innerText);
        this.placeholder.innerText = this.setPluralForBedrooms(bedroomCount) + ', ' + this.setPluralForBeds(bedCount) + '...';
      } else throw new Error('Unknown dropdown\'s mode');
    } else {
      this.placeholder.innerText = this.defaultPlaceholderText;
    }
  }

  disableButtons() {
    this.optionList.forEach((option) => {
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

  enableDecrementButton(button) {
    button.disabled = false;
  }

  incrementCount() {
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
      this.enableDecrementButton(decrementButton);
    }
  }

  decrementCount() {
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

  resetCounts() {
    this.quantityNodes.forEach((node) => {
      node.innerText = 0;
    });
  }

  handleSelectionButtonClick() {
    this.toggleMenu();
  }

  handleDecrementButtonClick() {
    this.decrementCount();
    this.disableButtons();
    this.updateTotalCount();
    this.updatePlaceholder();
    if (this.type === this.Mode.PEOPLE) {
      this.toggleClearButton();
    }
  }

  handleIncrementButtonClick() {
    this.incrementCount();
    this.disableButtons();
    this.updateTotalCount();
    this.updatePlaceholder();
    if (this.type === this.Mode.PEOPLE) {
      this.toggleClearButton();
    }
  }

  handleClearButtonClick() {
    this.resetCounts();
    this.disableButtons();
    this.updateTotalCount();
    this.updatePlaceholder();
    this.toggleClearButton();
  }

  handleApplyButtonClick() {
    this.toggleMenu();
  }

  addListenersForPeopleMode() {
    const clearButton = this.dropdown.querySelector('.js-dropdown__clear-button');
    const applyButton = this.dropdown.querySelector('.js-dropdown__apply-button');
    this.selection.addEventListener('click', this.handleSelectionButtonClick);
    this.decrementButtons.forEach((decrementButton) => {
      decrementButton.addEventListener('click', this.handleDecrementButtonClick);
    });
    this.incrementButtons.forEach((incrementButton) => {
      incrementButton.addEventListener('click', this.handleIncrementButtonClick);
    });
    clearButton.addEventListener('click', this.handleClearButtonClick);
    applyButton.addEventListener('click', this.handleApplyButtonClick);
    this.toggleClearButton();
  }

  addListenersForFacilitiesMode() {
    this.selection.addEventListener('click', this.handleSelectionButtonClick);
    this.decrementButtons.forEach((decrementButton) => {
      decrementButton.addEventListener('click', this.handleDecrementButtonClick);
    });
    this.incrementButtons.forEach((incrementButton) => {
      incrementButton.addEventListener('click', this.handleIncrementButtonClick);
    });
  }

  init() {
    this.disableButtons();
    this.updateTotalCount();
    this.updatePlaceholder();
    document.addEventListener('click', this.handleDocumentClick);
    if (this.type === this.Mode.PEOPLE) {
      this.addListenersForPeopleMode();
    } else if (this.type === this.Mode.FACILITIES) {
      this.addListenersForFacilitiesMode();
    } else throw new Error('Unknown dropdown\'s mode');
  }
}

const dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach((it) => {
  const dropdown = new Dropdown(it);
  dropdown.init();
});
