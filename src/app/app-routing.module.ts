import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchCriteriaComponent } from './search-criteria/search-criteria.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { FavoritesPageComponent } from './favorites-page/favorites-page.component';
import { RecipeComponent } from './recipe/recipe.component';

const routes: Routes = [
  { path: 'search', component: SearchCriteriaComponent },
  { path: 'recipe', component: RecipeComponent },
  { path: 'recipe-list', component: RecipeListComponent },
  { path: 'favorites', component: FavoritesPageComponent },
  { path: '', redirectTo: '/recipe-list', pathMatch: 'full' },
  { path: '**', component: RecipeListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
