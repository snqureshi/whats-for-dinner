//Define Domain, API-id, API-key, base URL

const domain = `https://api.edamam.com/search?`
const appId = 'a831c57c'
const appKey = 'a221d866f1d02a09e0fd4777785d31c4'

//Define async function getRecipe
async function getRecipe() {
  removeRecipe()
  //Define an input value to be the input from the search input
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
    image.classList.add('recipe-image')
    image.src = recipe.recipe.image
    individualRecipes.append(image)
    
    //create section for appending search result text
    let textContainer = document.createElement('div')
    textContainer.classList.add('.text-container')
    individualRecipes.append(textContainer)
      
    //select the name of each result and append it to container
    let label = document.createElement('h2')
    // console.log(recipe.recipe.label)
    label.textContent = recipe.recipe.label
    // console.log(label)
    textContainer.append(label)

    //select the calories of each result and append it to container
    let calories = document.createElement('h4')
    calories.textContent = `Total Calories = ${recipe.recipe.calories}`
    textContainer.append(calories)
      
    //select the ingredient list of each result and append it to container
    let ingredients = document.createElement('p')
    ingredients.textContent = `You'll need ${recipe.recipe.ingredientLines}`
    textContainer.append(ingredients)

    //select recipe link of each result and allow for link to open in a new tab
    let recipeLink = document.createElement('a')
    recipeLink.textContent = `Link to Full Instructions`
    recipeLink.href = `${recipe.recipe.url}`
    recipeLink.setAttribute("target","_blank")
      textContainer.append(recipeLink)
      
    //Add footer with recommendations from same diet labels
    // let moreRecipes = document.createElement('h3')
    // moreRecipes.classList.add('footer-recipes')
    // moreRecipes.textContent = recipe.recipe.dietLabels
    // console.log(moreRecipes)
    // footer.append(moreRecipes)
      
  });
    } catch (error) {
    console.log('Ooops! There was an error, try again later.')
  }
  //catch error message
}

//select search button, add event listener for click, invoke getRecipe
let search = document.querySelector('.submit')
search.addEventListener('click', getRecipe)

//create function to remove last child of container, invoke it before forEach function
function removeRecipe() {
  const removeDiv = document.querySelector('.result-container')
  while (removeDiv.lastChild) {
    removeDiv.removeChild(removeDiv.lastChild)
  }
}

//PMVPS: 
//Add second API for drop down menu and let them choose dietary preferences
//Add a star button to select favorites