import './expandable-checkbox.scss';

jQuery(function() {
  const EXPANDED_CLASS = 'expandable-checkbox_state_expanded';
  const selection = $('.js-expandable-checkbox__selection');

  function handleDocumentClick(evt) {
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

  selection.click(function() {
    const target = $(event.target).closest('.js-expandable-checkbox');
    const checkboxList = $(target.find('.js-expandable-checkbox__wrapper'));
    target.toggleClass(EXPANDED_CLASS);
    if (target.hasClass(EXPANDED_CLASS)) {
      checkboxList.show();
      target.addClass('js-expandable-checkbox_state_expanded');
    } else {
      checkboxList.hide();
    }
  });

  $(document).click(handleDocumentClick);
});
