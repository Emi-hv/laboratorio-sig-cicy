const button = document.querySelector('.menu-button');
const navigation = document.querySelector('#navigation');
function closeMenu() { button.setAttribute('aria-expanded', 'false'); navigation.classList.remove('is-open'); }
button.addEventListener('click', () => {
  const open = button.getAttribute('aria-expanded') !== 'true';
  button.setAttribute('aria-expanded', String(open));
  navigation.classList.toggle('is-open', open);
});
document.addEventListener('keydown', event => { if (event.key === 'Escape' && button.getAttribute('aria-expanded') === 'true') { closeMenu(); button.focus(); } });
document.addEventListener('click', event => { if (!event.target.closest('.nav')) closeMenu(); });
navigation.addEventListener('click', event => { if (event.target.closest('a')) closeMenu(); });
matchMedia('(min-width: 1101px)').addEventListener('change', event => { if (event.matches) closeMenu(); });
