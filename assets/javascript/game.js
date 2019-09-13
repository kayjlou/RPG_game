//Create an object that holds characters
let characters = [{
    name: "Pikachu",
    hp: 150,
    attack: 15,
    imageUrl: "assets/images/pikachu.jpeg",
    enemyAttackBack: 15,
    info: "I am Pika, I love to zap things"

  },{
    name: "Charmander",
    hp: 150,
    attack: 15,
    imageUrl: "assets/images/charmander.png",
    enemyAttackBack: 15,
    info: "I am charmander, I am weak against water"
  
  },{
  name: "Evee",
    hp: 150,
    attack: 15,
    imageUrl: "assets/images/evee.png",
    enemyAttackBack: 15,
    info: "I am Evee, I am weak against water"
  },{
    name: "Bulbasaur",
    hp: 150,
    attack: 15,
    imageUrl: "assets/images/bulbasaur.jpeg",
    enemyAttackBack: 15,
    info: "I am charmander, I am weak against water"
  
  }
]
//Populates when user selects a character
let attacker;

//Holds characters that user did not select
let leftovers = [];

//Populated when player chooses an opponent
let opponent;

//Keep track of turns during combat - used for calcuating player damage

//Tracks number of defeated opponents

//Functions

//This function renders a character card to the page
//Will take in the character and area it is rendered to (update HTML)

let renderCharacter = () => {
  characters.forEach(char=>{
    //create card
    console.log(char)
    let cardDiv = document.createElement('div')
    cardDiv.innerHTML = ` 
    
    <div class="card">
        <div class="card-image">
          <img class = "image" src="${char.imageUrl}">
        </div>
        <div class="card-content">
        <h4 class="card-title">${char.name}</h4>
          <p>${char.info}</p>
        </div>
        <div class="card-action">
          <p> Attack : ${char.attack} </p>
          <p> HP: ${char.attack} </p>
          <button> Choose me! </button>
        </div>
      </div>`
      cardDiv.className = "col sm12 m3"
let charactersDiv = document.querySelector(".row")
charactersDiv.append(cardDiv)
  })
 
};



//Run game
renderCharacter();

//This function will update the slected player or the current defender - if none it will also place the character based on the render area chosen
// 
//   //empty area first so we can re-render new object
// 

//This function will render the available-to-attack enemeies. This should be run once after a character has been selected. 
let renderEnemies = (oppArray) =>{
  //for loop
  //render
}

//Function to handle rendering game messages
let renderMessage = () =>{

  //builds message and appends it to the page
}

//Function which handles restarting the game ater victory or defeat
let reset = (resultMessage) =>{
  //When restart button is clicked, reload the page

}

//Build div that will display the victory/defeat message
// let 

//render the restart button and victory/defeat message to the page

//function to clear the game message section


