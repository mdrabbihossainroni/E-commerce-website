$( function () {

$(`#banner`).slick({
    arrows: false,
    dots: true,
    fade: true,
    dotsClass: `slicks container`,
});

$('.slickSlider').slick({
  arrows: false,
  autoplay: true,
  autoplaySpeed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
      }
    },

    {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        }
      },
 
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1,
        }
      },

  
  ]
});


$('.slick-sliders').slick({
  arrows: false,
  autoplay: true,
  autoplaySpeed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
      }
    },

    {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        }
      },
 
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1,
        }
      },

  
  ]
});

$('.accordian').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 900,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
      }
    },

    {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        }
      },
 
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1,
        }
      },

  
  ]
});



$('.slick').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 900,
    responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 3,
          }
        },
    
        {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
            }
          },
     
          {
            breakpoint: 400,
            settings: {
              slidesToShow: 1,
            }
          },

      
      ]
});

$('.wrapper-slide').slick({
  slidesToShow: 2,
  arrows: false,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 900,
  responsive: [
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    },
  ]
});

$('.slick-slider').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 900,
  responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
        }
      },
  
      {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
          }
        },
   
        {
          breakpoint: 400,
          settings: {
            slidesToShow: 1,
          }
        },

    
    ]
});

$('.slicks').slick({
  arrows: false,
  slidesToShow: 6,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 800,
  responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
        }
      },
  
      {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
          }
        },
   
        {
          breakpoint: 400,
          settings: {
            slidesToShow: 1,
          }
        },

    
    ]
});

$('.markupSlide').slick({
  arrows: false,
  autoplay: true,
  autoplaySpeed: 1000,
  slidesToShow: 1,
  slidesToScroll: 1,

});


$('.counter').counterUp({
  delay: 10,
  time: 1000
});


AOS.init();


})




    

