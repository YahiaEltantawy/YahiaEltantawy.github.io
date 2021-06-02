

$('.nav-link').click( function (){
    let sectionID = $(this).attr('href') //Get ID
    let sectionTop = $(sectionID).offset().top; //Get where section top is starting 

    $('html,body').animate({scrollTop : sectionTop} , 1000 );
})


