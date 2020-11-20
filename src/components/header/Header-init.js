import Header from './Header';

const headers = document.querySelectorAll('.js-header');

headers.forEach((it) => {
  const header = new Header(it);
  header.init();
});
