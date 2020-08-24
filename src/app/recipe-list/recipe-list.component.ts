import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecipesService } from '../recipes.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  recipes: any;

  constructor(private route: ActivatedRoute, private service: RecipesService) {}

  ngOnInit(): void {
    this.getRecipes();
  }

  getRecipes = () => {
    this.route.queryParamMap.subscribe((params) => {
      console.log(params.get('term'));
      let term = params.get('term');
      this.service.getData(term).subscribe((response) => {
        this.recipes = response.hits;
        console.log(this.recipes);
      });
    });
  };
}
