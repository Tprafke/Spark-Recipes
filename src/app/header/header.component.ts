import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { RecipesService } from '../recipes.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  favorites: any = [];
  constructor(private location: Location, private service: RecipesService) {}

  goBack() {
    this.location.back();
  }

  ngOnInit(): void {
    this.favorites = this.service.getFavorites();
  }
}
