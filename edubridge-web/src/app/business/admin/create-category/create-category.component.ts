import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CategoryService } from 'src/app/services/apis/category.service';

@Component({
  templateUrl: './create-category.component.html',
  styleUrls: ['./create-category.component.css'],
})
export class CreateCategoryComponent {
  form: FormGroup;

  categories: any[] = [];

  search(keywords: any) {
    if (keywords == this.categories) {
    } else {
    }
  }

  constructor(private service: CategoryService, private builder: FormBuilder) {
    this.form = builder.group({
      id: '',
      name: '',
    });
    service.findAll().subscribe((c) => (this.categories = c));
  }

  saveCategory(catname: any) {
    this.service.saveCategory(catname);
  }
}
