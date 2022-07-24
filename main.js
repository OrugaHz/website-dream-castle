const nav = document.querySelector('.nav')

document.addEventListener('click', () => {
    if (nav.classList.contains('show')) {
        nav.classList.remove('show')
    }
})


// obsługa cookies

// const cookieBox = document.querySelector('.cookie-box');
// const cookieBtn = document.querySelector('.cookie-btn');

// const showCookie = () => {
//     const cookieEaten = localStorage.getItem('cookie');
//     if (cookieEaten) {
//         cookieBox.classList.add('hide');
//     }
// }


// const handleCookieBox = () => {
//     localStorage.setItem('cookie', 'true');
//     cookieBox.classList.add('hide');
// }

// cookieBtn.addEventListener('click', handleCookieBox)

// showCookie()


const mobileNav = document.querySelector('.nav__list');
const burgerIcon = document.querySelector('.nav__button_burger');

burgerIcon.addEventListener('click', function () {
    mobileNav.classList.toggle('active');
    burgerIcon.classList.toggle('active');
})