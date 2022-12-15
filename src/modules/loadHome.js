function createHome(){

    const imgsDiv = document.createElement('div')
    imgsDiv.classList.add('imgsHomeContainer')

    const manoelDiv = document.createElement('div')
    manoelDiv.classList.add('manoelDiv')
    const manoelImg = document.createElement('img')
    manoelImg.classList.add('imgOwner')
    manoelImg.setAttribute('src', 'imgs/manoel.png')
    manoelDiv.appendChild(manoelImg)

    const manoelText = document.createElement('p')
    manoelText.innerText = 'Manoel Gomes - Caneta Azul';
    manoelDiv.appendChild(manoelText)

    const rockDiv = document.createElement('div')
    rockDiv.classList.add('rockDiv')
    const rockImg = document.createElement('img')
    rockImg.classList.add('imgOwner')
    rockImg.setAttribute('src', 'imgs/therock.png')
    rockDiv.appendChild(rockImg)

    const rockText = document.createElement('p')
    rockText.innerText = 'Dwayne Johnson - The Rock';
    rockDiv.appendChild(rockText)

    imgsDiv.append(manoelDiv, rockDiv)

    const content = document.querySelector('#content');
    content.appendChild(imgsDiv)

    const secondSection = document.createElement('div');
    secondSection.classList.add("secondSection");
    const testeImg = document.createElement('img');
    testeImg.setAttribute('src', 'imgs/teste.jpg');
    testeImg.classList.add('teste')
    secondSection.appendChild(testeImg)

    const secondSectionTitle = document.createElement('h2');
    secondSectionTitle.innerText = 'How it all began...'
    secondSectionTitle.classList.add('secondSectionTitle')

    const secondSectionText = document.createElement('p');
    secondSectionText.classList.add('secondSectionText')
    secondSectionText.innerText = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi reprehenderit, iure, rem voluptatum a aperiam minus, nisi totam incidunt delectus doloremque dicta hic. Libero animi distinctio ex vero, repellat est. Dolorum nihil corporis nobis eveniet saepe enim dolorem, cumque quae deserunt corrupti magni. Vero, quae reprehenderit quasi ipsam numquam velit esse saepe aliquid magni ut placeat aliquam quod ipsum, cumque porro? Sunt, incidunt aperiam fugit at fuga quisquam laudantium repudiandae corrupti sint voluptas officiis eveniet sed expedita molestiae accusamus illum itaque quod necessitatibus porro beatae suscipit laborum!'


    const secondSectionTextsDiv = document.createElement('div')
    secondSectionTextsDiv.classList.add('secondSectionTextsDiv')
    secondSectionTextsDiv.append(secondSectionTitle, secondSectionText)

    secondSection.appendChild(secondSectionTextsDiv)
    content.appendChild(secondSection)
}

export default createHome