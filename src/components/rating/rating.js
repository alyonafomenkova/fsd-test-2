import './rating.scss';

jQuery(function() {
  const ratinButtons = $('.js-rating__item');

  function toggleSelectedIcon() {
    const allIcons = $('.js-rating__star');
    const allSelectedIcons = $('.js-rating__item_selected').find('.rating__star');
    allIcons.each(function() {
      $(this).html('star_border');
    });
    allSelectedIcons.each(function() {
      $(this).html('star');
    });
  }

  function handleRatingButtonClick() {
    const onStar = parseInt($(this).data('value'), 10);
    const stars = $(this).parent().children('li.rating__item');
    for (let i = 0; i < stars.length; i++) {
      $(stars[i]).removeClass('js-rating__item_selected');
      toggleSelectedIcon();
    }
    for (let i = 0; i < onStar; i++) {
      $(stars[i]).addClass('js-rating__item_selected');
      toggleSelectedIcon();
    }
  }

  ratinButtons.click(handleRatingButtonClick);
  toggleSelectedIcon();
});
