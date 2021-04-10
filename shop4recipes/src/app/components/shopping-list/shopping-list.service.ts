import { EventEmitter} from '@angular/core';

import { Ingredient } from '../sharedComponents/ingredients.model';

export class ShoppingListService {
    ingredientChanged = new EventEmitter<Ingredient[]>();

    private ingredients: Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('Tomates', 10),
    ];

    getIngredients() {
        return this.ingredients.slice();
    }

    addIngredient(ingredient: Ingredient) {
        this.ingredients.push(ingredient);
        // updates the copy when a new ingredient is added
        this.ingredientChanged.emit(this.ingredients.slice());
    }

    addIngredientsFromRL(ingredients: Ingredient[]) {
        this.ingredients.push(...ingredients);
        this.ingredientChanged.emit(this.ingredients.slice());
    }
}