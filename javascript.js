
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

//Add onclick even listener to all buttons 
$(document).ready(function(){
    $("button").click(function(){
    	$(this).addClass();
    });
});

// 1. Click button
// 2. Click second button