var navbar = document.querySelector('.navbar');

function getWindowWidth() {
  return document.documentElement.clientWidth;
}

var throttle = function (fn, delay) {
  var timer = null;
  return function () {
    var context = this, args = arguments;
    clearTimeout(timer);
    timer = setTimeout(function () {
      fn.apply(context, args);
    }, delay);
  };
};

var lastWidth;

function init() {
  var width = getWindowWidth();

  if (width < 891) {
    navbar.classList.remove(FIXED_BOTTOM);
    navbar.classList.add(FIXED_TOP);
    navbar.addEventListener('click', menuClickHandler, false);
  } else {
    navbar.addEventListener('mouseover', menuFocusHandler, false);
    navbar.addEventListener('mouseout', menuUnfocusHandler, false);
  }

  lastWidth = width;
}

var FIXED_BOTTOM = 'navbar-fixed-bottom';
var FIXED_TOP = 'navbar-fixed-top';
var ACTIVE_BLOCK = 'info-block-active';

function resizeHandler(e) {
  var width = getWindowWidth();

  if (width >= 891) {
    if (lastWidth <= 891) {
      navbar.classList.remove(FIXED_TOP);
      navbar.classList.add(FIXED_BOTTOM);
      navbar.removeEventListener('click', menuClickHandler, false);
      navbar.addEventListener('mouseover', menuFocusHandler, false);
      navbar.addEventListener('mouseout', menuUnfocusHandler, false);
      if (currentShownBlock) {
        currentShownBlock.classList.toggle(ACTIVE_BLOCK);
        navbar.querySelector('.active').classList.toggle('active');
      }
    }
  } else {
    if (lastWidth > 891) {
      navbar.classList.remove(FIXED_BOTTOM);
      navbar.classList.add(FIXED_TOP);
      navbar.addEventListener('click', menuClickHandler, false);
      navbar.removeEventListener('mouseover', menuFocusHandler, false);
      navbar.removeEventListener('mouseout', menuUnfocusHandler, false);
    }
  }

  lastWidth = width;
}

var currentShownBlock;

function menuClickHandler(e) {
  var target = e.target;

  while (target != navbar) {
    if (target.tagName == 'LI') {
      var id = target.getAttribute('data-show');
      var blockById = document.getElementById(id);

      if (blockById == currentShownBlock)
        return;

      if (currentShownBlock) {
        currentShownBlock.classList.toggle(ACTIVE_BLOCK);
        navbar.querySelector('.active').classList.toggle('active');
      }

      blockById.classList.toggle(ACTIVE_BLOCK);
      target.classList.toggle('active');
      currentShownBlock = blockById;

      if (navbar.classList.contains(FIXED_TOP)) {
        console.log( $('.collapse').collapse('toggle') );
      }
      
      return;
    }
    target = target.parentNode;
  };
}

function menuFocusHandler(e) {
  var target = e.target;

  while (target != navbar) {
    if (target.tagName == 'A') {
      var id = target.parentNode.getAttribute('data-show');
      var blockById = document.getElementById(id);

      if (blockById == currentShownBlock)
        return;

      if (currentShownBlock) {
        currentShownBlock.classList.toggle(ACTIVE_BLOCK);
        navbar.querySelector('.active').classList.toggle('active');
      }

      blockById.classList.toggle(ACTIVE_BLOCK);
      target.classList.toggle('active');
      currentShownBlock = blockById;

      if (navbar.classList.contains(FIXED_TOP)) {
        $('.collapse').collapse('toggle');
      }
      
      return;
    }
    target = target.parentNode;
  };
}

function belongsNavbar(el) {
  var temp = el;

  while (temp != document.body) {
    if (temp == navbar)
      return true;

    temp = temp.parentNode;
  }

  return false;
}

function menuUnfocusHandler(e) {
  if (e.relatedTarget == null || belongsNavbar(e.relatedTarget) == false) {
    currentShownBlock.classList.toggle(ACTIVE_BLOCK);
    navbar.querySelector('.active').classList.toggle('active');
    currentShownBlock = null;
  }
}

var throttledResize = throttle(resizeHandler, 66);

init();
window.addEventListener('resize', throttledResize, false);
// navbar.addEventListener('click', menuClickHandler, false);
// navbar.addEventListener('mouseover', menuFocusHandler, false);