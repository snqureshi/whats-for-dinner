# Project Overview

## What's for Dinner?: Recipe Finder

## Project Description

I hope to create a website in which users can input the ingredients they already have at home/or are interested in and find recipes, images and nutritional information based on their search. 

## API and Data Sample

[Edamam Recipes] (https://api.edamam.com/search?q=beef&app_id=a831c57c&app_key=a221d866f1d02a09e0fd4777785d31c4)

``
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
                    }``

## Wireframes

Upload images of your wireframes to an image hosting site or add them to an assets folder in your repo and link them here with a description of each specific wireframe.

### MVP/PostMVP

The functionality will then be divided into two separate lists: MPV and PostMVP.  Carefully decided what is placed into your MVP as the client will expect this functionality to be implemented upon project completion.  

#### MVP 
*These are examples only. Replace with your own MVP features.*

- Find and use external api 
- Render data on page 
- Allow user to choose favorites 

#### PostMVP  
*These are examples only. Replace with your own Post-MVP features.*

- Add second API
- Use local storage to save user favorites

## Project Schedule

This schedule will be used to keep track of your progress throughout the week and align with our expectations.  

You are **responsible** for scheduling time with your squad to seek approval for each deliverable by the end of the corresponding day, excluding `Saturday` and `Sunday`.

|  Day | Deliverable | Status
|---|---| ---|
|Jan 25-26| Prompt / Wireframes / Priority Matrix / Timeframes | Incomplete
|Jan 26| Project Approval | Incomplete
|Jan 27| Core Application Structure (HTML, CSS, etc.) | Incomplete
|Jan 28| Initial Clickable Model  | Incomplete
|Jan 29| MVP | Incomplete
|Feb 1| Presentations/Project Submission | Incomplete

## Priority Matrix

Include a full list of features that have been prioritized based on the `Time and Importance` Matrix.  Link this image in a similar manner to your wireframes

## Timeframes

Tell us how long you anticipate spending on each area of development. Be sure to consider how many hours a day you plan to be coding and how many days you have available until presentation day.

Time frames are also key in the development cycle.  You have limited time to code all phases of the game.  Your estimates can then be used to evalute game possibilities based on time needed and the actual time you have before game must be submitted. It's always best to pad the time by a few hours so that you account for the unknown so add and additional hour or two to each component to play it safe. Throughout your project, keep track of your Time Invested and Actual Time and update your README regularly.

| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Adding Form | H | 3hrs| 3.5hrs | 3.5hrs |
| Working with API | H | 3hrs| 2.5hrs | 2.5hrs |
| Total | H | 6hrs| 5hrs | 5hrs |

## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of and a brief description.  

```
function reverse(string) {
	// here is the code to reverse a string of text
}
```

## Change Log
 Use this section to document what changes were made and the reasoning behind those changes.  
