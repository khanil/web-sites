var SCROLLING_SPEED = 0;
var headerLogo = document.querySelector('#header-logo');
var footerTagline = document.querySelector('#footer-tagline');
var copyright = document.querySelector('#copyright');
var footerLogo = document.querySelector('#footer-logo');
var footerSocialIcons = document.querySelector('#footer-social-icons');


$(document).ready(function() {

    $('#fullpage').fullpage({
      anchors: ['home', 'advantages', 'tastes', 'chemist', 'contacts'],
      continuousVertical: true,
      menu: "#menu",
      recordHistory: false,
      onLeave: function(index, nextIndex, direction) {

        switch(index) {
          case 1:
            headerLogo.style.display = 'inline-block';
            break;
          // case 2:
          // case 3:
          // case 4:
          case 5:
            copyright.style.display = 'none';
            footerLogo.style.display = 'none';
            footerSocialIcons.style.display = 'block';
            break;
        }

        switch(nextIndex) {
          case 1:
            headerLogo.style.display = 'none';
            footerTagline.style.display = 'none';
            break;
          case 2:
          case 3:
          case 4:
            footerTagline.style.display = 'inline-block';
            break;
          case 5:
            footerTagline.style.display = 'none';
            copyright.style.display = 'inline-block';
            footerLogo.style.display = 'inline-block';
            footerSocialIcons.style.display = 'none';
            break;
        }

        sideNavSlideChangeHandler(index, nextIndex);
      }
    });
});

function sideNavSlideChangeHandler(index, nextIndex) {
  console.log(index, nextIndex);

  // Change cur page label
  var curPageLabel = document.querySelector('#nav-cur-page');
  curPageLabel.innerHTML = '0' + nextIndex;

  // Change active dots
  var navDots = document.querySelectorAll('#side-nav ul li');
  var activeDot = document.querySelector('#side-nav ul li.active');
  activeDot.classList.remove('active');

  var i;
  for (i = 0; i < nextIndex - 1; i++) {
    navDots[i].classList.toggle('pre-active', true);
  }

  navDots[i++].classList.toggle('active', true);

  for (i; i < navDots.length; i++) {
    navDots[i].classList.remove('pre-active');
  }
}

var navArrowUp = document.querySelector('#nav-prev');
navArrowUp.addEventListener('click', function() {
  $.fn.fullpage.moveSectionUp();
});

var navArrowDown = document.querySelector('#nav-next');
navArrowDown.addEventListener('click', function() {
  $.fn.fullpage.moveSectionDown();
});

var tasteLabels = document.querySelectorAll('.taste-icon');
for (var j = 0; j < tasteLabels.length; j++) {
  tasteLabels[j].addEventListener('click', openTastePopup);
}

function openTastePopup(e) {
  var popupBtn = e.target;
  var popupId = popupBtn.dataset.show;
  var popup = document.querySelector('#' + popupId);
  showPopup(popup);
}

function closeTastePopup(e) {
  var closeBtn = e.target;
  var popup = closeBtn.parentNode;
  hidePopup(popup);
}

function showPopup(popup) {
  console.log(popup);
  // Close all opened taste popups
  var openedPopup = document.querySelector('.taste-popup.active');
  if (openedPopup) {
    hidePopup(openedPopup);
  }

  var crossBtn = popup.querySelector('.cross-btn');
  var popupBtnId = crossBtn.dataset.show;
  var popupBtn = document.querySelector('#' + popupBtnId);

  popup.classList.add('active');
  popupBtn.style.display = 'none';
  $('#' + popup.id).fadeIn();

  crossBtn.addEventListener('click', closeTastePopup);
}

function hidePopup(popup) {
  var crossBtn = popup.querySelector('.cross-btn');
  var popupBtnId = crossBtn.dataset.show;
  var popupBtn = document.querySelector('#' + popupBtnId);

  popupBtn.style.display = 'block';
  popup.classList.remove('active');
  popup.style.display = 'none';

  popupBtn.addEventListener('click', openTastePopup);
}