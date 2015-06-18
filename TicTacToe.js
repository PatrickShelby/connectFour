TicTacToe = function(){
  this.currentPlayer = 'X';

  this.state = [
    null,null,null,
    null,null,null,
    null,null,null,
  ];

};

TicTacToe.prototype.findWinner = function(){
  // if (this.state[0] && this.state[1] && this.state[2])

  // horizontal
  if (this.state[0] === 'X' && this.state[1] === 'X' && this.state[2] === 'X') { return 'X'; }
  if (this.state[3] === 'X' && this.state[4] === 'X' && this.state[5] === 'X') { return 'X'; }
  if (this.state[6] === 'X' && this.state[7] === 'X' && this.state[8] === 'X') { return 'X'; }

  // vertical
  if (this.state[0] === 'X' && this.state[3] === 'X' && this.state[6] === 'X') { return 'X'; }
  if (this.state[1] === 'X' && this.state[4] === 'X' && this.state[7] === 'X') { return 'X'; }
  if (this.state[2] === 'X' && this.state[5] === 'X' && this.state[8] === 'X') { return 'X'; }
  
  if (this.state[0] === 'X' && this.state[4] === 'X' && this.state[8] === 'X') { return 'X'; }
  if (this.state[2] === 'X' && this.state[4] === 'X' && this.state[6] === 'X') { return 'X'; }

  // horizontal
  if (this.state[0] === 'O' && this.state[1] === 'O' && this.state[2] === 'O') { return 'O'; }
  if (this.state[3] === 'O' && this.state[4] === 'O' && this.state[5] === 'O') { return 'O'; }
  if (this.state[6] === 'O' && this.state[7] === 'O' && this.state[8] === 'O') { return 'O'; }

  // vertical
  if (this.state[0] === 'O' && this.state[3] === 'O' && this.state[6] === 'O') { return 'O'; }
  if (this.state[1] === 'O' && this.state[4] === 'O' && this.state[7] === 'O') { return 'O'; }
  if (this.state[2] === 'O' && this.state[5] === 'O' && this.state[8] === 'O') { return 'O'; }
  
  if (this.state[0] === 'O' && this.state[4] === 'O' && this.state[8] === 'O') { return 'O'; }
  if (this.state[2] === 'O' && this.state[4] === 'O' && this.state[6] === 'O') { return 'O'; }

};


TicTacToe.prototype.selectSquare = function(index){
  if (this.gameOver || this.state[index] !== null){
    throw Error('illegal move');
  }
  
  this.state[index] = this.currentPlayer;

  var winner = this.findWinner();
  if (winner){
    this.gameOver = true;
    this.winner = winner;
    console.log(this.status());
  }

  this.currentPlayer = this.currentPlayer === 'X' ? 'O' : 'X';
  
  this.updateDOM();
};

TicTacToe.prototype.consoleLog = function(){
  console.log(this.state.slice(0,3));
  console.log(this.state.slice(3,6));
  console.log(this.state.slice(6,9));
  console.log('----------');
};


TicTacToe.prototype.render = function(cssSelector){
  this.node = $('.tic-tac-toe-game.template').clone()
  this.node.removeClass('template')
  this.updateDOM();
  this.node.appendTo(cssSelector);


  var game = this;

  // // not using event delegation
  // this.node.on('click', function(event){
  //   var squares = $(this).find('.tic-tac-toe-square');
  //   var square = $(event.target);
  //   if (!square.is('.tic-tac-toe-square')) return;
  //   var index = squares.index(square);
  //   game.selectSquare(index);
  // });

  // uses event delegation
  this.node.on('click', '.tic-tac-toe-square', function(event){
    var squares = game.node.find('.tic-tac-toe-square');
    var square = $(this);
    var index = squares.index(square);
    game.selectSquare(index);
  });


};


TicTacToe.prototype.status = function(){
  if (this.gameOver) return 'player '+this.winner+' won! :D';
  return 'current player: '+this.currentPlayer;
};

TicTacToe.prototype.updateDOM = function(){
  if (!this.node) return;

  var squares = this.node.find('.tic-tac-toe-square');

  this.node.find('.tic-tac-toe-status').text(this.status());

  this.state.forEach(function(state, index){
    squares.eq(index).text(state);
  });

};




// var game = new TicTacToe;
// game.consoleLog();
// game.selectSquare(4);
// game.consoleLog();
// game.selectSquare(0);
// game.consoleLog();
// game.selectSquare(3);
// game.consoleLog();
// game.selectSquare(5);
// game.consoleLog();
// game.selectSquare(1);
// game.consoleLog();
// game.selectSquare(6);
// game.consoleLog();
// game.selectSquare(7);
// game.consoleLog();

