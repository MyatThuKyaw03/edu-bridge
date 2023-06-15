import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { CategoryService } from 'src/app/services/apis/category.service';
import { CourseService } from 'src/app/services/apis/course.service';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
})
export class TeacherComponent {


  form:FormGroup
  categoryList: any = []

  constructor(builder: FormBuilder,private courseService : CourseService,private categoryService: CategoryService){
    this.form=builder.group({
      id: '',
      courseTitle: '',
      category: '',
      price: '',
      descricption: '',
      imageUrl: ''
    })
    this.categoryService.findAll().subscribe(result => {this.categoryList = result})
  }

  submit(value: any) {
    this.courseService.save(value);
  }
}
