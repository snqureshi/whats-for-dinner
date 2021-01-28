# Project Overview

## What's for Dinner?: Recipe Finder

## Project Description

I hope to create a website in which users can input the ingredients they already have at home/or are interested in and find recipes. The search results will display the name of the dish, an image, the ingredients list and the calorie count based on their search query.

## API and Data Sample

[Edamam Recipes](https://api.edamam.com/search?q=beef&app_id=a831c57c&app_key=a221d866f1d02a09e0fd4777785d31c4)

````
{
    "q": "beef",
    "from": 0,
    "to": 10,
    "more": true,
    "count": 49810,
    "hits": [
        {
            "recipe": {
                "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_8f69b3fd2002ef80c81ac31b8b92fad6",
                "label": "Roast Sirloin Of Beef",
                "image": "https://www.edamam.com/web-img/d37/d376c145f2a59befa7738a2c35caab31.jpg",
                "source": "BBC Good Food",
                "url": "http://www.bbcgoodfood.com/recipes/2558/",
                "shareAs": "http://www.edamam.com/recipe/roast-sirloin-of-beef-8f69b3fd2002ef80c81ac31b8b92fad6/beef",
                "yield": 6.0,
                "dietLabels": [
                    "High-Protein",
                    "Low-Carb"
                ],
                "healthLabels": [
                    "Sugar-Conscious",
                    "Peanut-Free",
                    "Tree-Nut-Free"
                ],
                "cautions": [
                    "Gluten",
                    "Wheat",
                    "Sulfites"
                ],
                "ingredientLines": [
                    "400.0g can beef consommé",
                    "1-1.5kg/2lb 4-3lb 5oz sirloin of beef joint",
                    "2.0 tbsp vegetable oil or beef fat",
                    "1 glass red wine"
                ],
                "ingredients": [
                    {
                        "text": "400.0g can beef consommé",
                        "weight": 400.0,
                        "image": "https://www.edamam.com/food-img/6a5/6a5f7cf073a7e70af946bfb4d558a914.jpg"
                    },
                    {
                        "text": "1-1.5kg/2lb 4-3lb 5oz sirloin of beef joint",
                        "weight": 1250.0,
                        "image": "https://www.edamam.com/food-img/bab/bab88ab3ea40d34e4c8ae35d6b30344a.jpg"
                    },
                    {
                        "text": "2.0 tbsp vegetable oil or beef fat",
                        "weight": 28.0,
                        "image": "https://www.edamam.com/food-img/6e5/6e51a63a6300a8ea1b4c4cc68dfaba33.jpg"
                    },
                    {
                        "text": "1 glass red wine",
                        "weight": 235.2,
                        "image": "https://www.edamam.com/food-img/82b/82b8d0db2d5c38fc7498a657c0afc4ee.JPG"
                    }
                ],
                "calories": 2120.44,
                "totalWeight": 1913.2,
                "totalTime": 0.0,
                "totalNutrients": {
                    "ENERC_KCAL": {
                        "label": "Energy",
                        "quantity": 2120.44,
                        "unit": "kcal"
                    }```
````

## Wireframes

[Recipe Finder Wireframe](https://whimsical.com/ga-sei-recipe-finder-wireframe-D48Dw7XvQhnPSyLWZpgzte)

#### MVP

- Allow for users to search recipes using keywords and the search button
- Display up to 10 search results with name of recipe, image, calories, and ingredients list
- Allow users to open up recipe instructions in a new tab
- Clear search results when there's another search & render new results

#### PostMVP

- Allow users to hover over the recipe link and preview instructions.
- Recommend other recipes based on their current search result diet label at the bottom of the page
- Add a second API to allow users to search by dietary preferences/allergy preferences using a drop down menu option.
- Add an animated logo next to the search bar
- Allow users to select favorites with a heart/star button

## Project Schedule

| Day    | Deliverable                                                                                             | Status     |
| ------ | ------------------------------------------------------------------------------------------------------- | ---------- |
| Jan 25 | Project Overview / Wireframes / Priority Matrix / Timeframes                                            | Complete   |
| Jan 26 | Project Approval / Basic Application Structure (HTML, CSS), Pseudocode functionality for JS             | Complete   |
| Jan 27 | Getting results from API using search button, Appending the selected data to webpage in correct format  | Complete   |
| Jan 28 | Clearing search results when there is a new search input, Opening new tab when recipe linked is clicked | Complete   |
| Jan 29 | Add breakpoint to implement responsiveness, PMVP: Add second API for dietary restriction drop down menu | Incomplete |
| Jan 30 | PMVPs: Open a preview page when hovering over recipe link                                               | Incomplete |
| Jan 31 | Add additional CSS: Animated Logo/ Image transitions                                                    | Incomplete |
| Feb 1  | Presentations/Project Submission                                                                        | Incomplete |

## Priority Matrix

[Recipe Finder Priority Matrix](https://app.conceptboard.com/export/46a089f2-0ca7-47c8-ae10-eed47605ad7c/versions/;hi=1;low=390)

## Timeframes

| Component                                                                   | Priority | Estimated Time | Time Invested | Actual Time |
| --------------------------------------------------------------------------- | :------: | :------------: | :-----------: | :---------: |
| Creating Initial HTML/Creating Form Input & Search Button                   |    H     |    1.5 hrs     |     1 hr      |             |
| Adding Basic CSS/Formatting Background Image for header                     |    H     |    1.5 hrs     |    1.5 hrs    |             |
| Writing JS Pseudocode                                                       |    H     |    1.5 hrs     |    0.75 hr    |             |
| Linking API to fetch data when given search input                           |    H     |     2 hrs      |     1 hr      |             |
| Appending selected data from API to DOM                                     |    H     |     4 hrs      |    1.5 hr     |             |
| Opening Recipe Link in new tab                                              |    H     |      1 hr      |    0.25 hr    |             |
| Clearing DOM when new search is run                                         |    H     |     2 hrs      |     1 hrs     |             |
| Adding Flexbox styling to format like wireframe                             |    H     |    3.5 hrs     |     2 hrs     |             |
| Adding Media Query for mobile viewing                                       |    H     |    1.5 hrs     |     2 hrs     |             |
| Adding Second API for dietary restrictions drop-down menu search            |    H     |      4hrs      |               |             |
| Adding extra selector (ie.Diet-label) to render 3 suggestions on the footer |    H     |      3hrs      |     3 hrs     |             |
| Adding Hover Affect over link to preview recipe page                        |    H     |    2.5 hrs     |               |             |
| Creating Animated Logo next to search bar                                   |    H     |     3 hrs      |               |             |
| Adding Star button to favorite recipes                                      |    H     |     2 hrs      |               |             |
| Debugging/Refactoring Code                                                  |    H     |     2 hrs      |               |             |
| Total                                                                       |    H     |     36hrs      |               |             |

## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of and a brief description.

```
function reverse(string) {
	// here is the code to reverse a string of text
}
```

## Change Log

Use this section to document what changes were made and the reasoning behind those changes.
