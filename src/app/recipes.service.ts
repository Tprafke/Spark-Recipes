import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class RecipesService {
  url: string = 'https://api.edamam.com/search';
  appId: string = 'c976199a';
  key: string = '2eac5301f2a1c59a09a35a7a0e00d279';

  constructor(private http: HttpClient) {}

  // getData = (
  //   searchTerm: string,
  //   dietInput: string,
  //   caloriesInput: any
  // ): any => {
  //   return this.http.get(this.Url, {
  //     params: {
  //       app_id: this.appId,
  //       app_key: this.key,
  //       q: searchTerm,
  //       diet: dietInput,
  //       calories: caloriesInput,
  //     },
  //   });
  // };

  getData = (parameters: any): any => {
    let params: any = {};
    params.app_id = this.appId;
    params.app_key = this.key;
    if (parameters.term) {
      params.q = parameters.term;
    }
    if (parameters.diet) {
      params.diet = parameters.diet;
    }
    if (parameters.calories) {
      params.calories = parameters.calories;
    }
    return this.http.get(this.url, {
      params: params,
    });
  };
}
