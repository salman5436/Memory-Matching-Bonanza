//-----------------------------> Declaring DOM Refs and Consts <----------------
//array story links

//array of rapper images that will be pushed within a function
let links = 
['Images/Drake.jpg',
'Images/Drake.jpg',
'Images/Kanye.jpg',
'Images/Kanye.jpg',
'Images/Tupac.png',
'Images/Tupac.png',
'Images/Tyler.jpg',
'Images/Tyler.jpg']

const player = {
    points: 0,
    pick: null,
    choices: []
}


//this var represents an array of the elements in my HTML with the class card, meaning the img divs on my game board
let allCards = document.getElementsByClassName('card');
let startBtn = document.getElementById('start-button');
let topLeftCard = document.getElementById('00');

// Get the modal
var modal = document.getElementById("myModal");

// Form submit in the modal
var submitBtn = document.getElementById("btn");


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
    //while loop, while the game Arr length is not yet 8, choose an index to select from the links array 
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

let flippedCardsArr = [];
let playerMatch = true;


function pointsDisplay() {
   let pointsPlacement = player.points;
   document.getElementById('points').innerHTML = pointsPlacement;
}

function modalAdd (e) {
    modal.style.display = "block";
    var span = document.getElementsByClassName("close")[0];
    span.onclick = function() {
        modal.style.display = "none";
    }
    window.onclick = function(event) {
        if (event.target == modal) {
          modal.style.display = "none";
        }
    }
    // submitBtn.onclick = function(value) {
    //     value = document.getElementById('input-value').innerHTML
    //     if (e.target.src.includes(value)) {
    //         player.points++
    //     }
    // }

}

function flipCard (e) {
   //this function will have an event parameter that will allow for the click function to 
   //target a specific div
   // e will give me access to which card was picked    
    // create the tracker that increments the index each time 
    // SET Timeout function 

    console.log(e.target.src);
     // e.target.src = imageStorage[parseInt(e.target.id)];

     e.target.src = imageStorage[parseInt(e.target.id)];
     //attempting to add flip functionality but its not working
     this.classList.toggle("flip")
     flippedCardsArr.push(e.target.src)
     this.classList.add("flippedClass")

     if (flippedCardsArr.length === 2) { 
        function delayFlip() {
            if(flippedCardsArr[0] === flippedCardsArr[1]) {
                //BUG: This increments every time it checks instead of once per match..
                    player.points++
                    modalAdd()
                pointsDisplay();
                console.log(player.points);
            } else {
                let restoreImages = document.getElementsByClassName('flippedClass');
                console.log(restoreImages);
                Array.from(restoreImages).forEach(element => {
                    element.children[0].src = "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRaZPqedlhttgZUQTvRJuIz1lFhs1d8uetmL1S8A6w5F9ToSt_h&usqp=CAU"
                })
            }
            let restoreImages = document.getElementsByClassName('flippedClass');
            Array.from(restoreImages).forEach(element => {
                element.classList.remove('flippedClass')
            })
            flippedCardsArr = [];
        }
        setTimeout(delayFlip, 2500);
        //Still have to change the placement of the delayFlip function
        //So that the first flip doesn't turn back and we can wait till the second flip
        // BUT this almost makes the whole game on hard mode, forcing you to really pay attention
    }
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
    assignEvents();

}

startBtn.addEventListener('click', gameStart);