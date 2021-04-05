const mediaQueryList = window.matchMedia('(max-width: 1200px)');
let menuButton = document.querySelector('#menu>h1');
let menu = document.querySelector('#menu>ul');

 menuButton.addEventListener('click', function() {
    if (mediaQueryList.matches) {
        console.log('Media Query Matched!');
        menu.classList.toggle('show-menu');
    }
});