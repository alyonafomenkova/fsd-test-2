import './header.scss';

class Header {
  constructor(header) {
    this.header = header;
  }

  init() {
    this._toggleJsClass();
    this._addClassNameForAuthorizedUser();
    this._changeState();
    this._setupBind();
  }

  _setupBind() {
    const toggleMenuButton = this.header.querySelector('.js-header__toggle-menu-btn');

    this._handleToggleMenuButtonClick = this._handleToggleMenuButtonClick.bind(this);
    toggleMenuButton.addEventListener('click', this._handleToggleMenuButtonClick);
  }

  _toggleJsClass() {
    const toggleMenuButton = this.header.querySelector('.js-header__toggle-menu-btn');
    const toggleSubmenuList = this.header.querySelectorAll('.js-header__nav-item.header__submenu');

    toggleMenuButton.classList.remove('header__toggle-menu-btn_state_without-js');
    toggleMenuButton.classList.add('header__toggle-menu-btn_state_with-js');

    toggleSubmenuList.forEach((submenu) => {
      const button = submenu.querySelector('.js-header__toggle-submenu-btn');
      button.classList.remove('header__toggle-submenu-btn_state_without-js');
      button.classList.add('header__toggle-submenu-btn_state_with-js');
    });
  }

  _addClassNameForAuthorizedUser() {
    const userNames = this.header.querySelectorAll('.js-header__user-name');

    userNames.forEach((name) => {
      const headerWrapper = name.closest('.js-header__buttons-wrapper');
      headerWrapper.classList.add('header__buttons-wrapper_state_authorized');
    });
  }

  _changeState() {
    const headerNavMenu = this.header.querySelectorAll('.js-header__main-nav');

    headerNavMenu.forEach((navMenu) => {
      const wrapper = navMenu.closest('.header__content-wrapper');
      wrapper.classList.remove('header__content-wrapper-menu_state_opened');
      wrapper.classList.add('header__content-wrapper-menu_state_closed');
    });
  }

  _handleToggleMenuButtonClick(evt) {
    const button = evt.target;
    const wrapper = button.closest('.header__content-wrapper');
    if (wrapper.classList.contains('header__content-wrapper-menu_state_closed')) {
      wrapper.classList.remove('header__content-wrapper-menu_state_closed');
      wrapper.classList.add('header__content-wrapper-menu_state_opened');
    } else {
      wrapper.classList.add('header__content-wrapper-menu_state_closed');
      wrapper.classList.remove('header__content-wrapper-menu_state_opened');
    }
  }
}

const headers = document.querySelectorAll('.js-header');

headers.forEach((it) => {
  const header = new Header(it);
  header.init();
});
