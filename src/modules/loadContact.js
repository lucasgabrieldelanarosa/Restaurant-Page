import loadPage from "./loadPage";

function createContactContainer(){
    const contactContainer = document.createElement('div')
    contactContainer.classList.add('contactContainer')
    content.appendChild(contactContainer)
}
function createContacts(){
    const contactContainer = document.querySelector('.contactContainer')
    const contacts = document.createElement('div')
    contacts.classList.add('contactsContainer')
    contactContainer.appendChild(contacts)
    contacts.innerHTML = '<h1>Contacts</h1> <p>@manoelgomesbr - Caneta Azul Instagram</p> <p>@therock - The Rock Instagram</p>'
}
function loadContact(){
    loadPage()
    createContactContainer()
    createContacts()
}

export default loadContact