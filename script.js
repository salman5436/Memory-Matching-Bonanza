//-----------------------------> Declaring DOM Refs and Consts <----------------

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


let allCards = document.getElementsByClassName('card');
let startBtn = document.getElementById('start-button');

var modal = document.getElementById("myModal");

var submitBtn = document.getElementById("btn");


//--------------------> Game Logic Functions <------------------------

let imageStorage = [];
let tracker = []

function shuffle (array) {
    let gameArr = [];
    
    while (gameArr.length < 8) {
        let index = Math.floor(Math.random() * array.length);
        if (!tracker.includes(index)) {
            gameArr.push(array[index])
            tracker.push(index)
        }
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
}

function matchCard () {
    if (flippedCardsArr.length === 2) { 
        function delayFlip() {
            if(flippedCardsArr[0] === flippedCardsArr[1]) {
                    player.points++
                    modalAdd()
                pointsDisplay();
            } else {
                let restoreImages = document.getElementsByClassName('flippedClass');
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
    }
}

function flipCard (e) {
    e.target.src = imageStorage[parseInt(e.target.id)];

    flippedCardsArr.push(e.target.src);
    this.classList.add("flippedClass");

    matchCard()
}

function assignEvents () {
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