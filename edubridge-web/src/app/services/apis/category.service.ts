import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  constructor() {}


  categories: any[] = [
    {id: 1,name: 'IT'},
    {id: 2 , name: 'Business'}
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

  findAll(): Observable<any[]> {
    return of(this.categories);
  }

  saveCategory(catname: any): Observable<any> {
    //this.categories.push(catname)
    return of(catname);
  }
}
