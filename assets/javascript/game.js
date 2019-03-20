//Create an object that holds characters
let characters = {
  Pikachu: {
    name: "Pikachu",
    hp: 150,
    attack: 15,
    imageUrl: "assets/images/pikachu.png",
    enemyAttackBack: 15
  },
  Charmander: {
    name: "Charmander",
    hp: 150,
    attack: 15,
    imageUrl: "assets/images/charmander.png",
    enemyAttackBack: 15
  }
};
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
let renderCharacter = (character, renderArea) => {
  let charDiv = document.createElement(div).className("character")
  charDiv.append()
};


// This function will load all the characters into the character section to be selected
let init = () => {
  for (let key in characters){
    renderCharacter(characters[key], ".characters")
  }
};
//Loop through the characters object and call the function that displays characters

//Run game
init();

//This function will update the slected player or the current defender - if none it will also place the character based on the render area chosen
let updateCharacter = (charObj, areaRender) = {
  //empty area first so we can re-render new object
}

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
let 

//render the restart button and victory/defeat message to the page

//function to clear the game message section

LINE 120
