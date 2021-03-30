import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipes.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.scss']
})
export class RecipesListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe('A test recipe', 'cool description', 'https://vegan.rocks/blog/vegan-cheese/feature_hud861e682c4abc7b13b5a4e3849d7046f_973666_1600x900_fill_q75_box_smart1.jpg'),
    new Recipe('Another test recipe', 'great description', 'https://upload.wikimedia.org/wikipedia/commons/e/e3/Amandine_cake.jpg')
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }

}
