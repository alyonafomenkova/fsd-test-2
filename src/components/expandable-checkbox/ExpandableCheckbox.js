import './expandable-checkbox.scss';

class ExpandableCheckbox {
  constructor(checkbox) {
    this.checkbox = checkbox;
  }

  init() {
    this._setupBind();
    this.checkbox.addEventListener('click', this._handleCheckboxClick);
    document.addEventListener('click', this._handleDocumentClick);
  }

  _setupBind() {
    this._handleCheckboxClick = this._handleCheckboxClick.bind(this);
  }

  _handleCheckboxClick(evt) {
    const target = evt.target.closest('.js-expandable-checkbox');

    target.classList.toggle('js-expandable-checkbox_state_expanded');
    target.classList.toggle('expandable-checkbox_state_expanded');
  }

  _handleDocumentClick(evt) {
    const target = evt.target.closest('.js-expandable-checkbox__selection') || evt.target.closest('.js-expandable-checkbox__wrapper');

    if (target) {
      return;
    } else {
      const expandedCheckboxes = document.querySelectorAll('.js-expandable-checkbox_state_expanded');
      expandedCheckboxes.forEach((checkbox) => {
        checkbox.classList.remove('js-expandable-checkbox_state_expanded');
        checkbox.classList.remove('expandable-checkbox_state_expanded');
      });
    }
  }
}

const selections = document.querySelectorAll('.js-expandable-checkbox__selection');

selections.forEach((it) => {
  const selection = new ExpandableCheckbox(it);
  selection.init();
});
