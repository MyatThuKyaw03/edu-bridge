import { Injectable } from "@angular/core";

@Injectable( {
  providedIn: 'any'
})
export class CourseService {
  courseList: any=[]
  save(data:any) {
    this.courseList.push(data);
    console.log(data);
  }

  findAll():any{
   return this.courseList;
  }
}
