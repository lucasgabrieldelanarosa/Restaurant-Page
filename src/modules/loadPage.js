function loadPage(){
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
    homeButton.setAttribute('id', 'home')
    homeButton.innerText = 'Home';


    // Menu Button
    const menuButton = document.createElement('button');
    menuButton.setAttribute('id', 'menu')
    menuButton.innerText = 'Menu';

    // Contact Button
    const contactButton = document.createElement('button');
    contactButton.innerText = 'Contact';
    contactButton.setAttribute('id', 'contact')

    buttonsDiv.append(homeButton, menuButton, contactButton);
    content.appendChild(nav);

}

export default loadPage;