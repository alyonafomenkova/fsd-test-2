import './expandable-checkbox-list.scss';

jQuery(function() {
  const selection = $('.expandable-checkbox__selection');
  selection.click(function() {
    const target = $(event.target).closest('.expandable-checkbox');
    const checkboxList = $(target.find('.checkbox'));
    target.toggleClass('expandable-checkbox--expanded');
    target.hasClass('expandable-checkbox--expanded') ? checkboxList.show() : checkboxList.hide();
  });
});
