import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup,FormBuilder } from '@angular/forms';
import { CourseService } from 'src/app/services/apis/course.service';



@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html'
})
export class TeacherComponent {
  @Output()
  emitter = new EventEmitter<any>();
  form:FormGroup

  constructor(builder: FormBuilder,private courseService : CourseService){
    this.form=builder.group({
      courseTitle: '',
      category: '',
      price: '',
      descricption: ''
    })
  }

  submit(value : any){
    this.courseService.save(value);
    console.log(value);
  }
}
