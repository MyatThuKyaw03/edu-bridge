import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'any'
})
export class CategoryService {

  categories: any[] = [{id: 1, name: 'Business'},{id: 2,name: 'IT'}];
  //  [
  //   { id: 1, name: 'Computer Science' },
  //   { id: 2, name: 'Japanese Language' },
  //   { id: 3, name: 'ICGSE O Level' },
  // ];

  constructor() { }

  findAll(): Observable<any[]> {
    return of(this.categories);
  }

  saveCategory(catname: any) {
    this.categories.push(catname);
    console.log(this.categories);
  }

}
