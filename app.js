const timeLeftDisplay = document.querySelector('#time-left')
const resultDisplay = document.querySelector('#result') // I'm looking for id = result
const startPauseButton = document.querySelector('#start-pause-button')
const squares = document.querySelectorAll('.grid div') // vsichki koito sa podchineni na grid (divcheta)  only the divs inside grid 
let currentIndex = 0
function moveFrog() {
    

    squares[currentIndex].classList.add('frog')
}

document.addEventListener('keyup', moveFrog)