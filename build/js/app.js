(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){

function Card(number){
  this.number = number;
  this.flip = false;
}

Card.prototype.matchChecker = function (Card) {
  if (Card.number === this.number)
  {
    this.flip = true;
    Card.flip = true;
    return true;
  }else{
    return false;
  }
};

exports.memoryBL = Card;

},{}],2:[function(require,module,exports){
var Card = require('./../js/card.js').memoryBL;

$(document).ready(function(){
  var cardOne;
  var cardTwo;
  var counter = 0;
  $("input.card").click(function(){
    $(".second").removeClass("second");
    var className = "background" + $(this).val().toString();;
    if (counter === 0){
      // className = "background" + $(this).val().toString();
      var value = $(this).val();
      cardOne = new Card(value);
      $(this).addClass("first");
      $(this).addClass(className);
      counter++;
    }
    else {
      // className = "background" + $(this).val().toString();
      $(this).addClass(className);
      var valueTwo = $(this).val();
      cardTwo = new Card(valueTwo);
      if(cardOne.matchChecker(cardTwo))
      {
        $(".first").removeClass("first");
      }
      else
      {
        var firstClassName = "background" + $(".first").val().toString();
        $(this).addClass("second");
        setTimeout(function () {$(".first").removeClass(firstClassName);$(".first").removeClass("first");}, 500);
        setTimeout(function () {$(".second").removeClass(className);$(".second").removeClass("second") }, 500);
      }
      counter--;
    }
  })
});

function shuffle(array) {
	var count = array.length;
	var number = 0;
	var temp = 0;

	while (0!== count) {
		number = Math.floor(Math.random() * count);
		count--;

		temp = array [count];
		array[count] = array[number];
		array[number] = temp;
	}
	return array;
}

var values = [1, 2, 3, 3, 6, 5, 4, 2, 5, 6, 1, 4];
$(document).ready(function(){
    values = shuffle(values);
    var count = values.length
    for (var i = 1; i <= count; i++) {
      $("#field" + i).val(values[i-1]);
    }
    $("button").click(function(){
      location.reload();
    })
});

},{"./../js/card.js":1}]},{},[2]);
