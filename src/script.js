const card = document.getElementById('card');
const button = document.getElementById('button');
const back = document.getElementById('back');

button.addEventListener('click', () => {
  card.classList.toggle('animate');
});
back.addEventListener('click', () => {
  card.classList.toggle('animate');
});
