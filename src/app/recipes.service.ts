import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class RecipesService {
  Url: string = 'https://api.edamam.com/search';
  appId: string = 'c976199a';
  key: string = '2eac5301f2a1c59a09a35a7a0e00d279';
  constructor(private http: HttpClient) {}

  getData = (searchTerm: string): any => {
    return this.http.get(this.Url, {
      params: {
        app_id: this.appId,
        app_key: this.key,
        q: searchTerm,
      },
    });
  };
}
