//---------------------> Declaring DOM Refs and Consts <--------------------------
//array story links

//array of rapper images that will be pushed within a function
let links = 
['https://placekitten.com/278/181',
'https://picsum.photos/id/237/278/181',
'https://picsum.photos/278/181',
'https://www.placecage.com/278/181']


//this var represents an array of the elements in my HTML with the class card, meaning the img divs on my game board
let allCards = document.getElementsByClassName('card')


const playerChoices = {
    points: 0,
    choice: null,
    cardsClicked = []
}


// -----------------------> Game Logic Function <-----------------------




// // This function is a callBack Function that is called when adding the event listener in the loop for the AllCards array
// function flipCards (e) {
//     console.log(e);
//     //card is the creation of a new img element where links[url] will go
//     let card = document.createElement('img');
        
//     // Using this var, 
//     let randomImg = links[Math.floor(Math.random() * 5)]
//     e.target.src = randomImg;
// }

// //This loop iterates through the div elements on my game board and adds an event listener with the function flipCards (above)
// function randomizeCards (){
//     for (var i = 0; i < allCards.length; i++) {
//         allCards[i].addEventListener('click', flipCards)
//     }
// }

function flipCards (e) {
    console.log(e);
    //card is the creation of a new img element where links[url] will go
    let card = document.createElement('img');
        
    var j = links[Math.floor(Math.random() * (i + 1))];
        var temp = array[i];
    e.target.src = array[j];
}

function randomizeCards() {
    for (var i = allCards.length - 1; i > 0; i--) {
        allCards[i].addEventListener('click', flipCards)
        
    }
}

// Check for a match based on url
// function checkMatch () {
//    //So, the function should match one card's flipped img with another card's flipped img, if not it will turn the card back upside down
//     if (e.target)
// }


//init start function will clear the board and do the flipCard function and start the game
function init () {
    randomizeCards();
    playerChoices.points = 0;
    playerChoices.choice = null;
    playerChoices.cardsClicked = [];
}

//game logic: win condition must be established
// I have to disable double click and ensure that pictures stay open if they match, otherwise restore original src ** This is probably the most challenging roadblock for today

