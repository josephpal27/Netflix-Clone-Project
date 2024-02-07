
// ------- Navbar Ul Control ------- //

$(document).ready(function(){

    $('.fa-bars').click(function(){
        $('nav ul').slideToggle();
        $('.upper-div').css({'display' : 'block'});
    })

    $('.upper-div').click(function(){
        $('nav ul').slideUp();
        $('.upper-div').css({'display' : 'none'}); 
    })

})

