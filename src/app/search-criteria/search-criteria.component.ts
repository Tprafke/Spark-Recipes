import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-search-criteria',
  templateUrl: './search-criteria.component.html',
  styleUrls: ['./search-criteria.component.css'],
})
export class SearchCriteriaComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  search = (form: NgForm) => {
    console.log(form);
    this.router.navigate(['recipe-list'], {
      queryParams: {
        term: form.value.searchTerm,
      },
    });
  };
}
