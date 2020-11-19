import Rating from './Rating';

const ratings = document.querySelectorAll('.js-rating');

ratings.forEach((it) => {
  const rating = new Rating(it);
  rating.init();
});
