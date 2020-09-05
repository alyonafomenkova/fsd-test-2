import './expandable-checkbox-list.scss';

jQuery(function() {
  const EXPANDED_CLASS = 'expandable-checkbox_state_expanded';
  const selection = $('.js-expandable-checkbox__selection');

  function handleDocumentClick(evt) {
    const target = evt.target.closest('.js-expandable-checkbox__selection') || evt.target.closest('.checkbox_type_expandable');
    if (target) {
      return;
    } else {
      const expandedCheckboxes = document.querySelectorAll('.expandable-checkbox_state_expanded');
      expandedCheckboxes.forEach((checkbox) => {
        checkbox.classList.remove('expandable-checkbox_state_expanded');
      });
    }
  }

  selection.click(function() {
    const target = $(event.target).closest('.js-expandable-checkbox');
    const checkboxList = $(target.find('.js-checkbox'));
    target.toggleClass(EXPANDED_CLASS);
    target.hasClass(EXPANDED_CLASS) ? checkboxList.show() : checkboxList.hide();
  });

  $(document).click(handleDocumentClick);
});
