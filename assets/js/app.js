(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

var $counter = document.querySelectorAll('.js-counter');

function counter(item, number) {
  var interval = setInterval(function () {
    if (number <= Number(item.dataset.counter) - 1) {
      number++;
      item.textContent = number;
    } else {
      clearInterval(interval);
    }
  }, 100);
}

$counter.forEach(function (item) {
  counter(item, 0);
});

},{}],2:[function(require,module,exports){
'use strict';

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

document.addEventListener('DOMContentLoaded', function () {
  Promise.resolve().then(function () {
    return _interopRequireWildcard(require('./core'));
  });
});

},{"./core":1}]},{},[2])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJqcy9jb3JlLmpzIiwianMvbWFpbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0FDQUEsSUFBSSxRQUFRLEdBQUcsUUFBUSxDQUFDLGdCQUFULENBQTBCLGFBQTFCLENBQWY7O0FBRUEsU0FBUyxPQUFULENBQWlCLElBQWpCLEVBQXVCLE1BQXZCLEVBQStCO0FBQzlCLE1BQU0sUUFBUSxHQUFHLFdBQVcsQ0FBQyxZQUFZO0FBQ3hDLFFBQUksTUFBTSxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTCxDQUFhLE9BQWQsQ0FBTixHQUErQixDQUE3QyxFQUFnRDtBQUMvQyxNQUFBLE1BQU07QUFDTixNQUFBLElBQUksQ0FBQyxXQUFMLEdBQW1CLE1BQW5CO0FBQ0EsS0FIRCxNQUdPO0FBQ04sTUFBQSxhQUFhLENBQUMsUUFBRCxDQUFiO0FBQ0E7QUFDRCxHQVAyQixFQU96QixHQVB5QixDQUE1QjtBQVFBOztBQUVELFFBQVEsQ0FBQyxPQUFULENBQWlCLFVBQUMsSUFBRCxFQUFVO0FBQzFCLEVBQUEsT0FBTyxDQUFDLElBQUQsRUFBTyxDQUFQLENBQVA7QUFDQSxDQUZEOzs7QUNiQTs7Ozs7Ozs7QUFFQSxRQUFRLENBQUMsZ0JBQVQsQ0FBMEIsa0JBQTFCLEVBQThDLFlBQVc7QUFDdkQ7QUFBQSwyQ0FBTyxRQUFQO0FBQUE7QUFDRCxDQUZEIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwibGV0ICRjb3VudGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmpzLWNvdW50ZXInKTtcclxuXHJcbmZ1bmN0aW9uIGNvdW50ZXIoaXRlbSwgbnVtYmVyKSB7XHJcblx0Y29uc3QgaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbChmdW5jdGlvbiAoKSB7XHJcblx0XHRpZiAobnVtYmVyIDw9IE51bWJlcihpdGVtLmRhdGFzZXQuY291bnRlcikgLSAxKSB7XHJcblx0XHRcdG51bWJlcisrO1xyXG5cdFx0XHRpdGVtLnRleHRDb250ZW50ID0gbnVtYmVyO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0Y2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XHJcblx0XHR9XHJcblx0fSwgMTAwKTtcclxufVxyXG5cclxuJGNvdW50ZXIuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG5cdGNvdW50ZXIoaXRlbSwgMCk7XHJcbn0pOyIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBmdW5jdGlvbigpIHtcclxuICBpbXBvcnQoJy4vY29yZScpO1xyXG59KTtcclxuXHJcbiJdfQ==
