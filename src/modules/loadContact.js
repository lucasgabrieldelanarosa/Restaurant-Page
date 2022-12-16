import loadPage from "./loadPage";

function createContactContainer(){
    const menuContainer = document.createElement('div')
    menuContainer.classList.add('menuContainer')
    content.appendChild(menuContainer)
}

function loadContact(){
    loadPage()
    createContactContainer()
}

export default loadContact