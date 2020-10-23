var open_menu=0;
$(".menu_btn").click(function(event){
  if($(window).width()<1154){
    $(".katalog_menu").slideUp(500)
    open_kat=0
  }
  if(open_menu==0){
    $(".nav ul").slideDown(500)
    open_menu=1
  }
  else{
    $(".nav ul").slideUp(500)
    open_menu=0
  }
  event.stopPropagation()
  $("body").click(function(){
    $(".nav ul").slideUp(500)
    open_menu=0
  })
})
var open_kat=0;
$(".open_kat").click(function(event){
  if($(window).width()<1154){
    $(".nav ul").slideUp(500)
    open_menu=0
  }
  if(open_kat==0){
    $(".katalog_menu").slideDown(500)
    open_kat=1
  }
  else{
    $(".katalog_menu").slideUp(500)
    open_kat=0
  }
  event.stopPropagation()
  $("body").click(function(){
    $(".katalog_menu").slideUp(500)
    open_kat=0
  })
})
var otziv = 0;
$(".open_in_hide_otziv").click(function(){
  if(otziv==0){
    $(".otziv_item").slideUp(500)
    $(".open_in_hide_otziv img").css("transform","rotate(180deg)")
    otziv=1
  }
  else{
    $(".otziv_item").slideDown(500)
    $(".open_in_hide_otziv img").css("transform","rotate(0deg)")
    otziv=0
  }
})
var swiper = new Swiper('.swiper-container', {
      pagination: {
        el: '.swiper-pagination',
      },
});
jQuery(function($){
  $(document).ready(function(){
      var owl = $('.product_owl_new,.product_owl_rasprodaj,.product_owl_hit').owlCarousel({
          items: 3,
          slideSpeed: 500,
          autoplay: false,
          loop: true,
          nav: false,
          rewindNav : false,
          mouseDrag: true,
          margin: 16,
          autoWidth:true
      }).data('owlCarousel');
  });
})

$(function(){

  $('.product__gallery-main').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.product__gallery-thumbnails'
  });
  $('.product__gallery-thumbnails').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: '.product__gallery-main',
    dots: true,
    focusOnSelect: true
  });


    $('.product_block').slick({
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 4,
      prevArrow: "<img src='img/arrow_left.svg' class='prev' alt='1'>",
    nextArrow: "<img src='img/arrow_right.svg' class='next' alt='2'>",
    });

    $(document).ready(function() {
      $('.down').click(function () {
        var $input = $(this).parent().find('input');
        var count = parseInt($input.val()) - 1;
        count = count < 1 ? 1 : count;
        $input.val(count);
        $input.change();
        return false;
      });
      $('.up').click(function () {
        var $input = $(this).parent().find('input');
        $input.val(parseInt($input.val()) + 1);
        $input.change();
        return false;
      });
    });
});
