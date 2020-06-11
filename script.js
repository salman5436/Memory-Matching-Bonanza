//------> Declaring DOM Refs and Consts
//array story links

//array of rapper images that will be pushed within a function
let links = 
['https://placekitten.com/278/181',
'https://placekitten.com/278/181',
'https://placekitten.com/278/181',
'https://placekitten.com/278/181',]


//this var represents an array of the elements in my HTML with the class card, meaning the img divs on my game board
let allCards = document.getElementsByClassName('card')

// This function is a callBack Function that is called when adding the event listener in the loop for the AllCards array
function flipCards (e) {
    console.log(e);
    //card is the creation of a new img element where links[url] will go
    let card = document.createElement('img');
        
    // Using this var, 
    let randomImg = links[Math.floor(Math.random() * 5)]
    e.target.src = randomImg;
}


//This loop iterates through the div elements on my game board and adds an event listener with the function flipCards (above)
for (var i = 0; i < allCards.length; i++) {
    allCards[i].addEventListener('click', flipCards)
}

// Check for a match based on url
function checkMatch () {
    
}

//init start function will clear the board and do the flipCard function and start the game
//game logic: win condition must be established
// I have to disable double click and ensure that pictures stay open if they match, otherwise restore original src ** This is probably the most challenging roadblock for today

