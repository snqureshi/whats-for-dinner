//Define Domain, API-id, API-key, base URL
const domain = `https://api.edamam.com/search?`
const appId = 'a831c57c'
const appKey = 'a221d866f1d02a09e0fd4777785d31c4'

//Define async function getRecipe
async function getRecipe() {

  removeRecipe()
  
  //Define an input value to be the input from the search input
  //Define select value from the drop down menu
  let inputValue = document.querySelector('.search-input').value
  let selectValue = document.querySelector('select').value

  const inputUrl = `${domain}q=${inputValue}&app_id=${appId}&app_key=${appKey}`
  const selectUrl = `${domain}q=${selectValue}&app_id=${appId}&app_key=${appKey}&health=${selectValue}`
  //try/catch method for getting API data
  try {

    //Define a variable to get data from API
    let recipeData = ''
    if (inputValue) {
      recipeData = await axios.get(inputUrl)
    //Run error message on page if no response from API
      if (!recipeData.data.hits.length) {
        let resultContainer = document.querySelector('.result-container')
        const errorHandle = document.createElement('h2')
        errorHandle.textContent = 'Sorry! Result not found, please search again.'
        resultContainer.append(errorHandle)
      }
    }
    
    if (inputValue.length === 0) {
      recipeData = await axios.get(selectUrl)
    }
  
    //Invoking footer funtion with getting related suggestions
    if (inputValue) {
      relatedSuggestions(recipeData.data.hits[0].recipe.dietLabels[0], inputValue)
    }
    if (inputValue.length === 0) {
      relatedSuggestions(recipeData.data.hits[0].recipe.dietLabels[0], selectValue)
    }

    //create section for appending search results 
    let searchContainer = document.querySelector('.result-container')

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
      label.textContent = recipe.recipe.label
      textContainer.append(label)

      //select the calories of each result and append it to container
      let caloriesTotal = Math.round(recipe.recipe.calories)
      let calories = document.createElement('h4')
      calories.textContent = `Total Calories = ${caloriesTotal}`
      textContainer.append(calories)

      //select the ingredient list of each result and append it to container
      let ingredients = document.createElement('p')
      ingredients.classList.add('ingredients')
      ingredients.textContent = `You'll need ${recipe.recipe.ingredientLines}`
      textContainer.append(ingredients)

      //select recipe link of each result and allow for link to open in a new tab
      let linkButton = document.createElement('button')
      linkButton.classList.add('link-button')
      textContainer.append(linkButton)

      let recipeLink = document.createElement('a')
      recipeLink.classList.add('recipe-link')
      recipeLink.textContent = `Link to Full Instructions`
      recipeLink.href = `${recipe.recipe.url}`
      recipeLink.setAttribute("target", "_blank")
      linkButton.append(recipeLink)
    })

  } catch (error) {
    console.log('Ooops! There was an error, try again later.')
    }
  }

// //PMVP Display suggestions based on relevant diet labels on the bottom
async function relatedSuggestions(dietVariable, inputValue2) {


  let secondUrl = `${domain}q=${inputValue2}&app_id=${appId}&app_key=${appKey}&from=0&to=50&diet${dietVariable}`
  // //try/catch method for getting API data
  try {
    // //  Define a variable to get data from API
    let recipeData = await axios.get(secondUrl)
    console.log(recipeData.data.hits)

    let btext = document.createElement('div')
    btext.classList.add('footer-text')
    btext.innerHTML = `If you like these recipes,you might also like`
    document.body.append(btext)

    // //  Add a container to contain suggestions
    let bottomContainer = document.createElement('div')
    bottomContainer.classList.add('bcontainer')
    document.body.append(bottomContainer)

//create an array with three random results from original list
    let suggestionsArray = []
    for (let i = 0; i < 3; i++) {
      
      suggestionsArray.push(recipeData.data.hits[Math.floor(Math.random() * recipeData.data.hits.length)])
    }

    // // wrap everything in the forEach function until after catch
    suggestionsArray.forEach(recipe => {
    
      let newLabelText = recipe.recipe.label
      let newDietText = recipe.recipe.dietLabels
      let newImageURL = recipe.recipe.image

      // //   //create container for each seperate result & append it to the bottom container
      let individualSuggestions = document.createElement('div')
      individualSuggestions.classList.add('ind-diet')
      bottomContainer.append(individualSuggestions)

      // //   //select the name of each result and append it to bottom container
      let newLabel = document.createElement('h2')
      newLabel.textContent = newLabelText
      individualSuggestions.append(newLabel)

      //select the diet label name of each result and append it to the bottom container
      let recipeDiet = document.createElement('div')
      recipeDiet.classList.add('footer-recipes')
      recipeDiet.textContent = newDietText
      individualSuggestions.append(recipeDiet)

      // //   //select the image of each result and append it to bottom container
      let newImage = document.createElement('img')
      newImage.classList.add('diet-image')
      newImage.src = newImageURL
      individualSuggestions.append(newImage)
    })

  } catch (error) {
    console.log('Sorry, no more suggestions for now, try again later')
  }
}
//select search button, add event listener for click, invoke getRecipe
let search = document.querySelector('form')
search.addEventListener('submit', (e) => {
  e.preventDefault()
  getRecipe()
})
//create function to remove last child of container, invoke it before forEach function
function removeRecipe() {
  const removeDiv = document.querySelector('.result-container')
  while (removeDiv.lastChild) {
    removeDiv.removeChild(removeDiv.lastChild)
  }
}
