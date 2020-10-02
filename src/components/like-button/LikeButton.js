const ACTIVE_BUTTON_CLASS = 'like-button_active';

class LikeButton {
  constructor(likeButton) {
    this.likeButton = likeButton;
  }

  init() {
    this._setupBind();
    this._setIconForActiveButton();
    this.likeButton.addEventListener('click', LikeButton._handleLikeButtonClick);
  }

  _setupBind() {
    LikeButton._handleLikeButtonClick = LikeButton._handleLikeButtonClick.bind(this);
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

  static _handleLikeButtonClick(evt) {
    evt.stopPropagation();
    const targetButton = evt.target;
    targetButton.classList.toggle(ACTIVE_BUTTON_CLASS);
    LikeButton._toggleLikeIcon(targetButton);
    LikeButton._updateCountOfLikes(targetButton);
  }
}

const likeButtons = document.querySelectorAll('.js-like-button');

likeButtons.forEach((it) => {
  const likeButton = new LikeButton(it);
  likeButton.init();
});
