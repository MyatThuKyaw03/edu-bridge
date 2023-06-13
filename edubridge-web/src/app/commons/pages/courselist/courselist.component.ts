import { Component, OnInit } from '@angular/core';
import { CourseService } from 'src/app/services/apis/course.service';

@Component({
  selector: 'app-courselist',
  templateUrl: './courselist.component.html',
  styles: [
  ]
})
export class CourselistComponent implements OnInit{
  courses:any=[
  ]

  constructor(private courseService: CourseService){}
  ngOnInit(): void {
    this.courses = this.courseService.findAll();
    console.log(this.courses)
  }
}
