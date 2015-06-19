$( document ).ready(function() {
   color = 'red';
    eventBindings();
});

var eventBindings = function() {
  $('.column').on("click", function(event) {
    var column = $(this);
    console.log("in click");
    addPiece(column);
    checkVertical(column);
  });
}

var addPiece= function(column){
  $(column).find('> .empty:last').removeClass('empty').addClass(color);
  color = color === 'red' ? 'black' : 'red';
}

var checkVertical= function(column){
  var counter = 1;
  var color;
  var previousCell = $(column).children().not(".empty").first();
  console.log(previousCell);
  if (previousCell.hasClass('red'))
  {color =  "red"}
  else if  (previousCell.hasClass('black'))
  {color =  "black"};
  var currentCell = previousCell.next();
  console.log(currentCell);
  while (currentCell.hasClass(color)) {
    counter++;
    previousCell = currentCell;
    currentCell = previousCell.next()
    }
  if (counter === 4){
    console.log("true")
    callConnectFour();
  } else {
    console.log("false")
  }
}
