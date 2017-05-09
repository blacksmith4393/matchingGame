// Game logic stored inside function which is called at the end of html doc
function myFunction(){

  // ---------- Variables---------
  var game = {
    images: ['android', 'alarm', 'cloud', 'delete', 'android', 'alarm', 'cloud', 'delete'],
    cacheDom: function(){
      this.gameBoard = document.getElementById('gameBoard');
      this.newGameButton= document.getElementById('newGameButton');
      this.clickedTiles = [];
    },
    bindClickEvent: function(node, bindFunction){
      for (var i = 0; i < node.length; i++){
        node[i].addEventListener("click", bindFunction);
      }
    },
    onTileClick: function(){
      if(!game.clickedTiles[0] || game.clickedTiles[0].id !== tile.id){
        storeTile();
      }
      if(game.clickedTiles.length == 2){
        compareTiles();
      }
    }
  };

  function removeChildren(node) {
    while( node.hasChildNodes() ) {
        node.removeChild( node.firstChild );
    }
  }

  function shuffle(arr) {
    var m = arr.length, t, i;
    while(m){
      i = Math.floor(Math.random() * m--);
      t = arr[m];
      arr[m]=arr[i];
      arr[i] = t;
    }
    return arr;
  }

  function storeTiles(tile, overlay){
    // Store clicked in clickedTiles array
    game.clickedTiles.push(tile);

    // Show the tile image
    overlay.classList.toggle('show');
  }

  function disableTiles(tiles){
    for (var i = 0; i < tiles.length; i++){
      tiles[i].classList.add('match');
      tiles[i].disabled = true;
    }
  }

  function matchTest(tilesCollection){
    if(tilesCollection[0].classList[1] !== tilesCollection[1].classList[1]){
      for (var i = 0; i < tilesCollection.length; i++){
        tilesCollection[i].querySelector('.overlay').classList.toggle('show');
      }
    } else {
      disableTiles(clickedTiles);
    }
  }



  // Function to store and compare clicked items
  function compareTiles(){
    var clicked = this;
    var overlay = this.querySelector('.overlay');
    storeTiles(clicked, overlay);

    // Wait 1 second then execute code to check if clicked tiles are a match
    if(game.clickedTiles.length == 2){
      //matchTest(clickedTiles);
      setTimeout(function(){
        if(clickedTiles[0].classList[1] !== clickedTiles[1].classList[1]){
          for (var i = 0; i < tilesCollection.length; i++){
            clickedTiles[i].querySelector('.overlay').classList.toggle('show');
          }
        } else {
          disableTiles(clickedTiles);
        }
      },1000);
    }
  }

  function createTile(imageName, id){
  	    var li = document.createElement("li");
        var li_button = document.createElement("button");

  	    // li_button.className = imageName;
        li.classList.add('tileButton', imageName);
        li.id = id.toString();

        var textNode = '<i class="material-icons md-48">' + imageName + '</i>';
        textNode += '<div class="overlay"></div>';

        li.innerHTML = textNode;

        return li;
  }

  // Function to create gameBoard tiles
  function initGameBoard() {
    game.cacheDom();
  	shuffle(game.images);
    
    for ( var i = 0; i < game.images.length; i++){
      // Create tiles
      var tile = createTile(game.images[i], i);
      // Append tile to gameboard
      game.gameBoard.appendChild(tile);
    }

    var tileButtons = document.querySelectorAll('.tileButton');
    game.bindClickEvent(tileButtons, compare);
  } // End of initGameBoard



  // ---------- Main ----------
  // initiate list items in gameboard
  initGameBoard();

  newGameButton.addEventListener("click", function(){
    removeChildren(gameBoard);
    initGameBoard();
  }); // End of reset button fuction

} // End of myFunction
