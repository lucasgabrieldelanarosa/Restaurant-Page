import loadHome from './modules/loadHome'
import loadMenu from './modules/loadMenu';
import loadContact from './modules/loadContact';

init()

function cleanPage(){
    const content = document.querySelector('#content')
    content.innerHTML = '';
}


function activeHomeBtn(){
    const homeBtn = document.getElementById('home')
    const menuBtn = document.getElementById('menu')
    const contactBtn = document.getElementById('contact')
    homeBtn.classList.add('active')
    menuBtn.classList.remove('active')
    contactBtn.classList.remove('active')
}

function activeMenuBtn(){
    const homeBtn = document.getElementById('home')
    const menuBtn = document.getElementById('menu')
    const contactBtn = document.getElementById('contact')
    homeBtn.classList.remove('active')
    menuBtn.classList.add('active')
    contactBtn.classList.remove('active')
}

function activeContactBtn(){
    const homeBtn = document.getElementById('home')
    const menuBtn = document.getElementById('menu')
    const contactBtn = document.getElementById('contact')
    homeBtn.classList.remove('active')
    menuBtn.classList.remove('active')
    contactBtn.classList.add('active')
}

function addNavEvents() {
    const homeBtn = document.getElementById('home');
    homeBtn.addEventListener('click', cleanPage)
    homeBtn.addEventListener('click', loadHome)
    homeBtn.addEventListener('click', addNavEvents)
    homeBtn.addEventListener('click', activeHomeBtn)

    const menuButton = document.getElementById('menu');
    menuButton.addEventListener('click', cleanPage)
    menuButton.addEventListener('click', loadMenu)
    menuButton.addEventListener('click', addNavEvents)
    menuButton.addEventListener('click', activeMenuBtn)

    const contactButton = document.getElementById('contact');
    contactButton.addEventListener('click', cleanPage)
    contactButton.addEventListener('click', loadContact)
    contactButton.addEventListener('click', addNavEvents)
    contactButton.addEventListener('click', activeContactBtn)
}
function init(){
    loadHome();
    addNavEvents();
    activeHomeBtn();
}