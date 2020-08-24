import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class RecipesService {
  Url: string = 'https://api.edamam.com/search';
  appId: string = 'c976199a';
  key: string = '2eac5301f2a1c59a09a35a7a0e00d279';
  dishType: string;
  constructor(private http: HttpClient) {}

  getData = (searchTerm: string, dietInput: string): any => {
    if (dietInput === 'none' || dietInput === null) {
      return this.http.get(this.Url, {
        params: {
          app_id: this.appId,
          app_key: this.key,
          q: searchTerm,
        },
      });
    } else {
      return this.http.get(this.Url, {
        params: {
          app_id: this.appId,
          app_key: this.key,
          q: searchTerm,
          diet: dietInput,
        },
      });
    }
  };
}
