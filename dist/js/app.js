(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

var _Reading = require("./modules/Reading");

var _Reading2 = _interopRequireDefault(_Reading);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var content = document.querySelector(".content--article").textContent;
var words = Array.from(content.split(" ")).filter(function (word) {
  return word !== "";
});
var slow = document.querySelector("#slow");
var normal = document.querySelector("#normal");
var fast = document.querySelector("#fast");
var genius = document.querySelector("#genius");

console.log(Math.floor(words.length / 230));

var readTime = new _Reading2.default(words);

readTime.render();

slow.addEventListener("click", function (e) {
  readTime.speed = 1;
  readTime.render();
  console.log(document.querySelector(".selected"));
  document.querySelector(".selected").classList.remove("selected");
  slow.classList.toggle("selected");
});

normal.addEventListener("click", function (e) {
  readTime.speed = 2;
  readTime.render();
  document.querySelector(".selected").classList.remove("selected");
  normal.classList.toggle("selected");
});

fast.addEventListener("click", function (e) {
  readTime.speed = 3;
  readTime.render();
  document.querySelector(".selected").classList.remove("selected");
  fast.classList.toggle("selected");
});

genius.addEventListener("click", function (e) {
  readTime.speed = 4;
  readTime.render();
  document.querySelector(".selected").classList.remove("selected");
  genius.classList.toggle("selected");
});

},{"./modules/Reading":2}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Reading = function () {
  function Reading(words) {
    _classCallCheck(this, Reading);

    this.words = words;
    this.speed = 2;
  }

  _createClass(Reading, [{
    key: "render",
    value: function render() {
      var readTime = 0;
      console.log(this.speed);
      if (this.speed === 1) {
        readTime = Math.floor(this.words.length / 100);
      }

      if (this.speed === 2) {
        readTime = Math.floor(this.words.length / 230);
      }

      if (this.speed === 3) {
        readTime = Math.floor(this.words.length / 350);
      }

      if (this.speed === 4) {
        readTime = Math.floor(this.words.length / 500);
      }

      document.querySelector(".content--article-info").innerHTML = "2 days ago &middot; " + readTime + " min read";
    }
  }]);

  return Reading;
}();

exports.default = Reading;

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHAvYXBwLmpzIiwiYXBwL21vZHVsZXMvUmVhZGluZy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0FDQUE7Ozs7OztBQUVBLElBQU0sVUFBVSxTQUFTLGFBQVQsQ0FBdUIsbUJBQXZCLEVBQTRDLFdBQTVDO0FBQ2hCLElBQU0sUUFBUSxNQUFNLElBQU4sQ0FBVyxRQUFRLEtBQVIsQ0FBYyxHQUFkLENBQVgsRUFBK0IsTUFBL0IsQ0FBc0MsVUFBQyxJQUFELEVBQVU7QUFDNUQsU0FBTyxTQUFTLEVBQVQsQ0FEcUQ7Q0FBVixDQUE5QztBQUdOLElBQU0sT0FBTyxTQUFTLGFBQVQsQ0FBdUIsT0FBdkIsQ0FBUDtBQUNOLElBQU0sU0FBUyxTQUFTLGFBQVQsQ0FBdUIsU0FBdkIsQ0FBVDtBQUNOLElBQU0sT0FBTyxTQUFTLGFBQVQsQ0FBdUIsT0FBdkIsQ0FBUDtBQUNOLElBQU0sU0FBUyxTQUFTLGFBQVQsQ0FBdUIsU0FBdkIsQ0FBVDs7QUFFTixRQUFRLEdBQVIsQ0FBWSxLQUFLLEtBQUwsQ0FBVyxNQUFNLE1BQU4sR0FBZSxHQUFmLENBQXZCOztBQUVBLElBQU0sV0FBVyxzQkFBWSxLQUFaLENBQVg7O0FBRU4sU0FBUyxNQUFUOztBQUVBLEtBQUssZ0JBQUwsQ0FBc0IsT0FBdEIsRUFBK0IsVUFBQyxDQUFELEVBQU87QUFDcEMsV0FBUyxLQUFULEdBQWlCLENBQWpCLENBRG9DO0FBRXBDLFdBQVMsTUFBVCxHQUZvQztBQUdwQyxVQUFRLEdBQVIsQ0FBWSxTQUFTLGFBQVQsQ0FBdUIsV0FBdkIsQ0FBWixFQUhvQztBQUlwQyxXQUFTLGFBQVQsQ0FBdUIsV0FBdkIsRUFBb0MsU0FBcEMsQ0FBOEMsTUFBOUMsQ0FBcUQsVUFBckQsRUFKb0M7QUFLcEMsT0FBSyxTQUFMLENBQWUsTUFBZixDQUFzQixVQUF0QixFQUxvQztDQUFQLENBQS9COztBQVFBLE9BQU8sZ0JBQVAsQ0FBd0IsT0FBeEIsRUFBaUMsVUFBQyxDQUFELEVBQU87QUFDdEMsV0FBUyxLQUFULEdBQWlCLENBQWpCLENBRHNDO0FBRXRDLFdBQVMsTUFBVCxHQUZzQztBQUd0QyxXQUFTLGFBQVQsQ0FBdUIsV0FBdkIsRUFBb0MsU0FBcEMsQ0FBOEMsTUFBOUMsQ0FBcUQsVUFBckQsRUFIc0M7QUFJdEMsU0FBTyxTQUFQLENBQWlCLE1BQWpCLENBQXdCLFVBQXhCLEVBSnNDO0NBQVAsQ0FBakM7O0FBT0EsS0FBSyxnQkFBTCxDQUFzQixPQUF0QixFQUErQixVQUFDLENBQUQsRUFBTztBQUNwQyxXQUFTLEtBQVQsR0FBaUIsQ0FBakIsQ0FEb0M7QUFFcEMsV0FBUyxNQUFULEdBRm9DO0FBR3BDLFdBQVMsYUFBVCxDQUF1QixXQUF2QixFQUFvQyxTQUFwQyxDQUE4QyxNQUE5QyxDQUFxRCxVQUFyRCxFQUhvQztBQUlwQyxPQUFLLFNBQUwsQ0FBZSxNQUFmLENBQXNCLFVBQXRCLEVBSm9DO0NBQVAsQ0FBL0I7O0FBT0EsT0FBTyxnQkFBUCxDQUF3QixPQUF4QixFQUFpQyxVQUFDLENBQUQsRUFBTztBQUN0QyxXQUFTLEtBQVQsR0FBaUIsQ0FBakIsQ0FEc0M7QUFFdEMsV0FBUyxNQUFULEdBRnNDO0FBR3RDLFdBQVMsYUFBVCxDQUF1QixXQUF2QixFQUFvQyxTQUFwQyxDQUE4QyxNQUE5QyxDQUFxRCxVQUFyRCxFQUhzQztBQUl0QyxTQUFPLFNBQVAsQ0FBaUIsTUFBakIsQ0FBd0IsVUFBeEIsRUFKc0M7Q0FBUCxDQUFqQzs7Ozs7Ozs7Ozs7OztJQ3ZDTTtBQUNKLFdBREksT0FDSixDQUFZLEtBQVosRUFBbUI7MEJBRGYsU0FDZTs7QUFDakIsU0FBSyxLQUFMLEdBQWEsS0FBYixDQURpQjtBQUVqQixTQUFLLEtBQUwsR0FBYSxDQUFiLENBRmlCO0dBQW5COztlQURJOzs2QkFNSztBQUNQLFVBQUksV0FBVyxDQUFYLENBREc7QUFFUCxjQUFRLEdBQVIsQ0FBWSxLQUFLLEtBQUwsQ0FBWixDQUZPO0FBR1AsVUFBRyxLQUFLLEtBQUwsS0FBZSxDQUFmLEVBQWtCO0FBQ25CLG1CQUFXLEtBQUssS0FBTCxDQUFXLEtBQUssS0FBTCxDQUFXLE1BQVgsR0FBb0IsR0FBcEIsQ0FBdEIsQ0FEbUI7T0FBckI7O0FBSUEsVUFBRyxLQUFLLEtBQUwsS0FBZSxDQUFmLEVBQWtCO0FBQ25CLG1CQUFXLEtBQUssS0FBTCxDQUFXLEtBQUssS0FBTCxDQUFXLE1BQVgsR0FBb0IsR0FBcEIsQ0FBdEIsQ0FEbUI7T0FBckI7O0FBSUEsVUFBRyxLQUFLLEtBQUwsS0FBZSxDQUFmLEVBQWtCO0FBQ25CLG1CQUFXLEtBQUssS0FBTCxDQUFXLEtBQUssS0FBTCxDQUFXLE1BQVgsR0FBb0IsR0FBcEIsQ0FBdEIsQ0FEbUI7T0FBckI7O0FBSUEsVUFBRyxLQUFLLEtBQUwsS0FBZSxDQUFmLEVBQWtCO0FBQ25CLG1CQUFXLEtBQUssS0FBTCxDQUFXLEtBQUssS0FBTCxDQUFXLE1BQVgsR0FBb0IsR0FBcEIsQ0FBdEIsQ0FEbUI7T0FBckI7O0FBSUEsZUFBUyxhQUFULENBQXVCLHdCQUF2QixFQUFpRCxTQUFqRCw0QkFBb0Ysc0JBQXBGLENBbkJPOzs7O1NBTkw7OztrQkE2QlMiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiaW1wb3J0IFJlYWRpbmcgZnJvbSBcIi4vbW9kdWxlcy9SZWFkaW5nXCI7XG5cbmNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRlbnQtLWFydGljbGVcIikudGV4dENvbnRlbnQ7XG5jb25zdCB3b3JkcyA9IEFycmF5LmZyb20oY29udGVudC5zcGxpdChcIiBcIikpLmZpbHRlcigod29yZCkgPT4ge1xuICByZXR1cm4gd29yZCAhPT0gXCJcIjtcbn0pO1xuY29uc3Qgc2xvdyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc2xvd1wiKTtcbmNvbnN0IG5vcm1hbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbm9ybWFsXCIpO1xuY29uc3QgZmFzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZmFzdFwiKTtcbmNvbnN0IGdlbml1cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZ2VuaXVzXCIpO1xuXG5jb25zb2xlLmxvZyhNYXRoLmZsb29yKHdvcmRzLmxlbmd0aCAvIDIzMCkpO1xuXG5jb25zdCByZWFkVGltZSA9IG5ldyBSZWFkaW5nKHdvcmRzKTtcblxucmVhZFRpbWUucmVuZGVyKCk7XG5cbnNsb3cuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gIHJlYWRUaW1lLnNwZWVkID0gMTtcbiAgcmVhZFRpbWUucmVuZGVyKCk7XG4gIGNvbnNvbGUubG9nKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2VsZWN0ZWRcIikpO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNlbGVjdGVkXCIpLmNsYXNzTGlzdC5yZW1vdmUoXCJzZWxlY3RlZFwiKTtcbiAgc2xvdy5jbGFzc0xpc3QudG9nZ2xlKFwic2VsZWN0ZWRcIik7XG59KTtcblxubm9ybWFsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICByZWFkVGltZS5zcGVlZCA9IDI7XG4gIHJlYWRUaW1lLnJlbmRlcigpO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNlbGVjdGVkXCIpLmNsYXNzTGlzdC5yZW1vdmUoXCJzZWxlY3RlZFwiKTtcbiAgbm9ybWFsLmNsYXNzTGlzdC50b2dnbGUoXCJzZWxlY3RlZFwiKTtcbn0pO1xuXG5mYXN0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICByZWFkVGltZS5zcGVlZCA9IDM7XG4gIHJlYWRUaW1lLnJlbmRlcigpO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNlbGVjdGVkXCIpLmNsYXNzTGlzdC5yZW1vdmUoXCJzZWxlY3RlZFwiKTtcbiAgZmFzdC5jbGFzc0xpc3QudG9nZ2xlKFwic2VsZWN0ZWRcIik7XG59KTtcblxuZ2VuaXVzLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICByZWFkVGltZS5zcGVlZCA9IDQ7XG4gIHJlYWRUaW1lLnJlbmRlcigpO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNlbGVjdGVkXCIpLmNsYXNzTGlzdC5yZW1vdmUoXCJzZWxlY3RlZFwiKTtcbiAgZ2VuaXVzLmNsYXNzTGlzdC50b2dnbGUoXCJzZWxlY3RlZFwiKTtcbn0pO1xuIiwiY2xhc3MgUmVhZGluZyB7XG4gIGNvbnN0cnVjdG9yKHdvcmRzKSB7XG4gICAgdGhpcy53b3JkcyA9IHdvcmRzO1xuICAgIHRoaXMuc3BlZWQgPSAyO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGxldCByZWFkVGltZSA9IDA7XG4gICAgY29uc29sZS5sb2codGhpcy5zcGVlZCk7XG4gICAgaWYodGhpcy5zcGVlZCA9PT0gMSkge1xuICAgICAgcmVhZFRpbWUgPSBNYXRoLmZsb29yKHRoaXMud29yZHMubGVuZ3RoIC8gMTAwKTtcbiAgICB9XG5cbiAgICBpZih0aGlzLnNwZWVkID09PSAyKSB7XG4gICAgICByZWFkVGltZSA9IE1hdGguZmxvb3IodGhpcy53b3Jkcy5sZW5ndGggLyAyMzApO1xuICAgIH1cblxuICAgIGlmKHRoaXMuc3BlZWQgPT09IDMpIHtcbiAgICAgIHJlYWRUaW1lID0gTWF0aC5mbG9vcih0aGlzLndvcmRzLmxlbmd0aCAvIDM1MCk7XG4gICAgfVxuXG4gICAgaWYodGhpcy5zcGVlZCA9PT0gNCkge1xuICAgICAgcmVhZFRpbWUgPSBNYXRoLmZsb29yKHRoaXMud29yZHMubGVuZ3RoIC8gNTAwKTtcbiAgICB9XG5cbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRlbnQtLWFydGljbGUtaW5mb1wiKS5pbm5lckhUTUwgPSBgMiBkYXlzIGFnbyAmbWlkZG90OyAke3JlYWRUaW1lfSBtaW4gcmVhZGA7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUmVhZGluZztcbiJdfQ==
