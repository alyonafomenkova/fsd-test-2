import './rating.scss';

jQuery(function() {
  const toggleSelectedIcon = () => {
    const allIcons = $('.rating__star');
    const allSelectedIcons = $('.selected').find('.rating__star');
    allIcons.each(function() {
      $(this).html('star_border');
    });
    allSelectedIcons.each(function() {
      $(this).html('star');
    });
  };

  toggleSelectedIcon();

  $('.rating__item').on('click', function(){
    const onStar = parseInt($(this).data('value'), 10);
    const stars = $(this).parent().children('li.rating__item');
    for (let i = 0; i < stars.length; i++) {
      $(stars[i]).removeClass('selected');
      toggleSelectedIcon();
    }
    for (let i = 0; i < onStar; i++) {
      $(stars[i]).addClass('selected');
      toggleSelectedIcon();
    }
  });
});
