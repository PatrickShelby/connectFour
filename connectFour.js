$( document ).ready(function() {
   color = 'red';
   gravity = 'last'
    eventBindings();
});

var eventBindings = function() {
  $('.column').on("click", function(event) {
    var column = $(this);
    console.log("in click");
    addPiece(column);
    checkVertical(column);
  });
  $('.gravity').on('click', clickGravity);
  $('.normality').on('click', clickNormality);
  $('.jar').on('click', clickJar);
}

var addPiece= function(column){
  $(column).find('> .empty:' + gravity).removeClass('empty').addClass(color)
color = color === 'red' ? 'black' : 'red'
  };

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

var clickGravity = function(e){
   gravity = 'first';
   alert("You are deep in Foursome");
   $('body').css('background-image', 'url(star-wars.jpg)')
   $('.board').css('background-color', 'transparent')
   // $('.empty').css('background-color', 'transparent')
   // $('.empty').css('opacity', '0.35')
   // $('.red').css('opacity', '1')
   // $('.black').css('opacity', '1')
   $('h1').text('May the force be with you!')
   $('h1').css('color', 'white')
  }

  var clickNormality = function(e){
   gravity = 'last'
   alert("You are back to reality");
   $('body').css('background-image', 'url(wallpaper.jpg)')
    $('.board').css('background-color', 'pink')
   $('.empty').css('background-color', 'beige')
   $('h1').text('Welcome back to reality')
   $('h1').css('color', 'purple')
  // $('.empty').css('opacity', '0.8')
  }

 var clickJar = function(e){
   alert("The mess maker is Da House");
   $('.empty').css('background-image', 'url(jar.jpg)')
  }


