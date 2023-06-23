import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { API } from 'src/environment/environment';


const PUBLIC_DOMAIN = `${API}/public/search`
const TEACHER_DOMAIN = `${API}/teacher/save`
@Injectable({
  providedIn: 'any',
})

export class CourseService {

  courseList: any = [
    {
      id: '1',
      courseTitle: 'Java',
      category: 'Programming',
      price: '$50',
      descricption: 'You can learn programming from beginning',
      imageUrl:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Gutenberg_Bible%2C_Lenox_Copy%2C_New_York_Public_Library%2C_2009._Pic_01.jpg/640px-Gutenberg_Bible%2C_Lenox_Copy%2C_New_York_Public_Library%2C_2009._Pic_01.jpg',
    },
    {
      id: '1',
      courseTitle: 'Python',
      category: 'Programming',
      price: '$50',
      descricption: 'You can learn programming from beginning',
      imageUrl:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Gutenberg_Bible%2C_Lenox_Copy%2C_New_York_Public_Library%2C_2009._Pic_01.jpg/640px-Gutenberg_Bible%2C_Lenox_Copy%2C_New_York_Public_Library%2C_2009._Pic_01.jpg',
    },
  ];


  //public
  searchByCategory(id: number): Observable<any[]> {
    return of(this.result);
  }

  //public
  search(value: any): Observable<any[]> {
    return of(this.result);
  }


  //teacher
  save(data: any) {
    this.courseList.push(data);
  }
  //teacher
  findAll(): Observable<any[]> {
    return of (this.courseList);
  }

  private result: any[] = [
    {
      id: 1,
      name: 'Java Basic',
      category: {
        id: 1,
        name: 'Computer Science',
      },
      description: 'Entry course of Java Programming. Basic of the basic.',
      teacher: {
        id: 1,
        name: 'Mr Hank',
      },
    },
    {
      id: 1,
      name: 'Java Basic',
      category: {
        id: 1,
        name: 'Computer Science',
      },
      description: 'Entry course of Java Programming. Basic of the basic.',
      teacher: {
        id: 1,
        name: 'Mr Hank',
      },
    },
    {
      id: 1,
      name: 'Java Basic',
      category: {
        id: 1,
        name: 'Computer Science',
      },
      description: 'Entry course of Java Programming. Basic of the basic.',
      teacher: {
        id: 1,
        name: 'Mr Hank',
      },
    },
    {
      id: 1,
      name: 'Java Basic',
      category: {
        id: 1,
        name: 'Computer Science',
      },
      description: 'Entry course of Java Programming. Basic of the basic.',
      teacher: {
        id: 1,
        name: 'Mr Hank',
      },
    },
  ];
}
