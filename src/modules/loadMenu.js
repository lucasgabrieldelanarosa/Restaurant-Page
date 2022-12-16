import loadPage from "./loadPage";

function createMenuContainer(){
    const menuContainer = document.createElement('div')
    menuContainer.classList.add('menuContainer')
    content.appendChild(menuContainer)
}

function createFoodContainer(){
    const foodContainer = document.createElement('div')
    foodContainer.setAttribute('id', 'foodContainer')
    const menuContainer = document.querySelector('.menuContainer')
    foodContainer.classList.add('foodContainer')

    //food1
    const food1 = document.createElement('div')
    food1.classList.add('food')
    const food1Img = document.createElement('img')
    food1Img.setAttribute('src', 'imgs/bluebanana.png')
    const food1Title = document.createElement('h3')
    food1Title.textContent = 'Blue Banana'
    const food1Text = document.createElement('p')
    food1Text.textContent = '~ 1000Kz'

    const food1TextsDiv = document.createElement('div')
    food1TextsDiv.append(food1Title, food1Text)

    food1.append(food1Img, food1TextsDiv)

    //food 2
    const food2 = document.createElement('div')
    food2.classList.add('food')
    
    const food2Img = document.createElement('img')
    food2Img.setAttribute('src', 'imgs/kiwi.png')
    const food2Title = document.createElement('h3')
    food2Title.textContent = 'Kiwi'
    const food2Text = document.createElement('p')
    food2Text.textContent = '~ 2500Kz'
    
    const food2TextsDiv = document.createElement('div')
    food2TextsDiv.append(food2Title, food2Text)

    food2.append(food2Img, food2TextsDiv)

    //food3
    const food3 = document.createElement('div')
    food3.classList.add('food')
    
    const food3Img = document.createElement('img')
    food3Img.setAttribute('src', 'imgs/caneta-burger.jpg')
    const food3Title = document.createElement('h3')
    food3Title.textContent = 'Caneta Burger'
    const food3Text = document.createElement('p')
    food3Text.textContent = '~ 5000Kz'
    
    const food3TextsDiv = document.createElement('div')
    food3TextsDiv.append(food3Title, food3Text)

    food3.append(food3Img, food3TextsDiv)
    
    foodContainer.append(food1, food2, food3)

    
    menuContainer.appendChild(foodContainer)
}

function loadMenu(){
    loadPage()
    createMenuContainer()
    createFoodContainer()
}

export default loadMenu