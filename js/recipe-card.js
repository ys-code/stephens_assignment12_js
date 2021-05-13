let Recipe = function (title,servings,ingredients) {
    this.title=title;
    this.servings=servings;
    this.ingredients=ingredients;
    this.printRecipe= function() {
        window.console.log(title);
        window.console.log(`Servings:${servings}`);
        window.console.log("Ingredients:")
        for (let item of ingredients){
            window.console.log(`- ${item}`);
        }
    }
};
let myRecipe = new Recipe(
    'Guacamole',
    4,
    ["3Avocados","1Lime","1Teaspoon Salt","1/2 Cup Onion","3Tablespoons Cilantro","2 Diced Tomatoes","1 Teaspoon Garlic","1 Pinch Ground Pepper"]
    );
myRecipe.printRecipe();