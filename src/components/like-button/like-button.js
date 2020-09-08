import './like-button.scss';

jQuery(function() {
  const ACTIVE_BUTTON_CLASS = 'like-button_active';
  const likeButtons = $('.js-like-button');
  const activeLikeButtons = $('.js-like-button_active');
  const toggleLikeIcon = (button) => {
    if (button.hasClass(ACTIVE_BUTTON_CLASS)) {
      const likeIcon = button.find('.js-like-button__icon');
      likeIcon.html('favorite');
    }
  };
  const updateCountOfLikes = (button) => {
    const countOfLikes = button.find('.js-like-button__count-likes');
    let oldValue = countOfLikes.text();
    let newValue;
    if (button.hasClass(ACTIVE_BUTTON_CLASS)) {
      newValue = ++oldValue;
      countOfLikes.html(newValue);
    } else {
      newValue = --oldValue;
      countOfLikes.html(newValue);
    }
  };

  const handleLikeButtonClick = () => {
    event.stopPropagation();
    const targetButton = $(event.target);
    targetButton.toggleClass(ACTIVE_BUTTON_CLASS);
    toggleLikeIcon(targetButton);
    updateCountOfLikes(targetButton);
  };

  activeLikeButtons.each(function() {
    toggleLikeIcon($(this))
  });

  likeButtons.click(handleLikeButtonClick);
});
