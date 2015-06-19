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

function checkVertical(){
  var counter = 1;
  var color;
    if (cell.hasClass('red')){
    color =  "red";
  }
  else {
    color =  "black";
  }
  var previousCell = $(cell).parent().children().hasClass(color).first();
  console.log(previousCell);
  var currentCell = previousCell.next();
  console.log(currentCell);
  while (currentCell.hasClass(color)) {
    console.log(counter);
    console.log(previousCell);
    counter++;
    previousCell = currentCell;
    currentCell = previousCell.next()
    console.log(currentCell)
    }
  if (counter === 4){
    console.log("true")
    return true;
  } else {
    console.log("false")
    return false;
  }
}
function checkDiagonalLeft(){

}
function checkDiagonalRight(){

}

$(document).ready(function() {
  eventBindings();
});
