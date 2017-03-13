var Card = require('./../js/card.js').memoryBL;

$(document).ready(function(){
  var cardOne;
  var cardTwo;
  var counter = 0;
  $("input#card").click(function(){
    if (counter === 0){
      var value = $(this).val();
      cardOne = new Card(value);
      $(this).addClass("first");
      counter++;
      console.log(counter);
    }
    else {
      var valueTwo = $(this).val();
      cardTwo = new Card(valueTwo);
      if(cardOne.matchChecker(cardTwo))
      {
        $(this).addClass("redbackground");
        $(".first").addClass("redbackground");
        $(".first").removeClass("first");
      }
      else
      {
        $(".first").removeClass("first");
      }
      counter--;
      console.log(counter);
    }
  })
});
