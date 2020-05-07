import './dropdown.scss';
import './dropdown.pug';
import '../../../node_modules/item-quantity-dropdown/lib/item-quantity-dropdown.min.js';

jQuery(function() {
  const menu = $('.iqdropdown');
  const $this = $(this);
  const clearButton = $('.iqdropdown-menu-buttons__clear');
  const setPluralForGuests = (count) => {
    if (count === 1) {
      return 'гость';
    } else if (count >= 2 && count <= 4) {
      return 'гостя';
    } else if (count === 0 || count >= 5) {
      return 'гостей';
    }
  };
  const setPluralForBedroom = (item) => {
    if (item.bedroom === 1) {
      return `${item.bedroom} спальня`;
    } else if (item.bedroom >= 2 && item.bedroom <= 4) {
      return `${item.bedroom} спальни`;
    } else if (item.bedroom === 0 || item.bedroom >= 5) {
      return `${item.bedroom} спален`;
    }
  };
  const setPluralForBed = (item) => {
    if (item.bed === 1) {
      return `${item.bed} кровать`;
    } else if (item.bed >= 2 && item.bed <= 4) {
      return `${item.bed} кровати`;
    } else if (item.bed === 0 || item.bed >= 5) {
      return `${item.bed} кроватей`;
    }
  };
  const clear = () => {
    event.preventDefault();
    $('.iqdropdown-menu').find('.iqdropdown-item-controls').remove();
    $('.iqdropdown--guests').iqDropdown(createOptions(additionalGuestsOptions));
  };
  const showClearButton = (target) => {
    const selection = target.find('.iqdropdown-selection');
    selection.each(function() {
      let title = $(this).text();
      if (title === 'Сколько гостей') {
        $(this).parent().find('.iqdropdown-menu-buttons__clear').css({'visibility': 'hidden'});
      } else {
        $(this).parent().find('.iqdropdown-menu-buttons__clear').css({'visibility': 'visible'});
      }
    });

  };
  const baseOptions = {
    maxItems: Infinity,
    minItems: 0,
    controls: {
      position: 'right',
      displayCls: 'iqdropdown-item-display',
      controlsCls: 'iqdropdown-item-controls',
      counterCls: 'counter'
    },
  };
  const additionalGuestsOptions = {
    setSelectionText: (itemCount, totalItems) => {
      if (menu.hasClass('menu-open')) {
        if (totalItems === 0) {
          return `Сколько гостей`;
        } else {
          return totalItems + ' ' + setPluralForGuests(totalItems);
        }
      }
    },
    onChange: (id, count, totalItems) => {
      const target = $(event.target).closest('.iqdropdown--guests');
      if (totalItems !== 0) {
        showClearButton(target);
      } else {
        target.find('.iqdropdown-menu-buttons__clear').css({'visibility': 'hidden'});
      }
    },
  };
  const additionalFacilitiesOptions = {
    setSelectionText: (itemCount, totalItems) => {
      if (menu.hasClass('menu-open')) {
        return setPluralForBedroom(itemCount) + ', ' + setPluralForBed(itemCount) + '...';
      }
    },
  };
  const createOptions  = (additionalOptions) => {
    const options = $.extend({}, baseOptions, additionalOptions);
    return options;
  };
  clearButton.click(clear);
  $('.iqdropdown--guests').iqDropdown(createOptions(additionalGuestsOptions));
  $('.iqdropdown--facilities').iqDropdown(createOptions(additionalFacilitiesOptions));
  showClearButton($('.iqdropdown--guests'));
});
