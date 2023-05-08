let burger = document.querySelector('.header__burger-menu')
let menu = document.querySelector('.header__nav')
let menuLinks = document.querySelectorAll('.header__nav-link')

burger.addEventListener('click',

function(){

    burger.classList.toggle('open-menu')

    menu.classList.toggle('header__nav--active')

    document.body.classList.toggle('stop-scroll')
})

menuLinks.forEach(function(el){
    el.addEventListener('click', function(){

        burger.classList.remove('open-menu')

        menu.classList.remove('header__nav--active')

        document.body.classList.remove('stop-scroll')
    })
})

const swiper = new Swiper('.swiper', {
    slidesPerView: 1,
    loop: true,

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });

document.querySelectorAll('.tabs-nav__btn').forEach(function(tabsBtn){
  tabsBtn.addEventListener('click', function(e){
    const path = e.currentTarget.dataset.path;

    document.querySelectorAll('.tabs-nav__btn').forEach(function(btn){
      btn.classList.remove('tabs-nav__btn--active')});
      e.currentTarget.classList.add('tabs-nav__btn--active');

      document.querySelectorAll('.tabs-item').forEach(function(tabsBtn){
        tabsBtn.classList.remove('tabs-item--active')});

      document.querySelector(`[data-target="${path}"]`).classList.add('tabs-item--active');
  });
});

$(".accordion").accordion({
  heightStyle: "content",
  active: 0,
});

let searchOp = document.querySelector('.header__btn-search')
let input = document.querySelector('.header__input')
let closebtn = document.querySelector('.header__btn-close')
let searching = document.querySelector('.header__btn-search2')

searchOp.addEventListener('click',

function(){
    input.classList.toggle('header__input--active')

    closebtn.classList.toggle('header__btn-close--active')
})

closebtn.addEventListener('click',

function(){

    input.classList.remove('header__input--active')

    closebtn.classList.remove('header__btn-close--active')
})