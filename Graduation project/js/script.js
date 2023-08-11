$(document).ready(function(){
    $('.slider1').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 2000,
        // fade: true,
    });
    
    $('.slider2').slick({
    slidesToShow: 4,
    slidesToScroll: 4,
    // autoplay: true,
    autoplaySpeed: 3000,
    speed: 1000,
    dots:true,
});
    
}); 

