/*
psuedo-code methods
1.

*/

// connectFour = function(){
//       this.board =
//            [null,null,null,null,null,null,null,
//             null,null,null,null,null,null,null,
//             null,null,null,null,null,null,null,
//             null,null,null,null,null,null,null,
//             null,null,null,null,null,null,null,
//             null,null,null,null,null,null,null]

//       this.currentPlayer = "red";
// }

var eventBindings = function () {
  $(".cell").on("click", function (event) {
    cell = $(this);
    console.log("in click");
    event.preventDefault();
    checkVertical();
  });
}
function turnHandler(){
}

function checkForWin(){
  checkHorizontal();
  checkVertical();
  checkDiagonalRight();
  checkDiagonalLeft();
}

function checkHorizontal(){

}

function callConnectFour(){
}

function checkVertical(){
  var counter = 1;
  var color;
  var previousCell = $(cell.parent()).find('.red').first()
  if (previousCell.hasClass('red'))
  {color =  "red"};
  else if  (previousCell.hasClass('black'))
  {color =  "black"};
  var currentCell = previousCell.next();
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

function checkDiagonalLeft(){

}
function checkDiagonalRight(){

}

$(document).ready(function() {
  eventBindings();
});
