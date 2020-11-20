import { boundMethod } from 'autobind-decorator';

class ExpandableCheckbox {
  constructor(checkbox) {
    this.checkbox = checkbox;
  }

  init() {
    this.checkbox.addEventListener('click', ExpandableCheckbox._handleCheckboxClick);
    document.addEventListener('click', ExpandableCheckbox._handleDocumentClick);
  }

  @boundMethod
  static _handleCheckboxClick(evt) {
    const target = evt.target.closest('.js-expandable-checkbox');

    target.classList.toggle('js-expandable-checkbox_expanded');
    target.classList.toggle('expandable-checkbox_expanded');
  }

  static _handleDocumentClick(evt) {
    const target = evt.target.closest('.js-expandable-checkbox__selection') || evt.target.closest('.js-expandable-checkbox__wrapper');

    if (!target) {
      const expandedCheckboxes = document.querySelectorAll('.js-expandable-checkbox_expanded');
      expandedCheckboxes.forEach((checkbox) => {
        checkbox.classList.remove('js-expandable-checkbox_expanded');
        checkbox.classList.remove('expandable-checkbox_expanded');
      });
    }
  }
}

export default ExpandableCheckbox;
