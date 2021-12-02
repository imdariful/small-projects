// selecting the length of .drum class
let numberOfDrum = document.querySelectorAll(".drum").length;


// detecting click for all the buttons 
// making a loop for capturing every click and also capture innerHTML
for(let i = 0; i < numberOfDrum; i++){
    document.querySelectorAll(".drum")[i].addEventListener('click',function(){
        let buttonInnerHTML = this.innerHTML;
        makeSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
    });
}


// Detecting key press
document.addEventListener('keydown', function(event) {
    makeSound(event.key)
    buttonAnimation(event.key);
})


// makeSound function
function makeSound(key){
    switch (key) {
        case 'w':
            let tom1 = new Audio('./sounds/tom-1.mp3')
            tom1.play();
            break;
        case 'a':
            let tom2 = new Audio('./sounds/tom-2.mp3')
            tom2.play();
            break;
        case 's':
            let tom3 = new Audio('./sounds/tom-3.mp3')
            tom3.play();
            break;
        case 'd':
            let tom4 = new Audio('./sounds/tom-4.mp3')
            tom4.play();
            break;
        case 'j':
            let crash = new Audio('./sounds/crash.mp3')
            crash.play();
            break;
        case 'k':
            let kick = new Audio('./sounds/kick-bass.mp3')
            kick.play();
            break;
        case 'l':
            let snare = new Audio('./sounds/snare.mp3')
            snare.play();
            break;
        default:
            break;
    }
}

// animation 

function buttonAnimation(currentKey){
    const activeButton = document.querySelector('.' + currentKey)
    activeButton.classList.add('pressed')
    setTimeout( () => activeButton.classList.remove('pressed'), 100
    );
}
