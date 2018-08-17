


const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
          'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
          't', 'u', 'v', 'w', 'x', 'y', 'z'];


let guess                       // Geuss
let guessAlready = []           // Stored guessAlready
let lives                       // Lives
let counter                     // Count correct guessAlready
let space                       // Number of spaces in words '-'
  
// Get elements
let showLives = document.getElementById("mylives")

  
  
// create alphabet buttons
function buttons () {
    // assigning buttons area
    myButtons = document.getElementById('buttons')
    // creating unlist items
    letters = document.createElement('ul')
    // for loop for all the letters in the alphabet then listing them on at the ID buttons in HTML
    for (let i = 0; i < alphabet.length; i++) {
        letters.id = 'alphabet';
        list = document.createElement('li')
        list.id = 'letter';
        list.innerHTML = alphabet[i]
        check();
        myButtons.appendChild(letters)
        letters.appendChild(list)
    }
}
  
// Create guessAlready ul
function result () {
    // creat placeholder id to show blank spaces for word

    wordHolder = document.getElementById('placeholder')
    correct = document.createElement('ul')

    // for loop to count word length then create underscores
    for (let i = 0; i < musicians.length; i++) {
        correct.setAttribute('id', 'my-word')
        guess = document.createElement('li')
        guess.setAttribute('class', 'guess')

        // checking dashes within names to confirm dash in ul
        if (musicians[i] === "-") {
            guess.innerHTML = "-"
            space = 1;

        // if not dash then add underscore for letter
        } else {
            guess.innerHTML = "_"
        }
        
        // adding the guess letters to replace/append underscores
        guessAlready.push(guess)
        wordHolder.appendChild(correct)
        correct.appendChild(guess)
    }
}
    
// Show lives
function comments () {
    
    // lives count
    showLives.innerHTML = lives

        // lives countdown to game over
        if (lives < 1) {
            showLives.innerHTML = "Game Over!<br/>You SUCK, <br/> Aman-DUUUH!"
        }

        // for loop to compile correct guess until win
        for (let i = 0; i < guessAlready.length; i++) {
        if (counter + space === guessAlready.length) {
            showLives.innerHTML = "You Win!"
        }
    }
}
  

  
// OnClick Function
function check () {

    //game function on what happens when button is clicked
    list.onclick = function () {
        let geuss = (this.innerHTML)
        this.setAttribute("class", "active")
        this.onclick = null

        // 
        for (let i = 0; i < musicians.length; i++) {
          if (musicians[i] === geuss) {
            guessAlready[i].innerHTML = geuss
            counter += 1
            }
        }

        // accumulating guesses
        let j = (musicians.indexOf(geuss))
        if (j === -1) {
            lives -= 1
            comments()
            animate()
        } else {
            comments()
        }
    }
}
    
      
// Play
function play () {
    // musicians array
    artists = [
        'tupac',
        'nirvana', 
        'pearl jam', 
        'nas',
        'tool',
        'biggie',
        'jay-z',
        'no doubt',
        'radiohead',
        'pixies',
        'blur',
        'metallica',
        'oasis',
        'garbage',
        'sublime',
        'wu tang clan',
        'dr dre',
        'snoop dogg',
        'eazy e',
        'ice cube',
        'bone thugs',
    ]
    // randomly selecting musicians
    musicians = artists[Math.floor(Math.random() * artists.length)]
    // replacing spaces w/ "-"; so it won't look a letter in the blank spaces
    musicians = musicians.replace(/\s/g, "-")
    // console logging the musicians
    console.log(musicians)
    // resetting for new game
    buttons()
    guessAlready = [ ]
    lives = 10
    counter = 0
    space = 0
    result()
    comments()
    canvas()
}
  
play();


// Reset
  
document.getElementById('reset').onclick = function() {
    correct.parentNode.removeChild(correct);
    letters.parentNode.removeChild(letters);
    context.clearRect(0, 0, 400, 400);
    play();
}



  
  
    