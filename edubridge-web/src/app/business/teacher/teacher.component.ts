import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CategoryService } from 'src/app/services/apis/category.service';
import { CourseService } from 'src/app/services/apis/course.service';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
})
export class TeacherComponent implements OnInit {
  form: FormGroup;
  categoryList: any = [];

  constructor(
    builder: FormBuilder,
    private courseService: CourseService,
    private categoryService: CategoryService
  ) {
    this.form = builder.group({
      id: ['', Validators.required],
      courseTitle: ['', Validators.required],
      category: ['', Validators.required],
      price: ['', Validators.required],
      descricption: ['', Validators.required],
      imageUrl: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.categoryService
      .findAll()
      .subscribe((result) => (this.categoryList = result));
  }

  submit(value: any) {
    this.courseService.save(value);
  }
}
