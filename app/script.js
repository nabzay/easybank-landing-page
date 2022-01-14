const toggleBurger = document.querySelector('#burgerBtn');
const navMenu = document.querySelector('#navMobile');
const overlay = document.querySelector('#overlay');
const body = document.querySelector('.body');

toggleBurger.addEventListener('click', function() {
    console.log('click hamburger!');

    if (toggleBurger.classList.contains('open')) {
        toggleBurger.classList.remove('open');
        navMenu.classList.toggle('hide');
        overlay.classList.toggle('hide');
        body.classList.remove('scroll-lock');


    }

    else {
        toggleBurger.classList.toggle('open');
        navMenu.classList.remove('hide');
        overlay.classList.remove('hide');
        body.classList.toggle('scroll-lock');
    }
})