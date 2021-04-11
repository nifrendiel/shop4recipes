import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipeEditComponent } from './components/recipes/recipe-edit/recipe-edit.component';

import { RecipeStartComponent } from './components/recipes/recipe-start/recipe-start.component';
import { RecipesDetailComponent } from './components/recipes/recipes-detail/recipes-detail.component';
import { RecipesComponent } from './components/recipes/recipes.component';
import { RecipesResolverService } from './components/recipes/recipes.resolver.service';
import { ShoppingListComponent } from './components/shopping-list/shopping-list.component';

const routes: Routes = [
  {
    path: '', redirectTo: '/recipes', pathMatch: 'full'
  },
  {
    path: 'recipes', component: RecipesComponent,
    children: [
      {
        path: '', component: RecipeStartComponent
      },
      {
        path: 'new', component: RecipeEditComponent
      },
      {
        path: ':id', component: RecipesDetailComponent, resolve: [RecipesResolverService]
      },
      {
        path: ':id/edit', component: RecipeEditComponent, resolve: [RecipesResolverService]
      }
    ]
  },
  {
    path: 'shopping-list', component: ShoppingListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
