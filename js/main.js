// Header slider
$(".banner-slider").slick({
  autoplay: true,
  dots: true,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
});



$(".detail-account").click(function() {
  $(".ma-hello-account").hide();
  $(".ma-address-account").hide();
  $(".ma-mng-account").show();
  $(".ma-cart-infor").hide();
  $('html, body').animate({ scrollTop: 0 }, 400);
  
});

$(".address-account").click(function() {
  $(".ma-hello-account").hide();
  $(".ma-address-account").show();
  $(".ma-mng-account").hide();
  $(".ma-cart-infor").hide();
  $('html, body').animate({ scrollTop: 0 }, 400);
});

$(".ci-account").click(function() {
  $(".ma-hello-account").hide();
  $(".ma-address-account").hide();
  $(".ma-mng-account").hide();
  $(".ma-cart-infor").show();
  $('html, body').animate({ scrollTop: 0 }, 400);
});