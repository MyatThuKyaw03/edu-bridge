package com.example.edubridgeapi.api;

import com.example.edubridgeapi.domain.dto.CategoryDto;
import com.example.edubridgeapi.domain.dto.CourseDto;
import com.example.edubridgeapi.domain.dto.StudentDto;
import com.example.edubridgeapi.domain.dto.TeacherDto;
import com.example.edubridgeapi.domain.dto.form.CategoryForm;
import com.example.edubridgeapi.domain.service.AdminService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/admin")
public class AdminApi {
    @Autowired
    private AdminService service;

    @GetMapping("/find-teachers")
    private List<TeacherDto> findAllTeachers(){
        return service.findAllTeachers();
    }
    @GetMapping("/find-students")
    private List<StudentDto> findAllStudents(){
        return service.findAllStudents();
    }
    @GetMapping("/find-courses")
    private List<CourseDto> findAllCourses(){
        return service.findAllCourses();
    }
    @GetMapping("/find-categories")
    private List<CategoryDto> findAllCategories(){
        return service.findAllCategories();
    }
    @PostMapping("/create-category")
    private void createCategory(CategoryForm categoryForm){
        service.createCategory(categoryForm);
    }

}
