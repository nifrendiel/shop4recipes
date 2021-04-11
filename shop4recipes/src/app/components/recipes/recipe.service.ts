import { Injectable} from '@angular/core';

import { Ingredient } from '../sharedComponents/ingredients.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

import { Recipe } from './recipe.model';

@Injectable()
export class RecipeService {

    private recipes: Recipe[] = [
        new Recipe(
            'Vegan meal', 
            'A great vegan meal', 
            'https://vegan.rocks/blog/vegan-cheese/feature_hud861e682c4abc7b13b5a4e3849d7046f_973666_1600x900_fill_q75_box_smart1.jpg',
            [
                new Ingredient('Apple', 2),
                new Ingredient('Crackers', 10)
            ]
        ),
        new Recipe(
            'Chocolate moelleux', 
            'The best chocolate cake!', 
            'https://upload.wikimedia.org/wikipedia/commons/e/e3/Amandine_cake.jpg',
            [
                new Ingredient('Chocolate', 5),
                new Ingredient('Eggs', 2),
                new Ingredient('Flour', 1),
                new Ingredient('Milk', 1)
            ]
            )
      ];

      constructor(private slService: ShoppingListService){}

      getRecipes() {
          // slice() => returns a copy of the original so you never access the original recipe
          return this.recipes.slice();
      }

      getRecipeById(index: number) {
          return this.recipes[index];
      }

      addIngredientsToSL(ingrendients: Ingredient[]) {
          this.slService.addIngredientsFromRL(ingrendients);
      }
}