let html_section = document.querySelector('html');

let openNavbarButton = document.querySelector('.mobile-navbar__icon-open');

let closeNavbarButton = document.querySelector('.mobile-navbar__icon-close');
let closeNavbarClickLink = document.querySelectorAll('.mobile-navbar__link');

let NavbarMenu = document.querySelector('.mobile-navbar__menu');


openNavbarButton.addEventListener('click',(e) => {
    e.preventDefault();
    NavbarMenu.classList.add('openMenu');
});

closeNavbarButton.addEventListener('click',(e) => {
    e.preventDefault();
    NavbarMenu.classList.remove('openMenu');
});


closeNavbarClickLink.forEach((a) => {
    a.addEventListener('click', (e) => {
        e.preventDefault();
        NavbarMenu.classList.remove('openMenu');
    })
});

html_section.addEventListener('click', function(e) {
    if(e.target !== NavbarMenu)
    if(e.target !== openNavbarButton)
    {
        NavbarMenu.classList.remove('openMenu');
    }
});


