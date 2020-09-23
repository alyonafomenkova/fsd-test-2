import './rating.scss';

class Rating {
  constructor(rating) {
    this.rating = rating;
  }

  init() {
    const ratingButtons = this.rating.querySelectorAll('.js-rating__item');

    this._setupBind();
    this._toggleSelectedIcon();
    ratingButtons.forEach((button) => {
      button.addEventListener('click', this._handleRatingButtonClick)
    });
  }

  _setupBind() {
    this._handleRatingButtonClick = this._handleRatingButtonClick.bind(this);
  }

  _handleRatingButtonClick(evt) {
    const target = evt.target;
    const item = target.closest('.js-rating__item');
    const value = Number(item.getAttribute('data-value'));
    const stars = this.rating.querySelectorAll('li.rating__item');

    for (let i = 0; i < stars.length; i++) {
      $(stars[i]).removeClass('js-rating__item_selected');
      this._toggleSelectedIcon();
    }

    for (let i = 0; i < value; i++) {
      $(stars[i]).addClass('js-rating__item_selected');
      this._toggleSelectedIcon();
    }
  }

  _toggleSelectedIcon() {
    const allIcons = this.rating.querySelectorAll('.js-rating__star');
    const selectedItems = this.rating.querySelectorAll('.js-rating__item_selected');
    const allSelectedIcons = [];

    selectedItems.forEach((item) => {
      const selectedIcon = item.querySelector('.js-rating__star');
      allSelectedIcons.push(selectedIcon);
    });

    allIcons.forEach((icon) => {
      icon.innerHTML = 'star_border';
    });

    allSelectedIcons.forEach((icon) => {
      icon.innerHTML = 'star';
    });
  }
}

const ratings = document.querySelectorAll('.js-rating');

ratings.forEach((it) => {
  const rating = new Rating(it);
  rating.init();
});
