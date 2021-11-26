const randomNumber1 = Math.floor(Math.random() * 6 + 1);
const randomNumber2 = Math.floor(Math.random() * 6 + 1);
const h1 = document.querySelector('h1');
const playerOneImg = document.querySelector(".img1");
const playerTwoImg = document.querySelector(".img2");
const button = document.querySelector('.roll');
button.addEventListener('click', ()=>{
    playerOneImg.setAttribute('src', `./images/dice${randomNumber1}.png`);
    playerTwoImg.setAttribute('src', `./images/dice${randomNumber2}.png`);
if(randomNumber1 > randomNumber2){
    h1.innerText = 'Player 1 is WINNER!'
} else if (randomNumber1 === randomNumber2){
    h1.innerText = 'DRAW!'
} else if(randomNumber1 < randomNumber2){
    h1.innerText = 'Player 2 is WINNER!'
}
});

const reloadButton = document.querySelector(".reload");
function reload() {
    reload = location.reload();
}
// Event listeners for reload
reloadButton.addEventListener("click", reload);
