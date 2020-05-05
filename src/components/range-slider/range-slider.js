import './range-slider.scss';
import '../../../node_modules/ion-rangeslider/js/ion.rangeSlider.min.js';

jQuery(function() {
  const settings = {
    type: 'double',
    postfix: '₽',
    step: 500,
    values_separator: ' - '
  };
  $('.range-slider__input').ionRangeSlider(settings);
});
