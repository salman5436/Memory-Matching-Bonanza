//-----------------------------> Declaring DOM Refs and Consts <----------------
//array story links

//array of rapper images that will be pushed within a function
let links = 
['https://placekitten.com/278/181',
'https://picsum.photos/id/237/278/181',
'https://picsum.photos/278/181',
'https://www.placecage.com/278/181']

const player = {
    points: 0,
    pick: null,
    choices: []
}


//this var represents an array of the elements in my HTML with the class card, meaning the img divs on my game board
let allCards = document.getElementsByClassName('card')

let card1 = document.getElementById('00')
let card2 = document.getElementById('01')
let card3 = document.getElementById('02')
let card4 = document.getElementById('03')
let card5 = document.getElementById('04')
let card6 = document.getElementById('05')
let card7 = document.getElementById('06')
let card8 = document.getElementById('07')


//--------------------> Game Logic Functions <------------------------


// This function is a callBack Function that is called when adding the event listener in the loop for the AllCards array
// function flipCards (e) {
//      //changed image versus default image
//      // if div id at img is the same as default image, do THIS
//      if () {

//     }
    
//     console.log(e);
//     //card is the creation of a new img element where links[url] will go
//     let card = document.createElement('img');
        
//     // Using this var, 
//     let randomImg = links[Math.floor(Math.random() * 5)]
//     e.target.src = randomImg;
//     hasFlipped = true;
// }


// //This loop iterates through the div elements on my game board and adds an event listener with the function flipCards (above)
// for (var i = 0; i < allCards.length; i++) {
//     allCards[i].addEventListener('click', flipCards)   
// }


function storeImg () {
    card1.addEventListener('click', function () {
        card1.src = 'https://placekitten.com/278/181'
    })
    card2.addEventListener('click', function () {
        card2.src = 'https://picsum.photos/id/237/278/181'
    })
    card3.addEventListener('click', function () {
        card3.src = 'https://picsum.photos/278/181'
    })
    card4.addEventListener('click', function () {
        card4.src = 'https://placekitten.com/278/181'
    })
    card5.addEventListener('click', function () {
        card5.src = 'https://picsum.photos/id/237/278/181'
    })
    card6.addEventListener('click', function () {
        card6.src = 'https://placekitten.com/278/181'
    })
    card7.addEventListener('click', function () {
        card7.src = 'https://www.placecage.com/278/181'
    })
    card8.addEventListener('click', function () {
        card8.src = 'https://placekitten.com/278/181'
    }) 
}

storeImg();

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
