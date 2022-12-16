import loadPage from "./loadPage";

function createMenuContainer(){
    const menuContainer = document.createElement('div')
    menuContainer.classList.add('menuContainer')
    content.appendChild(menuContainer)
}



function loadMenu(){
    loadPage()
    createMenuContainer()
}

export default loadMenu