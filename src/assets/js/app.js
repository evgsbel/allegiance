//masked inputs

  Inputmask({"mask": "+7 (999) 999 - 99 - 99"}).mask('.phone-mask');


//fancybox

  $('[data-fancybox=""]').fancybox({
    // Options will go here
  });


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

