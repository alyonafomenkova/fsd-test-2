import 'ion-rangeslider/js/ion.rangeSlider.min.js';

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

export default RangeSlider;
