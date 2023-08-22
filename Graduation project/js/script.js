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
    responsive:[
        {
            breakpoint:1100,
            settings:{
                slidesToShow: 3,
                slidesToScroll: 3 
            },
            
        },
        {
            breakpoint:850,
            settings:{
                slidesToShow: 2,
                slidesToScroll: 2 
            },
            
        },
        {
            breakpoint:650,
            settings:{
                slidesToShow: 1,
                slidesToScroll: 1 
            },
            
        }
    ]
});
$('.slider3').slick({
    slidesToShow: 4,
    slidesToScroll: 4,
    // autoplay: true,
    autoplaySpeed: 3000,
    speed: 1000,
    dots:true,
    responsive:[
        {
            breakpoint:1100,
            settings:{
                slidesToShow: 2,
                slidesToScroll: 2 
            },
            
        },
        {
            breakpoint:650,
            settings:{
                slidesToShow: 1,
                slidesToScroll: 1 
            },
            
        }
    ]
});   
$('.slider4').slick({
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplaySpeed: 3000,
    speed: 1000,
    dots:true,
    arrows:false,
    responsive:[
        {
            breakpoint:1100,
            settings:{
                slidesToShow: 3,
                slidesToScroll: 3 
            },
            
        },
        {
            breakpoint:850,
            settings:{
                slidesToShow: 2,
                slidesToScroll: 2 
            },
            
        },
        {
            breakpoint:650,
            settings:{
                slidesToShow: 1,
                slidesToScroll: 1 
            },
            
        }
    ]
});  

$('.slider5').slick({
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplaySpeed: 3000,
    speed: 1000,
    dots:true,
    arrows:false,
    responsive:[
        {
            breakpoint:1100,
            settings:{
                slidesToShow: 3,
                slidesToScroll: 3 
            },
            
        },
        {
            breakpoint:850,
            settings:{
                slidesToShow: 2,
                slidesToScroll: 2 
            },
            
        },
        {
            breakpoint:650,
            settings:{
                slidesToShow: 1,
                slidesToScroll: 1 
            },
            
        }
    ]
});  

}); 

function dropList(number) {
    document.getElementById("Drop" + number).classList.toggle("show");
  };

  var menuBtn = document.querySelector('.menu-btn');
  var menu = document.querySelector('.header-bottom__menu');
  menuBtn.addEventListener('click', function(){
      menuBtn.classList.toggle('active');
      menu.classList.toggle('active');
  });