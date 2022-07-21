// Scroll animation
window.addEventListener("scroll", function () {
    document.body.classList.remove('_lock');
    let header = document.querySelector("header");
    header.classList.toggle("_scroll", window.scrollY > 0)
})

// Burger menu 
const iconMenu = document.querySelector('.menu__icon');
const menuBody = document.querySelector('.menu__body');
if (iconMenu) {

    iconMenu.addEventListener("click", function (e) {
        document.body.classList.toggle('_lock');
        iconMenu.classList.toggle('_active');
        menuBody.classList.toggle('_active');
    })
}

// Scrolling
const menuLinks = document.querySelectorAll('.menu__link[data-goto]');
if (menuLinks.length > 0) {
    menuLinks.forEach(menuLink => {
        menuLink.addEventListener("click", onMenuLinkClick);
    });

    function onMenuLinkClick(e) {
        const menuLink = e.target;
        if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
            const gotoBlock = document.querySelector(menuLink.dataset.goto);
            const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('header').offsetHeight;

            if (iconMenu.classList.contains('_active')) {
                document.body.classList.remove('_lock');
                iconMenu.classList.remove('_active');
                menuBody.classList.remove('_active');
            }

            window.scrollTo({
                top: gotoBlockValue,
                behavior: "smooth",
            });
            e.preventDefault();
        }
    }
}

// Swiper
const userSwiper = document.querySelector('.swiper-users');

if (userSwiper) {

    const swiper = new Swiper(".swiper-users", {
        loop: true,

        slidesPerView: 3.3,
        spaceBetween: 24,
        freeMode: true,

        pagination: {
        el: ".swiper-users__pagination",
        clickable: true,
        },

        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            590: {
                slidesPerView: 2,
            },
            950: {
                slidesPerView: 3,
            },
            1087: {
                slidesPerView: 3.3,
            },
        } 
    });
}
