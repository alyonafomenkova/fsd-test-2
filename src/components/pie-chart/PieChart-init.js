import PieChart from './PieChart';

const pieCharts = document.querySelectorAll('.js-pie-chart');

pieCharts.forEach((it) => {
  const pieChart = new PieChart(it);
  pieChart.init();
});
