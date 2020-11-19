import LikeButton from './LikeButton';

const likeButtons = document.querySelectorAll('.js-like-button');

likeButtons.forEach((it) => {
  const likeButton = new LikeButton(it);
  likeButton.init();
});
