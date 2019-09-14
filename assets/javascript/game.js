//Create an object that holds characters
let characters = [{
    name: "Pikachu",
    id: 0,
    hp: 150,
    imageUrl: "assets/images/pikachu.jpeg",
    info: "I am Pika, I love to zap things"

  },{
    name: "Charmander",
    id: 1,
    hp: 150,
    imageUrl: "assets/images/charmander.png",
    info: "I am charmander, I am weak against water"
  
  },{
  name: "Evee",
    id: 2,
    hp: 150,
    imageUrl: "assets/images/evee.png",
    info: "I am Evee, I am weak against water"
  },{
    name: "Bulbasaur",
    id: 3,
    hp: 150,
    imageUrl: "assets/images/bulbasaur.jpeg",
    info: "I am charmander, I am weak against water"
  
  }
]
//Populates when user selects a character
// let attacker;

//Holds characters that user did not select
let leftovers = [];

//Populated when player chooses an opponent
// let opponent;

let isAttacker = false
let isOpponent = false
//Keep track of turns during combat - used for calcuating player damage

//Tracks number of defeated opponents

//Functions

//This function renders a character card to the page
//Will take in the character and area it is rendered to (update HTML)

let renderCharacter = () => {
  characters.forEach(char=>{
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
          <p> HP: ${char.hp} </p>
          <button id = ${char.id}> Choose me! </button>
        </div>
      </div>`
      cardDiv.className = "col sm12 m3"
let charactersDiv = document.querySelector(".row")
charactersDiv.append(cardDiv)
  })
 
};

renderCharacter()

//onclick function to trigger opponent/attacker
document.addEventListener('click', ({
  target: e
}) =>{
  if (!isAttacker){
    console.log("running select attacker")
    selectCharacter(characters[e.id])
  } else if (!isOpponent){ 
    console.log("running select opponent")
    selectOpp(characters[e.id])
  }
})


  



//Run game
let selectCharacter=(char)=>{
  // let attacker = char
  isAttacker = true
  console.log(`your characters is ${char.name}`)
  let attackerDiv = document.createElement('div')
  attackerDiv.innerHTML = ` 
  <div class="card">
      <div class="card-image">
        <img class = "image" src="${char.imageUrl}">
      </div>
      <div class="card-content">
      <h4 class="card-title">${char.name}</h4>
        <p>${char.info}</p>
      </div>
      <div class="card-action">
        <p> HP: ${char.hp} </p>
        <button id = ${char.id}> Choose me! </button>
      </div>
    </div>`
    attackerDiv.className = "col sm12 m3"
let attacker = document.querySelector(".attacker")
attacker.append(attackerDiv)
//Set other card as display none

}


//This function will render the available-to-attack enemeies. This should be run once after a character has been selected. 
let selectOpp = (char) =>{
  if (isAttacker){
  isOpponent = true
  let oppDiv = document.createElement('div')
  oppDiv.innerHTML = ` 
  <div class="card">
      <div class="card-image">
        <img class = "image" src="${char.imageUrl}">
      </div>
      <div class="card-content">
      <h4 class="card-title">${char.name}</h4>
        <p>${char.info}</p>
      </div>
      <div class="card-action">
        <p> HP: ${char.hp} </p>
        <button id = ${char.id}> Choose me! </button>
      </div>
    </div>`
    oppDiv.className = "col sm12 m3"
let opponent= document.querySelector(".opponent")
opponent.append(oppDiv)
document.querySelecter('.')
}
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

