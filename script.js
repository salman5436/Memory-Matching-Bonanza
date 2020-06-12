//-----------------------------> Declaring DOM Refs and Consts <----------------
//array story links

//array of rapper images that will be pushed within a function
let links = 
['https://placekitten.com/278/181',
'https://placekitten.com/278/181',
'https://www.placecage.com/278/181',
'https://www.placecage.com/278/181',
'https://www.placecage.com/c/278/181',
'https://www.placecage.com/c/278/181',
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
let tracker = []

function shuffle (array) {
    let gameArr = [];
    //while loop, while the game Arr length is not yet 8, choose an index to select from the array 
    // is this an element we have already chosen? If we have, put it back
    // index tracker to see if the index is selected
    // if it not selected, add that index into my tracker
    // Since my array does not have unique values, I need to use the tracker index
    while (gameArr.length < 8) {
        let index = Math.floor(Math.random() * array.length);
        if (!tracker.includes(index)) {
            gameArr.push(array[index])
            tracker.push(index)
        }
        // console.log(gameArr);
        // tracker that asks whether that index has been selected already 
    }
    return gameArr;
}

let imagesCount = 0; 

function flipCard (e) {
   //this function will have an event parameter that will allow for the click function to 
   //target a specific div
   // e will give me access to which card was picked    
    // create the tracker that increments the index each time 

    e.target.src = imageStorage[imagesCount];
    imagesCount++;


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

//<------------------- ARCHIVED FUNCTIONS <-----------------------------------------

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