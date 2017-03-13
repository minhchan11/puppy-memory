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
      className = "background" + $(this).val().toString();
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
        $(this).addClass("black");
        setTimeout(function () {$(".first").removeClass(firstClassName);$(".first").removeClass("first");}, 500);
        setTimeout(function () {$(".black").removeClass(className);$(".black").removeClass("black") }, 500);
      }
      counter--;
      console.log(counter);
    }
  })
});
