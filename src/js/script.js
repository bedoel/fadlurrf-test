// navbar fix
window.onscroll = function(){
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop;

    if(window.pageYOffset > fixedNav){
        header.classList.add('navbar-fixed');
    } else{
        header.classList.remove('navbar-fixed');
    }
}

// Menu hambuger
const hambuger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');

hambuger.addEventListener('click', function(){
    hambuger.classList.toggle('menu-active');
    navMenu.classList.toggle('hidden');
});