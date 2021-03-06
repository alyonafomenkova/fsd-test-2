import { boundMethod } from 'autobind-decorator';

class Rating {
  constructor(rating) {
    this.rating = rating;
  }

  init() {
    const ratingButtons = this.rating.querySelectorAll('.js-rating__item');

    this._toggleSelectedIcon();
    ratingButtons.forEach((button) => {
      button.addEventListener('click', this._handleRatingButtonClick);
    });
  }

  @boundMethod
  _handleRatingButtonClick(evt) {
    const item = evt.target.closest('.js-rating__item');
    const value = Number(item.getAttribute('data-value'));
    const stars = this.rating.querySelectorAll('li.rating__item');

    for (let i = 0; i < stars.length; i += 1) {
      $(stars[i]).removeClass('js-rating__item_selected');
      this._toggleSelectedIcon();
    }

    for (let i = 0; i < value; i += 1) {
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

export default Rating;
