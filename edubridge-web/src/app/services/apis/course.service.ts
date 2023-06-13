import { Injectable } from "@angular/core";

@Injectable( {
  providedIn: 'root'
})
export class CourseService {
  courseList: any=[]
  save(data:any) {
    this.courseList.push(data);

  }

  findAll():any{
   return this.courseList;
  }
}
