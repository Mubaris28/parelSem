$(document).ready(function() {
  $('a[href^="#"]').click(function(event) {
    event.preventDefault();
    var target = $($(this).attr('href'));
    if (target.length) {
      $('html, body').animate({
        scrollTop: target.offset().top
      }, 500);
    }
  });
});


$(window).scroll(function () {
  var scroll = $(window).scrollTop();
  if (scroll >= 50) {
    $('header').addClass('scrolled');
  } else {
    $('header').removeClass('scrolled');
  }
});


$(window).scroll(function () {
  var scroll = $(window).scrollTop();
  if (scroll >= 500) {
    $('.backtotop').addClass('active');
  } else {
    $('.backtotop').removeClass('active');
  }
});


$(document).ready(function () {
  var $carousel = $('.mob-slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    speed: 300,
    arrows: false,
    fade: false,
    variableWidth: false,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: 'linear',
    asNavFor: '.mob-slider-nav, .mob-slider-nav2',
    pauseOnFocus: false,
    pauseOnHover: false,
    pauseOnDotsHover: false,
    draggable: true,
    swipeToSlide: true,
  });

  var $thumbs = $('.mob-slider-nav, .mob-slider-nav2').slick({
    slidesToShow: 2,
    slidesToScroll: 3,
    asNavFor: '.mob-slider-for',
    dots: false,
    arrows: false,
    infinite: false,
    centerMode: false,
    focusOnSelect: false,
    autoplay: false,
  });

  $('.mob-slider-nav [data-target], .mob-slider-nav2 [data-target]').on('click', function () {
    var artworkId = $(this).data('target');
    var artIndex = $carousel.find('[data-target="' + artworkId + '"]').data('slick-index');
    $carousel.slick('slickGoTo', artIndex);
  });
});


$(document).ready(function () {
  var counterOffset = $('.counter').offset().top;
  var windowHeight = $(window).height();
  var animated = false;

  $(window).scroll(function () {
    var scrollPos = $(window).scrollTop();

    if (scrollPos > counterOffset - windowHeight && !animated) {
      $('.counter').each(function () {
        animateCounter($(this));
      });
      animated = true;
    }
  });

  function animateCounter(counter) {
    var targetValue = counter.data('target');
    var duration = counter.data('duration');

    $({
      counterValue: 0
    }).animate({
      counterValue: targetValue
    }, {
      duration: duration,
      easing: 'swing',
      step: function (now) {
        counter.text(Math.ceil(now));
      }
    });
  }
});


$('.client-slider').slick({
  infinite: true,
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  dots: false,
  speed: 500,
  cssEase: 'linear',
  arrows: false,
  responsive: [{
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3
      }
    }
  ]
});



$(document).ready(function() {
  $('.menu-icon').click(function() {
    $(this).toggleClass('open');
    $('nav').toggleClass('open');
  });
});


$(document).ready(function() {
  $('.top-bar').click(function(event) {
    $(this).toggleClass('slide-open');
    event.stopPropagation(); // Prevent event bubbling
  });

  $(document).click(function(event) {
    if (!$(event.target).closest('.top-bar').length) {
      $('.top-bar').removeClass('slide-open');
    }
  });
});


