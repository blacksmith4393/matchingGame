// Game logic stored inside function which is called at the end of html doc
function myFunction(){

  // ---------- Variables---------
  // Store array of images
  var images = ['android', 'alarm', 'cloud', 'delete', 'android', 'alarm', 'cloud', 'delete'];

  // Store #gameBoard ul element
  var gameBoard = document.getElementById('gameBoard');

  // Store shuffle button element
  var newGame = document.getElementById('newGame');

  // initGameBoardal empty array for storing clicked tiles
  var clickedTiles = [];


  // ---------- Functions ----------
  //Function to show alert for testing and debugging
  function showAlert() {
    alert("clicked");
  }

  // Function to clear all children from parent element
  function removeChildren(node) {
    var fc = node.firstChild;
    while( fc ) {
        node.removeChild( fc );
        fc = node.firstChild;
    }
  } // End of removeChildren

  // Fisher Yates shuffle function -- https://bost.ocks.org/mike/shuffle/
  function shuffle(arr) {
    var m = arr.length, t, i;
    // While there remain elements to shuffle…
    while(m){
      // Pick a remaining element…
      i = Math.floor(Math.random() * m--);
      // And swap it with the current element
      t = arr[m];
      arr[m]=arr[i];
      arr[i] = t;
    }
    return arr;
  } //  End of shuffle

  // Function to remove eventhandler from matched tiles
  function removeEvent(){
    for (var i = 0; i < clickedTiles.length; i++){
      clickedTiles[i].classList.add('match');
      clickedTiles[i].removeChild(clickedTiles[i].childNodes[1])
      console.log(clickedTiles[0].classList)
    }
    clickedTiles[0].removeEventListener("click", compare);
    clickedTiles[1].removeEventListener("click", compare);
    clickedTiles = [];
  }

  // Function to store and compare clicked items
  function compare(){
    var clicked = this;
    var overlay = clicked.childNodes[1];

     // Conditional to check if a tile has already been clicked
    if(clickedTiles[0]){

      // Conditional to check if clicked tiles are the same tile. Prevent storing same tile twice
      if(clickedTiles[0].id !== clicked.id){
        clickedTiles.push(clicked); // Store clicked in clickedTiles array
        overlay.classList.add('show'); // Show the tile image
      }

    } else {
        clickedTiles.push(clicked); // Store clicked in clickedTiles array
        overlay.classList.add('show'); // Show the tile image
    }

    // Wait 1 second then execute code to check if clicked tiles are a match
    setTimeout(function(){
      if(clickedTiles.length == 2){
        if(clickedTiles[0].classList[0] !== clickedTiles[1].classList[0] ) {
          //For loop to hide non-matching tiles
          for (var i = 0; i < clickedTiles.length; i++){
            clickedTiles[i].childNodes[1].classList.remove('show');
          }
          // Clear clickedTiles array
          clickedTiles = [];
        } else {
          // Function to remove eventhandler from matched items and change color
          removeEvent();
        }
      }
    }, 1000) // End of setTimeout

  }

  // Function to create gameBoard tiles
  function initGameBoard() {
    // Shuffle images/images
  	shuffle(images);
    // Append tiles to gameboard
  	for ( var i = 0; i < images.length; i++) {
  	    var li = document.createElement("li");
  	    li.className = images[i];
        li.id = "number" + i;
  	    var textNode = '<i class="material-icons md-48">' + (images[i]) + '</i>';
        textNode += '<div class="overlay"></div>'
  	    li.innerHTML = textNode;
  	    gameBoard.appendChild(li);
  	}
    // Store list items to variable
    var tiles = gameBoard.children;
    // Add event listener "click" to tiles and assign compare function
    for (var i = 0; i < tiles.length; i++) {
      tiles[i].addEventListener("click", compare); // End of event listener function
    } // End of for loop

  } // End of initGameBoard



  // ---------- Main ----------
  // initiate list items in gameboard
  initGameBoard();

  newGame.addEventListener("click", function(){
    removeChildren(gameBoard);
    initGameBoard();
  }); // End of reset button fuction

} // End of myFunction
