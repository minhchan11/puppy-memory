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
