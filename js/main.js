
const swiper = new Swiper('.swiper', {

    slidesPerView:1,
    loop: false,
    width:257,
    spaceBetween:30,
    centeredSlides:true,
    breakpoints:{
        768:{
            slidesPerView:2,
            spaceBetween:54,
            width:1144,
            initialSlide: 0, 
            centeredSlides:true,
            centeredSlidesBounds:false
        }
    },
        

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    type:'fraction',
    formatFractionCurrent: function(n){
        return '0'+n;
    },
    formatFractionTotal:function(n){
        return'0'+ n;
    },
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  });


//アコーディオン
$('.accordion').click(function () {
    //トグルで表示
   $(this).toggleClass('active');
   $(this).next('.benefits-info__item-content').slideToggle(); 
 });


  //SPナビゲーション
  $(document).ready(function () {
    $('.hamburger-menu').click(function () {
        $('.nav-sp').slideToggle(); // Toggles the SP menu
        $(this).find('i').toggleClass('fa-bars fa-times');
    });
});













