// ---------- Variables---------
function myFunction(){
  // Store array of images
  var images = ['android', 'alarm', 'cloud', 'delete', 'android', 'alarm', 'cloud', 'delete'];

  // Store #gameBoard ul element
  var gameBoard = document.getElementById('gameBoard');

  // Store shuffle button element
  var shuffleButton = document.getElementById('shuffleButton');

  // ---------- Functions ----------

  function showAlert() {
    alert("clicked");
  }

  function removeChildren(node) {
    var fc = node.firstChild;
    while( fc ) {
        node.removeChild( fc );
        fc = node.firstChild;
    }
  }

  function shuffle(arr){
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
  }
  //
  function init(){
    // Shuffle images/images
  	shuffle(images);
    // Append tiles to gameboard
  	for ( var i = 0; i < images.length; i++) {
  	    var li = document.createElement("li");
  	    li.className = images[i];
  	    var textnode = '<i class="material-icons md-48">' + (images[i]) + '</i>';
  	    li.innerHTML = textnode;
  	    gameBoard.appendChild(li);
  	}
  }

  // ---------- Main ----------
  // Initiate list items in gameboard
  init();

  shuffleButton.addEventListener("click", function(){
    removeChildren(gameBoard);
    init();
  });
}
