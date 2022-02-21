//PART I D.O.M. Manipulation

// Select the search button pokeball by its HTML Id Attribute
var searchBtn = document.getElementById("search-btn"); // search button pokeball

// Select the search field input by its HTML Id Attribute
var inputField = document.getElementById("name-input"); // search field input

// Select the pokemon name screen by it's HTML Id Attribute
var nameScreen = document.getElementById('name-screen'); //pokemon name-screen

// Select the pokemon image screen by it's HTML Id Attribute
var imageScreen = document.getElementById('main-screen'); // pokemon image screen

// Select the height and weight screen by it's HTML Id Attribute
var aboutScreen = document.getElementById('about-screen'); // about-text screen

// Select the type screen by it's HTML Id Attribute
var typeScreen = document.getElementById('type-screen'); // pokemon type screen

// Select the pokemon id number screen by it's HTML Id Attribute
var idScreen = document.getElementById('id-screen'); // pokemon id number screen

//PART II Fetching the Pokemon Data from the PokeAPI

//Create a function that uses fetch api to call the poke api and search for a specific pokemon and then add the poke api data to the 
//appropriate HTML elements from PART I

//Let's assign our fucntion to a variable 
var getPokemonData = (pokemon) => {

  //Call the fetch api and attach a callback function that will turn the response into json
  fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    //a callback function to turn our api response into json
    .then((response) => response.json())
    //a callback function to take the data from out newly converted json data and insert it into our appropriate DOM elements
    .then((data) => {
      console.log('data', data);
      //create a format appropriate pokemon id in order to plug into the pokemon.com image url
      var id = ('00' + data.id).slice(-3);
      //change the background image of the image screen element to the appropriate pokemon image
      imageScreen.style.backgroundImage = `url(${data.sprites.front_default})`;
      //change the text of the name screen element to the appropriate pokemon name
      nameScreen.innerHTML = data.name;
      //change the text of the type screen element to the appropriate pokemon type
      typeScreen.innerHTML = data.types[0].type.name;
      //change the text of the id screen element to the appropriate pokemon id
      idScreen.innerHTML = id;
      //change the text of the id screen element to the appropriate pokemon height and weight
      aboutScreen.innerHTML = `Height: ${data.height * 10}cm Weight: ${
        data.weight / 10
      }kg`;
      //clear the input field in order for the user to input another pokemon name or id
      inputField.value = '';
    })
};

//PART III Triggering the Search Functionality

//Create an event listner that attaches to the search button poke ball and activates when a user 'clicks' on it!
//The event listener should call our pokemon data function from PART II

searchBtn.addEventListener('click', () => getPokemonData(inputField.value.trim()));

