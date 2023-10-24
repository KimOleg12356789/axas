$(document).ready(function(){
	// tabbed content
    // http://www.entheosweb.com/tutorials/css/tabs.asp
    $(".tab_content").hide();
    $(".tab_content:first").show();

  /* if in tab mode */
    $("ul.tabs li").click(function() {
    
      $(".tab_content").hide();
      var activeTab = $(this).attr("rel"); 
      $("#"+activeTab).fadeIn();    
    
      $("ul.tabs li").removeClass("active");
      $(this).addClass("active");

    $(".tab_drawer_heading").removeClass("d_active");
    $(".tab_drawer_heading[rel^='"+activeTab+"']").addClass("d_active");
    
    });
  /* if in drawer mode */
  $(".tab_drawer_heading").click(function() {
      
      $(".tab_content").hide();
      var d_activeTab = $(this).attr("rel"); 
      $("#"+d_activeTab).fadeIn();
    
    $(".tab_drawer_heading").removeClass("d_active");
      $(this).addClass("d_active");
    
    $("ul.tabs li").removeClass("active");
    $("ul.tabs li[rel^='"+d_activeTab+"']").addClass("active");
    });
  
  
  /* Extra class "tab_last" 
     to add border to right side
     of last tab */
  $('ul.tabs li').last().addClass("tab_last");
   


$(function () {
  
  var offset = 0,
      duration = 0,
      top_section = $('.to-top'),
      toTopButton = $('a.back-to-top');
  // showing and hiding button according to scroll amount (in pixels)
  $(window).scroll(function () {
    if( $(this).scrollTop() > offset ) {
      $(top_section).fadeIn(duration);
    } else{
      $(top_section).fadeOut(duration);

    }});
  
  // activate smooth scroll to top when clicking on the button
  
  $(toTopButton).click(function(e) {
    e.preventDefault();
    $('html, body').animate({
      scrollTop: 0
    }, 700);
  });
  
});



$('.slayd_sl').slick({
		centerMode: true,
		centerPadding: '136px',
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: true,
        responsive: [
        {
          breakpoint: 1551,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 1025,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 769,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        },
          {
          breakpoint: 661,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        },

          {
            breakpoint: 576,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            }
          }
      ]
  });


$('.comands_sl').slick({
        infinite: true,
        speed: 300,
        slidesToShow: 6,
        slidesToScroll: 1,
        responsive: [
        {
          breakpoint: 1471,
          settings: {
            slidesToShow: 5,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 1301,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 1025,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 769,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          }
        },
          {
          breakpoint: 661,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          }
        },

          {
            breakpoint: 375,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            }
          }
      ]
  });



});









const burger = document.querySelector('.burger');
const navbar = document.querySelector('.mt-mobile');
const body = document.querySelector('body');

burger.addEventListener('click', () => {
    navbar.classList.toggle('nav-open');
    body.classList.toggle('body-open');
    burger.classList.toggle('burger-open');
    
});