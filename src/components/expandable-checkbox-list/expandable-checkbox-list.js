import './expandable-checkbox-list.scss';

jQuery(function() {
  const EXPANDED_CLASS = 'expandable-checkbox--expanded';
  const selection = $('.js-expandable-checkbox__selection');

  selection.click(function() {
    const target = $(event.target).closest('.js-expandable-checkbox');
    const checkboxList = $(target.find('.js-checkbox'));
    target.toggleClass(EXPANDED_CLASS);
    target.hasClass(EXPANDED_CLASS) ? checkboxList.show() : checkboxList.hide();
  });
});
