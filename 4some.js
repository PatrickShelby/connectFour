// $(function(){



// var blackClick = $('.column').on('click', function(e){

//   $(this).find('> .empty:last').removeClass('empty').addClass('black');

// });

// var redClick = $('.column').on('click', function(e){
//   $(this).find('> .empty:last').removeClass('empty').addClass('red');

// });
// });



$(function(){
  gravity = 'last'
  color = 'red'
$('.column').on('click', function(e){
  $(this).find('> .empty:' + gravity).removeClass('empty').addClass(color)
color = color === 'red' ? 'black' : 'red'
  });

$(".gravity").on('click', function(e){
   gravity = 'first'
   alert("You are deep in Foursome");

   $('body').css('background-image', 'url(star-wars.jpg)')
   $('.board').css('background-color', 'transparent')
   $('.empty').css('background-color', 'transparent')
   $('h1').text('May the force be with you!')
   $('h1').css('color', 'white')


  })

$(".normality").on('click', function(e){
   gravity = 'last'
   alert("You are back to reality");
   $('body').css('background-image', 'url(wallpaper.jpg)')
    $('.board').css('background-color', 'pink')
   $('.empty').css('background-color', 'beige')
   $('h1').text('Welcome back to reality')
   $('h1').css('color', 'purple')
  })
});
