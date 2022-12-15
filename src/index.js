import createHome from './modules/loadHome'

function init(){
    const content = document.querySelector('#content');
    const nav = document.createElement('nav');

    // Title
    const pageTitle = document.createElement('h1')
    pageTitle.innerText = 'Restaurant Page' 
    nav.appendChild(pageTitle)


    const buttonsDiv = document.createElement('div')
    buttonsDiv.classList.add('buttonsDiv')
    nav.appendChild(buttonsDiv)

    // Home Button
    const homeButton = document.createElement('button');
    homeButton.innerText = 'Home';
    homeButton.classList.add('active')

    // Menu Button
    const menuButton = document.createElement('button');
    menuButton.innerText = 'Menu';

    // Contact Button
    const contactButton = document.createElement('button');
    contactButton.innerText = 'Contact';

    buttonsDiv.append(homeButton, menuButton, contactButton);
    content.appendChild(nav);

    createHome()
}
init()