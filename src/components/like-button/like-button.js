import './like-button.scss';

jQuery(function() {
  const likeButtons = $('.like-button');
  const activeLikeButtons = $('.like-button--active');
  const toggleLikeIcon = (button) => {
    if (button.hasClass('like-button--active')) {
      const likeIcon = button.find('.like-button__icon');
      likeIcon.html('favorite');
    }
  };
  const updateCountOfLikes = (button) => {
    const countOfLikes = button.find('.like-button__count-likes');
    let oldValue = countOfLikes.text();
    let newValue;
    if (button.hasClass('like-button--active')) {
      newValue = ++oldValue;
      countOfLikes.html(newValue);
    } else {
      newValue = --oldValue;
      countOfLikes.html(newValue);
    }
  };

  activeLikeButtons.each(function() {
    toggleLikeIcon($(this))
  });

  likeButtons.click(function() {
    event.stopPropagation();
    const targetButton = $(event.target);
    targetButton.toggleClass('like-button--active');
    toggleLikeIcon(targetButton);
    updateCountOfLikes(targetButton);
  })
});
