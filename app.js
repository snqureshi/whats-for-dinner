//Define Domain, API-id, API-key, base URL
//Define an input value to be the input from the search input
const domain = `https://api.edamam.com/search?`
let inputValue = document.querySelector('.search-input').value
const appId = 'a831c57c'
const appKey = 'a221d866f1d02a09e0fd4777785d31c4'
const url = `'https://cors-anywhere.herokuapp.com/${domain}q=${inputValue}&appid=${appId}&appkey=${appKey}`

//Define async function getRecipe
async function getRecipe() {
  console.log(inputValue)

  //Define a variable to get data from API
  let recipeData = await axios.get('url')
  console.log(recipeData)
  //try/catch method for getting API data
  // wrap everything in the forEach function until after catch

  //create section for appending search results 

  //create container for each seperate result & append it to the search results section

  //select the name of each result and append it to container

  //select the image of each result and append it to container

  //select the calories of each result and append it to container

  //select the ingredient list of each result and append it to container

  //select recipe link of each result and allow for link to open in a new tab

  //catch error message
}
//select search button, add event listener for click, invoke getRecipe
let search = document.querySelector('.submit')
search.addEventListener('click',getRecipe)


//create function to remove last child of container, invoke it before forEach function



//PMVPS: 
//Add second API for drop down menu and let them choose dietary preferences
//Add footer with recommendations from same diet labels
//Add a star button to select favorites