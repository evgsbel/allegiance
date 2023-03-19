//masked inputs
  Inputmask({"mask": "+7 (999) 999 - 99 - 99"}).mask('.phone-mask');

//fancybox
// $(()=>{
//
//   $('[data-fancybox]').fancybox({
//     animationEffect: "zoom-in-out",
//     animationDuration: 600,
//     transitionEffect: "rotate",
//     transitionDuration: 400,
//   });
// })

// tabs

  document.addEventListener('DOMContentLoaded', function () {
    const tabsBtn = document.querySelectorAll('.tabs__btn');
    tabsBtn.forEach(function (el) {
      el.addEventListener('click', function (event) {

        tabsBtn.forEach(tabsBtn => {
          tabsBtn.classList.remove('is-active');
        });

        const path = event.currentTarget.dataset.path;

        document.querySelectorAll('.tabs__content').forEach(function (tabContent) {
          tabContent.classList.remove('is-active');
        });
        document.querySelector(`[data-target="${path}"]`).classList.add('is-active');
        el.classList.add('is-active');

      });
    });
  });

  // fixed header
let timer = null;
window.addEventListener('scroll', function () {

  if (timer !== null) {
    clearTimeout(timer);
    document.querySelector('header').classList.add('header_fixed');

    function stickySidebar() {
      var scrollDistance = $(document).scrollTop(),
        headerHeight = $('.header').outerHeight(true),
        // sidebarHeight = $('aside').outerHeight(true),
        footerOffsetTop = $('.js-stop-header').offset().top,
        $header = $('header');

      if (scrollDistance >= headerHeight) {
        $header.addClass('header_fixed');

      } else {
        $header.removeClass('header_fixed');
      }

      if (scrollDistance + headerHeight >= footerOffsetTop) {
        $header.removeClass('header_fixed');
        // $header.addClass('out');
      }
    }

    stickySidebar();

    $(document).scroll(function () {
      stickySidebar();
    });
  }
  timer = setTimeout(function () {
    document.querySelector('header').classList.remove('out');

  }, 800);
}, false);

// anchors
$(() => {
  const anchors = document.querySelectorAll('a[href*="#"]')

  for (let anchor of anchors) {
    anchor.addEventListener('click', function (e) {
      e.preventDefault()

      const blockID = anchor.getAttribute('href').substr(1)

      document.getElementById(blockID).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    })
  }
})

// hide menu
// mobile menu
$(() => {
  const btnMenu = document.querySelector('.header__btn');
 // const body = document.querySelector('body');
  const menu = document.querySelector('.nav');
  const menuLink = document.querySelectorAll('.nav .nav__link');

  const toggleMenu = function () {
    menu.classList.toggle('is-open');
    // menu.style.height = heroHeight + headerHeight + 'px'
    btnMenu.classList.toggle('is-active');
   // body.classList.toggle('opened-menu');
  };

  btnMenu.addEventListener('click', function (e) {
    e.stopPropagation();
    toggleMenu();
  });

  const closeBtn = document.querySelector('.nav__close');
  const closeMenu = function () {
    menu.classList.remove('is-open');
    //body.classList.remove('opened-menu');
    btnMenu.classList.remove('is-active');
  };

  menuLink.forEach(function (el) {
    el.addEventListener('click', function (event) {
      closeMenu();
    })
  })
  closeBtn.addEventListener('click', function (e) {
    e.stopPropagation();
    closeMenu();
  });
});




