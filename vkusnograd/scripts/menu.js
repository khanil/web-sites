var menu =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = reset;
	/*
	 * Скрипт для работы с меню в разделе business-lunch
	 */

	// Имя класса переводящее элемент с классом "day" в активное состояние
	var FLAG = "active-day";

	// Префиксы id html элементов для составления строки обращения
	var DAY_PREFIX = "day-";
	var MENU_PREFIX = "menu-";
	var IMAGE_PREFIX = "img-";

	var DAYS = ['sunday', 'monday', 'tuesday', 'wensday', 'thursday', 'friday', 'saturday'];

	/*
	 * Сделаем активными элементы меню соответствующие текущему дню
	 */
	reset();

	function reset() {

	  var currentDay = new Date().getDay();

	  // По умолчанию меню для дней с понедельника по пятницу
	  // Для включения восресения и субботы удалить соответствующее условие
	  if (currentDay === 0 || currentDay === 6) currentDay = 0;

	  disableActive();
	  enable(DAYS[currentDay]);
	}

	/*
	 * Добавим слушатель для активации пункта меню при нажатии
	 */

	var menu = document.querySelector('.lunch-menu');

	menu.addEventListener("click", clickHandler);

	function clickHandler(e) {

	  var target = e.target;

	  if (target.tagName != 'A') return;
	  e.preventDefault();

	  var activeElem = document.querySelector('.active-day');

	  // Если выбранный пункт уже активный
	  if (target === activeElem) return;

	  disableActive(parseDay(activeElem.id));
	  enable(parseDay(target.id));
	}

	/*
	 * Делает видимыми элементы меню
	 * На вход: наименование дня
	 */
	function enable(dayStr) {

	  document.getElementById(DAY_PREFIX + dayStr).classList.add(FLAG);
	  document.getElementById(MENU_PREFIX + dayStr).style.display = "block";
	  document.getElementById(IMAGE_PREFIX + dayStr).style.display = "block";
	}

	/*
	 * Делает невидимым активные элементы меню
	 * На вход может быть подано имя дня по которому следует произвести действие
	 */
	function disableActive() {
	  var dayStr = arguments.length <= 0 || arguments[0] === undefined ? null : arguments[0];


	  if (dayStr === null) {
	    var activeElem = document.querySelector(".active-day");

	    if (activeElem === null) return;

	    dayStr = parseDay(activeElem.id);
	  }

	  document.getElementById(DAY_PREFIX + dayStr).classList.remove(FLAG);
	  document.getElementById(MENU_PREFIX + dayStr).style.display = "none";
	  document.getElementById(IMAGE_PREFIX + dayStr).style.display = "none";
	}

	/*
	 * Парсинг названия дня из id html элемента
	 */
	function parseDay(idStr) {
	  return idStr.replace("day-", "");
		}

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCA0NDBlYWE5M2IwMzQ1MjFlYWY4MyIsIndlYnBhY2s6Ly8vZnJvbnRlbmQvbWVudS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHdlYnBhY2svYm9vdHN0cmFwIDQ0MGVhYTkzYjAzNDUyMWVhZjgzXG4gKiovIiwiLypcclxuICog0KHQutGA0LjQv9GCINC00LvRjyDRgNCw0LHQvtGC0Ysg0YEg0LzQtdC90Y4g0LIg0YDQsNC30LTQtdC70LUgYnVzaW5lc3MtbHVuY2hcclxuICovXHJcblxyXG4vLyDQmNC80Y8g0LrQu9Cw0YHRgdCwINC/0LXRgNC10LLQvtC00Y/RidC10LUg0Y3Qu9C10LzQtdC90YIg0YEg0LrQu9Cw0YHRgdC+0LwgXCJkYXlcIiDQsiDQsNC60YLQuNCy0L3QvtC1INGB0L7RgdGC0L7Rj9C90LjQtVxyXG5jb25zdCBGTEFHID0gXCJhY3RpdmUtZGF5XCI7XHJcblxyXG4vLyDQn9GA0LXRhNC40LrRgdGLIGlkIGh0bWwg0Y3Qu9C10LzQtdC90YLQvtCyINC00LvRjyDRgdC+0YHRgtCw0LLQu9C10L3QuNGPINGB0YLRgNC+0LrQuCDQvtCx0YDQsNGJ0LXQvdC40Y9cclxuY29uc3QgREFZX1BSRUZJWCA9IFwiZGF5LVwiO1xyXG5jb25zdCBNRU5VX1BSRUZJWCA9IFwibWVudS1cIjtcclxuY29uc3QgSU1BR0VfUFJFRklYID0gXCJpbWctXCI7XHJcblxyXG5jb25zdCBEQVlTID0gW1xyXG4gICdzdW5kYXknLCBcclxuICAnbW9uZGF5JywgXHJcbiAgJ3R1ZXNkYXknLCBcclxuICAnd2Vuc2RheScsIFxyXG4gICd0aHVyc2RheScsIFxyXG4gICdmcmlkYXknLFxyXG4gICdzYXR1cmRheSdcclxuXTtcclxuXHJcbi8qXHJcbiAqINCh0LTQtdC70LDQtdC8INCw0LrRgtC40LLQvdGL0LzQuCDRjdC70LXQvNC10L3RgtGLINC80LXQvdGOINGB0L7QvtGC0LLQtdGC0YHRgtCy0YPRjtGJ0LjQtSDRgtC10LrRg9GJ0LXQvNGDINC00L3RjlxyXG4gKi9cclxucmVzZXQoKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlc2V0KCkge1xyXG5cclxuICB2YXIgY3VycmVudERheSA9IG5ldyBEYXRlKCkuZ2V0RGF5KCk7XHJcblxyXG4gIC8vINCf0L4g0YPQvNC+0LvRh9Cw0L3QuNGOINC80LXQvdGOINC00LvRjyDQtNC90LXQuSDRgSDQv9C+0L3QtdC00LXQu9GM0L3QuNC60LAg0L/QviDQv9GP0YLQvdC40YbRg1xyXG4gIC8vINCU0LvRjyDQstC60LvRjtGH0LXQvdC40Y8g0LLQvtGB0YDQtdGB0LXQvdC40Y8g0Lgg0YHRg9Cx0LHQvtGC0Ysg0YPQtNCw0LvQuNGC0Ywg0YHQvtC+0YLQstC10YLRgdGC0LLRg9GO0YnQtdC1INGD0YHQu9C+0LLQuNC1XHJcbiAgaWYgKGN1cnJlbnREYXkgPT09IDAgfHwgY3VycmVudERheSA9PT0gNikgY3VycmVudERheSA9IDA7XHJcblxyXG4gIGRpc2FibGVBY3RpdmUoKTtcclxuICBlbmFibGUoREFZU1tjdXJyZW50RGF5XSk7XHJcblxyXG59XHJcblxyXG4vKlxyXG4gKiDQlNC+0LHQsNCy0LjQvCDRgdC70YPRiNCw0YLQtdC70Ywg0LTQu9GPINCw0LrRgtC40LLQsNGG0LjQuCDQv9GD0L3QutGC0LAg0LzQtdC90Y4g0L/RgNC4INC90LDQttCw0YLQuNC4XHJcbiAqL1xyXG5cclxudmFyIG1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubHVuY2gtbWVudScpO1xyXG5cclxubWVudS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2xpY2tIYW5kbGVyKTtcclxuXHJcbmZ1bmN0aW9uIGNsaWNrSGFuZGxlcihlKSB7XHJcblxyXG4gIHZhciB0YXJnZXQgPSBlLnRhcmdldDtcclxuXHJcbiAgaWYgKHRhcmdldC50YWdOYW1lICE9ICdBJykgcmV0dXJuO1xyXG4gIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgdmFyIGFjdGl2ZUVsZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWN0aXZlLWRheScpO1xyXG5cclxuICAvLyDQldGB0LvQuCDQstGL0LHRgNCw0L3QvdGL0Lkg0L/Rg9C90LrRgiDRg9C20LUg0LDQutGC0LjQstC90YvQuVxyXG4gIGlmICh0YXJnZXQgPT09IGFjdGl2ZUVsZW0pIHJldHVybjtcclxuXHJcbiAgZGlzYWJsZUFjdGl2ZShwYXJzZURheShhY3RpdmVFbGVtLmlkKSk7XHJcbiAgZW5hYmxlKHBhcnNlRGF5KHRhcmdldC5pZCkpO1xyXG5cclxufVxyXG5cclxuLypcclxuICog0JTQtdC70LDQtdGCINCy0LjQtNC40LzRi9C80Lgg0Y3Qu9C10LzQtdC90YLRiyDQvNC10L3RjlxyXG4gKiDQndCwINCy0YXQvtC0OiDQvdCw0LjQvNC10L3QvtCy0LDQvdC40LUg0LTQvdGPXHJcbiAqL1xyXG5mdW5jdGlvbiBlbmFibGUoZGF5U3RyKSB7XHJcblxyXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKERBWV9QUkVGSVggKyBkYXlTdHIpLmNsYXNzTGlzdC5hZGQoRkxBRyk7XHJcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoTUVOVV9QUkVGSVggKyBkYXlTdHIpLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoSU1BR0VfUFJFRklYICsgZGF5U3RyKS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG5cclxufVxyXG5cclxuLypcclxuICog0JTQtdC70LDQtdGCINC90LXQstC40LTQuNC80YvQvCDQsNC60YLQuNCy0L3Ri9C1INGN0LvQtdC80LXQvdGC0Ysg0LzQtdC90Y5cclxuICog0J3QsCDQstGF0L7QtCDQvNC+0LbQtdGCINCx0YvRgtGMINC/0L7QtNCw0L3QviDQuNC80Y8g0LTQvdGPINC/0L4g0LrQvtGC0L7RgNC+0LzRgyDRgdC70LXQtNGD0LXRgiDQv9GA0L7QuNC30LLQtdGB0YLQuCDQtNC10LnRgdGC0LLQuNC1XHJcbiAqL1xyXG5mdW5jdGlvbiBkaXNhYmxlQWN0aXZlKGRheVN0ciA9IG51bGwpIHtcclxuXHJcbiAgaWYgKGRheVN0ciA9PT0gbnVsbCkge1xyXG4gICAgbGV0IGFjdGl2ZUVsZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFjdGl2ZS1kYXlcIik7XHJcblxyXG4gICAgaWYgKGFjdGl2ZUVsZW0gPT09IG51bGwpIHJldHVybjtcclxuXHJcbiAgICBkYXlTdHIgPSBwYXJzZURheShhY3RpdmVFbGVtLmlkKTtcclxuICB9XHJcblxyXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKERBWV9QUkVGSVggKyBkYXlTdHIpLmNsYXNzTGlzdC5yZW1vdmUoRkxBRyk7XHJcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoTUVOVV9QUkVGSVggKyBkYXlTdHIpLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChJTUFHRV9QUkVGSVggKyBkYXlTdHIpLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxufVxyXG5cclxuLypcclxuICog0J/QsNGA0YHQuNC90LMg0L3QsNC30LLQsNC90LjRjyDQtNC90Y8g0LjQtyBpZCBodG1sINGN0LvQtdC80LXQvdGC0LBcclxuICovXHJcbmZ1bmN0aW9uIHBhcnNlRGF5KGlkU3RyKSB7XHJcbiAgcmV0dXJuIGlkU3RyLnJlcGxhY2UoXCJkYXktXCIsIFwiXCIpO1xyXG59XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogZnJvbnRlbmQvbWVudS5qc1xuICoqLyJdLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ1hBOzs7Ozs7QUF0QkE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFZQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUhBO0FBQ0E7QUFPQTtBQUNBO0FBVEE7QUFDQTs7Ozs7QUFnQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBUkE7QUFDQTtBQVdBO0FBQ0E7QUFiQTtBQUNBOzs7OztBQW9CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFDQTs7Ozs7QUFXQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBQ0E7QUFPQTtBQUNBO0FBQ0E7QUFaQTtBQUNBOzs7O0FBaUJBO0FBQ0E7QUFEQTs7OyIsInNvdXJjZVJvb3QiOiIifQ==