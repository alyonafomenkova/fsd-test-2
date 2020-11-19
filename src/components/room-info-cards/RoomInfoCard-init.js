import RoomInfoCard from './RoomInfoCard';

const cards = document.querySelectorAll('.js-room-info-cards__slideshow-container');

cards.forEach((it) => {
  const card = new RoomInfoCard(it);
  card.createCard();
});
