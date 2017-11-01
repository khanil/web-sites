window.onscroll = function() {
  var scrolled = window.pageYOffset || document.documentElement.scrollTop;
  var header = document.querySelector('#header');
  if (scrolled > 1) {
    if (!header.classList.contains('navbar-transparent'))
      return;
    header.classList.remove('navbar-transparent');
  } else {
    if (header.classList.contains('navbar-transparent'))
      return;
    header.classList.add('navbar-transparent');
  }
}

var searchBtn = document.querySelector('#btn-search');
var header = document.querySelector('#header');

searchBtn.addEventListener('click', function(event) {
  header.classList.toggle('navbar-search-mode');
});