//------> Declaring DOM Refs and Consts
//array story links

//array of rapper images that will be pushed within a function
let links = 
['https://placekitten.com/278/181',
'https://placekitten.com/278/181',
'https://placekitten.com/278/181',
'https://placekitten.com/278/181',]


//isolating
let allCards = document.getElementsByClassName('card')

function flipCards (e) {
    console.log(e);
    let card = document.createElement('img');
        

    let randomImg = links[Math.floor(Math.random() * 5)]
    e.target.src = randomImg;
}



for (var i = 0; i < allCards.length; i++) {
    allCards[i].addEventListener('click', flipCards)
}

