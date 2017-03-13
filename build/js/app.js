(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var Card = require('./../js/card.js').memoryBL;

$(document).ready(function(){
  var cardOne;
  var cardTwo;
  var counter = 0;
  $("input#card").click(function(){
    $(".black").removeClass("black");
    var className;
    if (counter === 0){
      className = "background" + $(this).val().toString();
      var value = $(this).val();
      cardOne = new Card(value);
      $(this).addClass("first");
      $(this).addClass(className);
      counter++;
      console.log(counter);
    }
    else {
      var valueTwo = $(this).val();
      cardTwo = new Card(valueTwo);
      if(cardOne.matchChecker(cardTwo))
      {
        className = "background" + $(this).val().toString();
        $(this).addClass(className);
        $(this).prop("disabled",true);
        $("first").prop("disabled",true);
        $(".first").removeClass("first");
      }
      else
      {
        className = "background" + $(".first").val().toString();
        $(this).addClass("black");
        $(".first").removeClass(className);
        $(".first").removeClass("first");
      }
      counter--;
      console.log(counter);
    }
  })
});

},{"./../js/card.js":2}],2:[function(require,module,exports){
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

},{}]},{},[1]);
