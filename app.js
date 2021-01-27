//Define Domain, API-id, API-key, base URL
//Define an input value to be the input from the search input
const domain = `https://api.edamam.com/search?`
const appId = 'a831c57c'
const appKey = 'a221d866f1d02a09e0fd4777785d31c4'

//Define async function getRecipe
async function getRecipe() {
  removeRecipe()
  let inputValue = document.querySelector('.search-input').value
  // console.log(inputValue)
  const url = `${domain}q=${inputValue}&app_id=${appId}&app_key=${appKey}`

  //Define a variable to get data from API
  let recipeData = await axios.get(url)
  console.log(recipeData.data.hits)

  //try/catch method for getting API data
  try {
    //create section for appending search results 
      let searchContainer = document.querySelector('.result-container')
      console.log(searchContainer)

  // wrap everything in the forEach function until after catch
    recipeData.data.hits.forEach(recipe => {
      
    //create container for each seperate result & append it to the search results section
      let individualRecipes = document.createElement('div')
      individualRecipes.classList.add('ind-recipe')
      searchContainer.append(individualRecipes)

    //select the image of each result and append it to container
    let image = document.createElement('img')
    image.src = recipe.recipe.image
    individualRecipes.append(image)
      
    //select the name of each result and append it to container
    let label = document.createElement('h2')
    // console.log(recipe.recipe.label)
    label.textContent = recipe.recipe.label
    // console.log(label)
    individualRecipes.append(label)

    //select the calories of each result and append it to container
    let calories = document.createElement('h4')
      calories.textContent = `Total Calories = ${recipe.recipe.calories}`
    individualRecipes.append(calories)
      
    //select the ingredient list of each result and append it to container
    let ingredients = document.createElement('p')
    ingredients.textContent = `You'll need ${recipe.recipe.ingredientLines}`
  individualRecipes.append(ingredients)

    //select recipe link of each result and allow for link to open in a new tab
      let recipeLink = document.createElement('a')
      recipeLink.textContent = `Link to Instructions`
      recipeLink.href = `${recipe.recipe.url}`
      recipeLink.setAttribute("target","_blank")
      individualRecipes.append(recipeLink)
      
  });
    } catch (error) {
    console.log('Ooops! There was an error, try again later.')
  }
  //catch error message
}
//select search button, add event listener for click, invoke getRecipe
let search = document.querySelector('.submit')
search.addEventListener('click',getRecipe)

//create function to remove last child of container, invoke it before forEach function
function removeRecipe() {
  const removeDiv = document.querySelector('.result-container')
  while (removeDiv.lastChild) {
    removeDiv.removeChild(removeDiv.lastChild)
  }
}

//PMVPS: 
//Add second API for drop down menu and let them choose dietary preferences
//Add footer with recommendations from same diet labels
//Add a star button to select favorites