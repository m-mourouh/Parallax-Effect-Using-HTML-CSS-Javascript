const bg = document.querySelector('.bg');
const milk = document.querySelector('.milk');
const cup = document.querySelector('.cup');
const logo = document.querySelector('.logo');


window.addEventListener('scroll',function(){
    let y = this.scrollY;
    bg.style.top = `${y * 0.2}px`;
    milk.style.left = `${-y * 0.5}px`;
    cup.style.top = `${y }px`;
    logo.style.top = `${y * 0.8}px`;
})