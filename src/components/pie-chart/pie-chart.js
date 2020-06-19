import './pie-chart.scss';

const pieChart = document.querySelector('.js-pie-chart');
const circles = document.querySelectorAll('.js-pie-chart__circle');
const labels = document.querySelectorAll('.js-pie-chart__description-item');
const count = document.querySelector('.js-pie-chart__number');
const text = document.querySelector('.js-pie-chart__label');
const Type = {
  FINE: 'fine',
  GOOD: 'good',
  NORMAL: 'normal',
  BAD: 'bad',
};
const Color = {
  FINE: '#FFE39C',
  GOOD: '#6FCF97',
  NORMAL: '#BC9CFF',
  BAD: '#919191',
  DEFAULT: '#000000',
};

const updateColor = (type) => {
  switch (type) {
    case Type.FINE:
      count.setAttribute('fill', Color.FINE);
      text.setAttribute('fill', Color.FINE);
      break;
    case Type.GOOD:
      count.setAttribute('fill', Color.GOOD);
      text.setAttribute('fill', Color.GOOD);
      break;
    case Type.NORMAL:
      count.setAttribute('fill', Color.NORMAL);
      text.setAttribute('fill', Color.NORMAL);
      break;
    case Type.BAD:
      count.setAttribute('fill', Color.BAD);
      text.setAttribute('fill', Color.BAD);
      break;
    default:
      count.setAttribute('fill', Color.DEFAULT);
      text.setAttribute('fill', Color.DEFAULT);
  }
};

const handleLabelMouseover = () => {
  const target = event.target;
  const targetAttribute = target.getAttribute('data-label-type');
  circles.forEach((circle) => {
    if (circle.getAttribute('data-circle-type') === targetAttribute) {
      circle.setAttribute('stroke-width', 2);
      count.innerHTML = circle.getAttribute('data-circle-count');
      updateColor(targetAttribute);
    }
  });
};

const handleLabelMouseout = () => {
  const target = event.target;
  const targetAttribute = target.getAttribute('data-label-type');
  circles.forEach((circle) => {
    if (circle.getAttribute('data-circle-type') === targetAttribute) {
      circle.setAttribute('stroke-width', 1);
      count.innerHTML = count.getAttribute('data-total-votes');
      count.setAttribute('fill', Color.DEFAULT);
      text.setAttribute('fill', Color.DEFAULT);
    }
  });
};

labels.forEach((label) => {
  label.addEventListener(`mouseover`, handleLabelMouseover);
  label.addEventListener('mouseout', handleLabelMouseout);
});
