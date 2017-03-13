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
