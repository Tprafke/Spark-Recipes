import { Component, OnInit, Input } from '@angular/core';
import { RecipesService } from '../recipes.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
})
export class RecipesComponent implements OnInit {
  @Input() recipeRef: any;

  showRecipe: boolean = false;

  constructor(private service: RecipesService) {}

  addFavorite(favorite: any) {
    this.service.favorites.push(favorite);
    console.log(this.service.favorites);
  }

  toggleForm() {
    this.showRecipe = !this.showRecipe;
  }

  ngOnInit(): void {}
}
