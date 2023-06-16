import { Injectable } from "@angular/core";



@Injectable(
  {
    providedIn: 'root'
  }
)
export class TeacherCourseService{
  moduleList:any =[{
    chapter: '',
      title: '',
      lecture: ''
  }]

  add(value:any){
    this.moduleList.push(value)
  }

  findAll(){
   return this.moduleList;
}
}
