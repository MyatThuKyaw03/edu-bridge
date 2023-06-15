import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'any',
})
export class CategoryService {
  constructor() {}

  findAll(): Observable<any[]> {
    return of(this.categories);
  }
  categories: any[] = [
    { id: 1, name: 'BUSINESS' },
    { id: 2, name: 'INFORMATION TECHONOLOGY' },
    { id: 3, name: 'LANGUAGES' },
  ];
  //  [
  //   { id: 1, name: 'Computer Science' },
  //   { id: 2, name: 'Japanese Language' },
  //   { id: 3, name: 'ICGSE O Level' },
  // ];

  search(keywords: any) {
    if (keywords == this.categories) {
    } else {
    }
  }

  saveCategory(catname: any) {
    this.categories.push(catname);
    console.log(this.categories);
  }
}
