import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipes.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.scss']
})
export class RecipesListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A test recipe', 'description', 'https://vegan.rocks/blog/vegan-cheese/feature_hud861e682c4abc7b13b5a4e3849d7046f_973666_1600x900_fill_q75_box_smart1.jpg')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
