function renderSquirtle(){
    //This function's job is to change the particular element to the image of the pokemon.

    //The first thing you need to do in order to change that pokeball's "state" from closed to open is you need to target it with the DOM. 

    //You need to target the image tag you want to change, and refer to its position in the DOM. Change the source to be a different image. 
    document.getElementById("squirtle").src = "https://studio.cults3d.com/DePEvZk4Aj3OrFEAjTb6qfurv18=/516x516/https://files.cults3d.com/uploaders/17709429/illustration-file/ad65b362-37a4-466f-9adf-43f96f007f84/png-clipart-pikachu-squirtle-pokemon-poke-ball-bulbasaur-pikachu-mammal-vertebrate.png";
}

    
function renderCharmander(){
    //This function's job is to change the particular element to the image of the pokemon
    document.getElementById("charmander").src = "https://www.thefactsite.com/wp-content/uploads/2020/09/charmander-facts.jpg";
}

   
function renderBulbasaur(){
     //This function's job is to change the particular element to the image of the pokemon.
     document.getElementById("bulbasaur").src = "https://static.pokemonpets.com/images/monsters-images-300-300/1-Bulbasaur.webp";
}

var squirtlePic = "https://studio.cults3d.com/DePEvZk4Aj3OrFEAjTb6qfurv18=/516x516/https://files.cults3d.com/uploaders/17709429/illustration-file/ad65b362-37a4-466f-9adf-43f96f007f84/png-clipart-pikachu-squirtle-pokemon-poke-ball-bulbasaur-pikachu-mammal-vertebrate.png";

var charmanderPic = "https://www.thefactsite.com/wp-content/uploads/2020/09/charmander-facts.jpg";

var bulbasaurPic = "https://static.pokemonpets.com/images/monsters-images-300-300/1-Bulbasaur.webp";

//I solved this the first time using ID's. I'm attempting to solve this using Classes. 

//The first step is to recognize that you STILL are looking for a reference to those pokeball images. The first time you referred to their ID's. This time, I'll refer to their class. 

//Compare the value of the source to the image and if they are equal, then render 

//You get back an array, and can perform all kinds of array properties on them. 
function renderSquirtle(pic){
    document.getElementsByClassName("pokeimg")[0].src = squirtlePic;
}

    
function renderCharmander(){
    document.getElementsByClassName("pokeimg")[1].src = charmanderPic;
}

   
function renderBulbasaur(){
    document.getElementsByClassName("pokeimg")[2].src = bulbasaurPic;
}

var squirtlePic = "https://studio.cults3d.com/DePEvZk4Aj3OrFEAjTb6qfurv18=/516x516/https://files.cults3d.com/uploaders/17709429/illustration-file/ad65b362-37a4-466f-9adf-43f96f007f84/png-clipart-pikachu-squirtle-pokemon-poke-ball-bulbasaur-pikachu-mammal-vertebrate.png";

var charmanderPic = "https://www.thefactsite.com/wp-content/uploads/2020/09/charmander-facts.jpg";

var bulbasaurPic = "https://static.pokemonpets.com/images/monsters-images-300-300/1-Bulbasaur.webp";

//We are going to practice the DOM with Callbacks. 

document.getElementById("squirtle").addEventListener("click", renderSquirtle)
document.getElementById("charmander").addEventListener("click", renderCharmander)
document.getElementById("bulbasaur").addEventListener("click", renderBulbasaur)

function renderSquirtle(){
    document.getElementsByClassName("pokeimg")[0].src = squirtlePic;
}

    
function renderCharmander(){
    document.getElementsByClassName("pokeimg")[1].src = charmanderPic;
}

   
function renderBulbasaur(){
    document.getElementsByClassName("pokeimg")[2].src = bulbasaurPic;
}

//We are going to take some time to discuss call back functions in relation to event listeners and the document object model. 

var squirtlePic = "https://studio.cults3d.com/DePEvZk4Aj3OrFEAjTb6qfurv18=/516x516/https://files.cults3d.com/uploaders/17709429/illustration-file/ad65b362-37a4-466f-9adf-43f96f007f84/png-clipart-pikachu-squirtle-pokemon-poke-ball-bulbasaur-pikachu-mammal-vertebrate.png";

var charmanderPic = "https://www.thefactsite.com/wp-content/uploads/2020/09/charmander-facts.jpg";

var bulbasaurPic = "https://static.pokemonpets.com/images/monsters-images-300-300/1-Bulbasaur.webp";

//We are going to practice the DOM with Callbacks. 

//This is by referring to the components by ID:
// document.getElementById("squirtle").addEventListener("click", renderSquirtle);
// document.getElementById("charmander").addEventListener("click", renderCharmander);
// document.getElementById("bulbasaur").addEventListener("click", renderBulbasaur);

//This is by referring to the components by Class: 

document.getElementsByClassName("pokeimg")[0].addEventListener("click", () => {
    document.getElementsByClassName("pokeimg")[0].src = squirtlePic;
});


document.getElementsByClassName("pokeimg")[1].addEventListener("click", () => {
    document.getElementsByClassName("pokeimg")[1].src = charmanderPic;
});

document.getElementsByClassName("pokeimg")[2].addEventListener("click", () => {
    document.getElementsByClassName("pokeimg")[2].src = bulbasaurPic;
});


//We are going to take some time to discuss call back functions in relation to event listeners and the document object model.

//Single out the first pokeball which is Squirtle

document.querySelector("#squirtle").addEventListener("click", () => {
    document.querySelector("#squirtle").src = squirtlePic;
});

document.querySelector("#bulbasaur").addEventListener("click", () => {
    document.querySelector("#bulbasaur").src = bulbasaurPic;
});

document.querySelector("#charmander").addEventListener("click", () => {
    document.querySelector("#charmander").src = charmanderPic;
});

