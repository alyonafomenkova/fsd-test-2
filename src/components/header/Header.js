import { boundMethod } from 'autobind-decorator';

class Header {
  constructor(header) {
    this.header = header;
  }

  init() {
    const toggleMenuButton = this.header.querySelector('.js-header__toggle-menu-btn');

    this._toggleJsClass();
    this._addClassNameForAuthorizedUser();
    this._changeState();
    toggleMenuButton.addEventListener('click', Header._handleToggleMenuButtonClick);
  }

  _toggleJsClass() {
    const toggleMenuButton = this.header.querySelector('.js-header__toggle-menu-btn');
    const toggleSubmenuList = this.header.querySelectorAll('.js-header__nav-item.header__submenu');

    toggleMenuButton.classList.add('header__toggle-menu-btn_has-js');

    toggleSubmenuList.forEach((submenu) => {
      const button = submenu.querySelector('.js-header__toggle-submenu-btn');
      button.classList.add('header__toggle-submenu-btn_has-js');
    });
  }

  _addClassNameForAuthorizedUser() {
    const userNames = this.header.querySelectorAll('.js-header__user-name');

    userNames.forEach((name) => {
      const headerWrapper = name.closest('.js-header__buttons-wrapper');
      headerWrapper.classList.add('header__buttons-wrapper_authorized');
    });
  }

  _changeState() {
    const headerNavMenu = this.header.querySelectorAll('.js-header__main-nav');

    headerNavMenu.forEach((navMenu) => {
      const wrapper = navMenu.closest('.header__content-wrapper');
      wrapper.classList.remove('header__content-wrapper-menu_opened');
    });
  }

  @boundMethod
  static _handleToggleMenuButtonClick(evt) {
    const button = evt.target;
    const wrapper = button.closest('.header__content-wrapper');

    wrapper.classList.toggle('header__content-wrapper-menu_opened');
  }
}

export default Header;
