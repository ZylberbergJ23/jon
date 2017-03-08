$(document).ready(function(){
  $(".button-collapse").sideNav();
  $('.parallax').parallax();
})



$(window).scroll(function() {
    if ($(this).scrollTop() >= 50) {        // If page is scrolled more than 50px
    	// $('body').append("<a id='arrow'> <i class='fa fa-arrow-up'></i> </a>")
        $('#arrow').fadeIn(500);    // Fade in the arrow
    } else {
        $('#arrow').fadeOut(200);   // Else fade out the arrow
    }
});

$('#arrow').click(function() {      // When arrow is clicked
    $('body').animate({
        scrollTop : 0                       // Scroll to top of body
    }, 500);
})
