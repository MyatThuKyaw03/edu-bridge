import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { API } from "src/environment/environment"

const TEACHER_DOMAIN=`${API}/teacher/module-list`
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

  //teacher
  add(value:any){
    this.moduleList.push(value)
  }
  //public
  findAll() : Observable<any[]>{
   return of (this.moduleList);
}
}
