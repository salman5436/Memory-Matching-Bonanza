//-----------------------------> Declaring DOM Refs and Consts <----------------
//array story links

//array of rapper images that will be pushed within a function
let links = 
['https://placekitten.com/278/181',
'https://placekitten.com/278/181',
'https://picsum.photos/id/237/278/181',
'https://picsum.photos/id/237/278/181',
'https://picsum.photos/278/181',
'https://picsum.photos/278/181',
'https://www.placecage.com/278/181',
'https://www.placecage.com/278/181']

const player = {
    points: 0,
    pick: null,
    choices: []
}


//this var represents an array of the elements in my HTML with the class card, meaning the img divs on my game board
let allCards = document.getElementsByClassName('card');
let startBtn = document.getElementById('start-button')


//--------------------> Game Logic Functions <------------------------


// This function is a callBack Function that is called when adding the event listener in the loop for the AllCards array
// function flipCards (e) {
//      //changed image versus default image
//      // if div id at img is the same as default image, do THIS
//     console.log(e);
        
//     // Using this var, 
//     let randomImg = links[Math.floor(Math.random() * 5)]
//     e.target.src = randomImg;
//     hasFlipped = true;
// }


// //This loop iterates through the div elements on my game board and adds an event listener with the function flipCards (above)
// function cardSetter () {
//     for (var i = 0; i < allCards.length; i++) {
//         allCards[i].addEventListener('click', flipCards)   
//     }
// }

// declare a function shuffle()
// this function should take an array
// and return that array in a shuffled order (google this, you will find a ton of solves to help you on this)
// declare an atGameStart() function
// this function should take an array of images
// call shuffle() on that array of images
// return this new, shuffled array, and use as your gameboard array of images *****
// 
// setup your code so atGameStart() is called when `new game` button on game board is clicked

let imageStorage = [];

function shuffle (array) {
    let gameArr = [];
    for (var i = 0; i < array.length; i++) {
        gameArr.push(array[Math.floor(Math.random() * 9)])
        // console.log(gameArr);
    }
    return gameArr
}

function flipCard (e) {
   //this function will have an event parameter that will allow for the click function to 
   //target a specific div
   // e will give me access to which card was picked
   e.target.src = imageStorage[0];
  
}

function assignEvents () {
    //assign a click function for each of the divs-indexes within the allCards arr
    // Iterate through the array 
    for(var i = 0; i < allCards.length; i++){
        allCards[i].addEventListener('click', flipCard)
    }
}


function gameStart(e) {
    e.preventDefault();
    imageStorage = shuffle(links);
    assignEvents()
}

startBtn.addEventListener('click', gameStart);



//init start function will clear the board and do the flipCard function and start the game
//game logic: win condition must be established
// I have to disable double click and ensure that pictures stay open if they match, otherwise restore original src ** This is probably the most challenging roadblock for today

//How can I map my ids to the images that are stored/replaced

//HOw to prevent user to flipping more than 2 cards;
// 2 scenarios:
// 1 - match
// 2 - non match

// 1: Base on a match system that forces cards to flip back if not matched
// 2: Counter system through a loop that resets to 0 after 2 turns


