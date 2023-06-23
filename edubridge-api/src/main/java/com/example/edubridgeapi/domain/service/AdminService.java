package com.example.edubridgeapi.domain.service;

import com.example.edubridgeapi.domain.dto.CategoryDto;
import com.example.edubridgeapi.domain.dto.CourseDto;
import com.example.edubridgeapi.domain.dto.StudentDto;
import com.example.edubridgeapi.domain.dto.TeacherDto;
import com.example.edubridgeapi.domain.dto.form.CategoryForm;
import com.example.edubridgeapi.domain.entity.Category;
import com.example.edubridgeapi.domain.entity.Course;
import com.example.edubridgeapi.domain.entity.Student;
import com.example.edubridgeapi.domain.entity.Teacher;
import com.example.edubridgeapi.domain.repo.CategoryRepo;
import com.example.edubridgeapi.domain.repo.CourseRepo;
import com.example.edubridgeapi.domain.repo.StudentRepo;
import com.example.edubridgeapi.domain.repo.TeacherRepo;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AdminService {

    private final TeacherRepo teacherRepo;
    private final StudentRepo studentRepo;
    private final CourseRepo courseRepo;
    private final CategoryRepo categoryRepo;

    public AdminService(TeacherRepo teacherRepo, StudentRepo studentRepo, CourseRepo courseRepo,CategoryRepo categoryRepo) {
        this.teacherRepo = teacherRepo;
        this.studentRepo = studentRepo;
        this.courseRepo = courseRepo;
        this.categoryRepo=categoryRepo;
    }

    public List<TeacherDto> findAllTeachers(){
        return teacherRepo.findAll().stream().map(t -> TeacherDto.from(t)).toList();
    }
    public List<StudentDto> findAllStudents(){
        return studentRepo.findAll().stream().map(s -> StudentDto.from(s)).toList();
    }

    public List<CourseDto> findAllCourses(){
        return courseRepo.findAll().stream().map(c -> CourseDto.from(c)).toList();
    }

    public List<CategoryDto> findAllCategories(){
        return categoryRepo.findAll().stream().map(c -> CategoryDto.from(c)).toList();
    }
    public void createCategory(@Valid CategoryForm categoryForm){
        categoryRepo.save(categoryForm.entity());
    }

}
