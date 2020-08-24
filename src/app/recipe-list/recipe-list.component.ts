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
      console.log(params);
      let test: any = params['params'];
      console.log(test);
      this.service.getData(test).subscribe((response) => {
        console.log(response);
        this.recipes = response.hits;
      });
    });
  };
}
