import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CategoryService } from 'src/app/services/apis/category.service';

@Component({
  templateUrl: './create-category.component.html',
  styleUrls: ['./create-category.component.css'],
})
export class CreateCategoryComponent implements OnInit {

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
  }

  ngOnInit(): void {
    this.findAll()
  }

  findAll() {
    return this.service.findAll().subscribe(result => this.categories = result)
  }

  saveCategory(category: any) {
    this.service.saveCategory(category).subscribe(result => this.categories.push(result));
  }
}
