import { boundMethod } from 'autobind-decorator';

const ACTIVE_BUTTON_CLASS = 'like-button_active';
class LikeButton {
  constructor(likeButton) {
    this.likeButton = likeButton;
  }

  init() {
    this._setIconForActiveButton();
    this.likeButton.addEventListener('click', LikeButton._handleLikeButtonClick);
  }

  _setIconForActiveButton() {
    if (this.likeButton.classList.contains(ACTIVE_BUTTON_CLASS)) {
      LikeButton._toggleLikeIcon(this.likeButton);
    }
  }

  static _toggleLikeIcon(button) {
    const likeIcon = button.querySelector('.js-like-button__icon');
    const isActiveButton = button.classList.contains(ACTIVE_BUTTON_CLASS);

    isActiveButton ? likeIcon.innerHTML = 'favorite' : likeIcon.innerHTML = 'favorite_border';
  }

  static _updateCountOfLikes(button) {
    const countOfLikes = button.querySelector('.js-like-button__count-likes');
    const isActiveButton = button.classList.contains(ACTIVE_BUTTON_CLASS);
    const oldValue = Number(countOfLikes.innerText);
    let newValue;

    isActiveButton ? (newValue = oldValue + 1) : (newValue = oldValue - 1);
    countOfLikes.innerHTML = newValue;
  }

  @boundMethod
  static _handleLikeButtonClick(evt) {
    evt.stopPropagation();
    const targetButton = evt.target;
    targetButton.classList.toggle(ACTIVE_BUTTON_CLASS);
    LikeButton._toggleLikeIcon(targetButton);
    LikeButton._updateCountOfLikes(targetButton);
  }
}

export default LikeButton;
