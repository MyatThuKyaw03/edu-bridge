import { Component, OnInit } from '@angular/core';
import { TeacherCourseService } from 'src/app/services/apis/teacher-course.service';

@Component({
  selector: 'app-coursemodule',
  templateUrl: './coursemodule.component.html',
  styleUrls: ['./coursemodule.component.css']
})
export class CoursemoduleComponent implements OnInit {
  modules: any = [];

  info!: any;

  chapters: any = []

  targetChapter: any = []



  constructor (private teacherService: TeacherCourseService){

  }
  ngOnInit(): void {
    this.modules = this.teacherService.findAll();
  }
  onSelectChapter(chapter: any){}

  myFunction() {
    this.info = document.getElementById('myDIV');

    if (this.info.style.display === 'none') {
      this.info.style.display = 'block';
    } else {
      this.info.style.display = 'none';
    }
  }

}
