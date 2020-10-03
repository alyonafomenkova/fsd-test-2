class PieChart {
  constructor(pieChart) {
    this.pieChart = pieChart;
    this.Type = {
      FINE: 'fine',
      GOOD: 'good',
      NORMAL: 'normal',
      BAD: 'bad',
    };
    this.Color = {
      FINE: '#FFE39C',
      GOOD: '#6FCF97',
      NORMAL: '#BC9CFF',
      BAD: '#919191',
      DEFAULT: '#000000',
    };
    this.count = undefined;
    this.text = undefined;
    this.circles = undefined;
  }

  init() {
    this._setupDom();
    this._setupBind();
  }

  _updateColor(type) {
    switch (type) {
      case this.Type.FINE:
        this.count.setAttribute('fill', this.Color.FINE);
        this.text.setAttribute('fill', this.Color.FINE);
        break;
      case this.Type.GOOD:
        this.count.setAttribute('fill', this.Color.GOOD);
        this.text.setAttribute('fill', this.Color.GOOD);
        break;
      case this.Type.NORMAL:
        this.count.setAttribute('fill', this.Color.NORMAL);
        this.text.setAttribute('fill', this.Color.NORMAL);
        break;
      case this.Type.BAD:
        this.count.setAttribute('fill', this.Color.BAD);
        this.text.setAttribute('fill', this.Color.BAD);
        break;
      default:
        this.count.setAttribute('fill', this.Color.DEFAULT);
        this.text.setAttribute('fill', this.Color.DEFAULT);
    }
  }

  _setupDom() {
    this.count = this.pieChart.querySelector('.js-pie-chart__number');
    this.text = this.pieChart.querySelector('.js-pie-chart__label');
    this.circles = document.querySelectorAll('.js-pie-chart__circle');
  }

  _setupBind() {
    const labels = this.pieChart.querySelectorAll('.js-pie-chart__description-item');

    this._handleLabelMouseover = this._handleLabelMouseover.bind(this);
    this._handleLabelMouseout = this._handleLabelMouseout.bind(this);

    labels.forEach((label) => {
      label.addEventListener('mouseover', this._handleLabelMouseover);
      label.addEventListener('mouseout', this._handleLabelMouseout);
    });
  }

  _handleLabelMouseover(evt) {
    const targetAttribute = evt.target.getAttribute('data-label-type');

    this.circles.forEach((circle) => {
      if (circle.getAttribute('data-circle-type') === targetAttribute) {
        circle.setAttribute('stroke-width', 2);
        this.count.innerHTML = circle.getAttribute('data-circle-count');
        this._updateColor(targetAttribute);
      }
    });
  }

  _handleLabelMouseout(evt) {
    const targetAttribute = evt.target.getAttribute('data-label-type');

    this.circles.forEach((circle) => {
      if (circle.getAttribute('data-circle-type') === targetAttribute) {
        circle.setAttribute('stroke-width', 1);
        this.count.innerHTML = this.count.getAttribute('data-total-votes');
        this.count.setAttribute('fill', this.Color.DEFAULT);
        this.text.setAttribute('fill', this.Color.DEFAULT);
      }
    });
  }
}

const pieCharts = document.querySelectorAll('.js-pie-chart');

pieCharts.forEach((it) => {
  const pieChart = new PieChart(it);
  pieChart.init();
});
