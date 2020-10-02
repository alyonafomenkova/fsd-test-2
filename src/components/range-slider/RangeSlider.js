import '../../../node_modules/ion-rangeslider/js/ion.rangeSlider.min.js';

class RangeSlider {
  constructor(slider) {
    this.slider = slider;
    this.settings = {
      type: 'double',
      postfix: '₽',
      step: 500,
      values_separator: ' - ',
    };
  }

  init() {
    $(this.slider).ionRangeSlider(this.settings);
  }
}

const sliders = document.querySelectorAll('.js-range-slider__input');

sliders.forEach((it) => {
  const slider = new RangeSlider(it);
  slider.init();
});
