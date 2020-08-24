import { Component, OnInit } from '@angular/core';
import { RecipesService } from '../recipes.service';

@Component({
  selector: 'app-favorites-page',
  templateUrl: './favorites-page.component.html',
  styleUrls: ['./favorites-page.component.css'],
})
export class FavoritesPageComponent implements OnInit {
  recipies: any;

  constructor(private service: RecipesService) {}

  getFavorite() {
    this.recipies = this.service.getFavorites();
  }

  onDelete(index: number) {
    this.recipies.splice(index, 1);
    // console.log(this.recipies);
  }

  ngOnInit(): void {
    this.getFavorite();
  }
}
