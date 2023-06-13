import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";


@Injectable(
  {
    providedIn: 'root'
  }
)
export class TeacherCourseService{
  moduleList:any =[]

  add(value: Object | null) : any{
    this.moduleList.push(value)
  }

  findAll(){
   return this.moduleList;
}
}
