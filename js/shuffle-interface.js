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
