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
