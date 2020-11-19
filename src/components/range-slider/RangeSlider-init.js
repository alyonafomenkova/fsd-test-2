import RangeSlider from './RangeSlider';

const sliders = document.querySelectorAll('.js-range-slider__input');

sliders.forEach((it) => {
  const slider = new RangeSlider(it);
  slider.init();
});
