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
  function log(arg) {
    console.log(arg);
  }

  // Function to clear all children from parent element
  function removeChildren(node) {
    while( node.hasChildNodes() ) {
        node.removeChild( node.firstChild );
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

function storeTiles(tile, overlay){

   // Conditional to check if a tile has already been clicked
  if(!clickedTiles[0] || clickedTiles[0].id !== tile.id){
    // Store clicked in clickedTiles array
    clickedTiles.push(tile);
    // Show the tile image
    tile.querySelector('div').classList.toggle('show');
  }
}


  function disableTiles(tiles){
    for (var i = 0; i < tiles.length; i++){
      tiles[i].classList.add('match');
      tiles[i].disabled = true;
    }
  }


  // Function to store and compare clicked items
  function compare(){
    var clicked = this;
    var overlay = clicked.querySelector('div');

    storeTiles(clicked, overlay);

    // Wait 1 second then execute code to check if clicked tiles are a match
    setTimeout(function(){
      if(clickedTiles.length == 2){
        if(clickedTiles[0].classList[0] !== clickedTiles[1].classList[0] ) {
          //For loop to hide non-matching tiles
          for (var i = 0; i < clickedTiles.length; i++){
            clickedTiles[i].querySelector('div').classList.toggle('show');
          }
          // Clear clickedTiles array
          clickedTiles = [];
        } else {
          // Function to remove eventhandler from matched items and change color
          disableTiles(clickedTiles);
          clickedTiles = [];
        }
      }
    }, 1000);

  }

  function bindClickEvent(node, bindFunction){
    for (var i = 0; i < node.length; i++){
      node[i].addEventListener("click", bindFunction);
    }
  }
  function createTile(imageName, id){
  	    var li = document.createElement("li");
        var li_button = document.createElement("button");

  	    li_button.className = imageName;
        li_button.classList.add('tileButton');
        li_button.id = "number" + id;
  	    var textNode = '<i class="material-icons md-48">' + imageName + '</i>';
        textNode += '<div class="overlay"></div>';
        li_button.innerHTML = textNode;
        li.appendChild(li_button);
        return li;
  }

  // Function to create gameBoard tiles
  function initGameBoard() {
    // Shuffle images/images
  	shuffle(images);
    // Append tiles to gameboard
    for ( var i = 0; i < images.length; i++){
      var tile = createTile(images[i], i);
      gameBoard.appendChild(tile);
    }

    var tileButtons = document.querySelectorAll('.tileButton');
    bindClickEvent(tileButtons, compare);
  } // End of initGameBoard



  // ---------- Main ----------
  // initiate list items in gameboard
  initGameBoard();

  newGame.addEventListener("click", function(){
    removeChildren(gameBoard);
    initGameBoard();
  }); // End of reset button fuction

} // End of myFunction
