const container = document.querySelector('.container');
const sourceURL = 'https://source.unsplash.com/random/';
const rows = 6;

for (let i = 0; i < rows * 3; i++){
    const img = document.createElement('img')
    img.src = `${sourceURL}${getRandom()}`
    container.appendChild(img)
}

function getRandomPic(){
    return Math.floor(Math.random() * 10) + 250
}

function getRandom(){
    return `${getRandomPic()}x${getRandomPic()}`
}
