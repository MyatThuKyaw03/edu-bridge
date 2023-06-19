import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CategoryService } from 'src/app/services/apis/category.service';
import { CourseService } from 'src/app/services/apis/course.service';

@Component({
  selector: 'app-courselist',
  templateUrl: './courselist.component.html',
  styleUrls: ['./courselist.component.css'],
})
export class CourselistComponent implements OnInit {
  categories: any[] = [];
  courseList: any[] = [];
  searchForm: FormGroup;
  courses: any = [];

  constructor(
    builder: FormBuilder,
    private router: Router,
    private categoryService: CategoryService,
    private courseService: CourseService
  ) {
    this.searchForm = builder.group({
      keyword: '',
    });
  }

  ngOnInit(): void {
    this.categoryService.findAll().subscribe((result) => {
      this.categories = result;
    });

    this.search();
  }

  search() {
    this.courseService.search(this.searchForm.value).subscribe((result) => {
      this.courseList = result;
    });
  }

  findAllCourses() {}

  searchByCategory(id: number) {
    this.courseService.searchByCategory(id).subscribe((result) => {
      this.courseList = result;
    });
  }

  showDetails(id: number) {
    this.router.navigate(['/anonymous', 'course-details'], {
      queryParams: { id: id },
    });
  }
}
