var navMain = document.querySelector('.main-nav');
var userMain = document.querySelector('.user-nav');
var navToggle = document.querySelector('.main-nav__burger');

navMain.classList.remove('main-nav--nojs');
userMain.classList.remove('user-nav--nojs');
navMain.classList.remove('main-nav--open');
userMain.classList.remove('user-nav--open');
navMain.classList.add('main-nav--close');
userMain.classList.add('user-nav--close');

navToggle.addEventListener('click', function() {
if (navMain.classList.contains('main-nav--close') && userMain.classList.contains('user-nav--close')) {
  navMain.classList.remove('main-nav--close');
  navMain.classList.add('main-nav--open');
  userMain.classList.remove('user-nav--close');
  userMain.classList.add('user-nav--open');
} else {
  navMain.classList.add('main-nav--close');
  navMain.classList.remove('main-nav--open');
  userMain.classList.add('user-nav--close');
  userMain.classList.remove('user-nav--open');
}
});
