const timeLeftDisplay = document.querySelector('#time-left')
const resultDisplay = document.querySelector('#result') // I'm looking for id = result
const startPauseButton = document.querySelector('#start-pause-button')
const squares = document.querySelectorAll('.grid div') // vsichki koito sa podchineni na grid (divcheta)  only the divs inside grid 
let currentIndex = 76
const width = 9;

function moveFrog(e) { // pass-vame event
    squares[currentIndex].classList.remove('frog')
   
            switch(e.key) {  // ako na eventa key-a e Arrow left -> izpulni neshto si tam... etc
        
                    case 'ArrowLeft' : 

                    if (currentIndex % width !== 0) 
                       currentIndex -= 1;
                    break;

                    case 'ArrowRight' : 

                    if((currentIndex % width < width-1)) 
                        currentIndex += 1
                    
                    break;

                    case 'ArrowUp' : 

                    if(currentIndex-width>=0) 
                    currentIndex -= width
                    break;

                    case 'ArrowDown' : 

                    if(currentIndex+width<=80)
                        currentIndex += width
                    break;
            }
            
       
     
        
    squares[currentIndex].classList.add('frog')
}

document.addEventListener('keyup', moveFrog)
