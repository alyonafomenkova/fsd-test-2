import DateDropdown from './DateDropdown';

const dateDropdownList = document.querySelectorAll('.js-date-dropdown');
dateDropdownList.forEach((dateDropdown) => new DateDropdown(dateDropdown).init());
