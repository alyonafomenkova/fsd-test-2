import ExpandableCheckbox from './ExpandableCheckbox';

const selections = document.querySelectorAll('.js-expandable-checkbox__selection');

selections.forEach((it) => {
  const selection = new ExpandableCheckbox(it);
  selection.init();
});
