

var tileColors = ['red', 'red', 'blue', 'blue', 'green', 'green', 'orange', 'orange'];
var gameBoard = $('ul');
var blue = 'blue';

//Fisher–Yates shuffle function From http://stackoverflow.com/a/2450976
function shuffle(array){
	var unshuffled = array.length, temporary, picked;
	//While there are unshuffled elements
	while(unshuffled){

		//Pick a random unshuffled element
		picked = Math.floor(Math.random() * unshuffled--);
		

		//Swap picked element with last element
		temporary = array[unshuffled];
		array[unshuffled] = array[picked];
		array[picked] = temporary;

	}
	return array;
}




//Add onclick even listener to all tiles 
$(document).ready(function(){

	shuffle(tileColors);

	gameBoard.append($('<li class="tile ' + blue + '"><p>blue</p></li>'));



	$(".tile").on("click", function(){
		console.log("clicked");
	});



});

// 1. Click button
// 2. Click second button