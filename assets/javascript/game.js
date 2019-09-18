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
let attackChar;

//Holds characters that user did not select
let leftovers = [];

//Populated when player chooses an opponent
let oppChar;

let isAttacker = false
let isOpponent = false
isAlive = true

let attackPoints = 0
//Keep track of turns during combat - used for calcuating player damage

//random number for attack 

//Functions

//This function renders a character card to the page
//Will take in the character and area it is rendered to (update HTML)

let renderCharacter = () => {
  characters.forEach(char=>{
    let cardDiv = document.createElement('div')
    cardDiv.innerHTML = ` 
    <div class="card ${char.name} ">
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
      cardDiv.className = "col sm12 m3 "
let charactersDiv = document.querySelector(".row")
charactersDiv.append(cardDiv)
  })
 
};



//onclick function to trigger opponent/attacker
document.addEventListener('click', ({
  target: e
}) =>{
  if (!isAttacker){
    let attackChar = selectCharacter(characters[e.id])
  } else if (!isOpponent){ 
   let oppChar = selectOpp(characters[e.id])
  }
})


  



//Selects attacker
let selectCharacter=(char)=>{
  // let attacker = char
  isAttacker = true
  attackChar = characters[char.id]
  console.log(`your characters is ${char.name}`)
  document.querySelector(`.${char.name}`).className = "hide"
  let attackerDiv = document.createElement('div')
  attackerDiv.innerHTML = ` 
  <div class="card">
      <div class="card-image">
        <img class = "image" src="${char.imageUrl}">
      </div>
      <div class="card-content">
      <h4 class="card-title">${char.name}</h4>
      </div>
      <div class="card-action">
        <p id = "attackerHp"> HP: ${char.hp} </p>
      </div>
    </div>`
    attackerDiv.className = "col sm12 m3"
let attacker = document.querySelector(".attacker")
attacker.append(attackerDiv)
//Set other card as display none
renderMessage()

}


//This function will render the available-to-attack enemeies. This should be run once after a character has been selected. 
let selectOpp = (char) =>{
  if (isAttacker){
  isOpponent = true
  oppChar = characters[char.id]
  document.querySelector(`.${char.name}`).className = "hide"
  let oppDiv = document.createElement('div')
  oppDiv.innerHTML = ` 
  <div class="card">
      <div class="card-image">
        <img class = "image" src="${char.imageUrl}">
      </div>
      <div class="card-content">
      <h4 class="card-title">${char.name}</h4>
      </div>
      <div class="card-action">
        <p id = "oppHp"> HP: ${char.hp} </p>
      </div>
    </div>`
    oppDiv.className = "col sm12 m3"
let opponent= document.querySelector(".opponent")
opponent.append(oppDiv)
let battleBtn = document.createElement('button')
battleBtn.className = "waves-effect waves-light btn-small"
battleBtn.innerText = "BATTLE"
document.querySelector('.button').append(battleBtn)
renderMessage()
}
}

//Function to handle rendering game messages
let renderMessage = () =>{
  if(!isAttacker && !isOpponent){
    document.querySelector('#message').innerHTML = "Please choose your character to start the battle!"
  } else if(isAttacker && !isOpponent){
    document.querySelector('#message').innerHTML = "Please choose your attacker!!!"
  } else if (isAttacker && isOpponent){
    document.querySelector('#message').innerHTML = "Let the battle begin!!! "
  }
}


document.querySelector('.button').addEventListener("click", e=>{
console.log("butttttttttttons")
//run attack function
attack(attackChar, oppChar)
})

let attack = (attacker, opponent)=>{
generateNum()
let attackerHp = attacker.hp -= attackPoints
generateNum()
let opponentHp = opponent.hp -= attackPoints
console.log(`here are the numbers you are passing in: ${attackerHp} & ${opponentHp}`)
checkHealth(attackerHp, opponentHp)
}

//Check health
let checkHealth=(attackerHp,opponentHp)=>{
  console.log(`The health of attacker: ${attackerHp} Health of opp: ${opponentHp} `)
if (attackerHp>0 && opponentHp>0){
  console.log("keep battling")
  document.querySelector('#oppHp').textContent = "HP: " + opponentHp
  document.querySelector('#attackerHp').textContent = "HP: " + attackerHp
  document.querySelector('.gameMsg').textContent = "Keep going!!!"
}
else if(attackerHp<0){
  console.log("you lost")
  document.querySelector('#oppHp').textContent = "HP: " + opponentHp
  document.querySelector('#attackerHp').textContent = "HP: 0"
  document.querySelector('.gameMsg').textContent = "YOU LOST!!"
  resetGame()

} 
else if(opponentHp<0){
  console.log("you won")
  document.querySelector('#oppHp').textContent = "HP: 0" 
  document.querySelector('#attackerHp').textContent = "HP: " + attackerHp
  document.querySelector('.gameMsg').textContent = "Congrats you won!!"
  resetGame()
}
}

//Function which handles restarting the game ater victory or defeat
let resetGame = () =>{
  //When restart button is clicked, reload the page
document.querySelector('.attacker').innerHtml = ""
document.querySelector('.opponent').innerHTML = ""
document.querySelector('.row').innerHTML = ""
document.querySelector('.battleDiv').innerHTML = ""
document.querySelector('.gameMsg').textContent = ""
isAttacker = false
isOpponent = false
renderCharacter()
}

// let nextOpp = ()
//Build div that will display the victory/defeat message
// let 

//render the restart button and victory/defeat message to the page

//function to clear the game message section

generateNum = ()=>{
  attackPoints =  Math.floor(Math.random() * 30) + 20 
  return attackPoints
}

let startGame = ()=>{
  renderMessage()
  renderCharacter()
}

startGame()