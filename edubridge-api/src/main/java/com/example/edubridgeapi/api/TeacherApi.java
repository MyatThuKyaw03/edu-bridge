package com.example.edubridgeapi.api;

import com.example.edubridgeapi.domain.dto.CourseDto;
import com.example.edubridgeapi.domain.dto.ModuleDto;
import com.example.edubridgeapi.domain.dto.TeacherDto;
import com.example.edubridgeapi.domain.dto.form.CourseForm;
import com.example.edubridgeapi.domain.dto.form.ModuleForm;
import com.example.edubridgeapi.domain.dto.form.TeacherForm;
import com.example.edubridgeapi.domain.service.CourseService;
import com.example.edubridgeapi.domain.service.ModuleService;
import com.example.edubridgeapi.domain.service.TeacherService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.BindingResult;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/teacher")
public class TeacherApi {

    @Autowired
    private TeacherService teacherService;
    @Autowired
    private CourseService courseService;

    @Autowired
    private ModuleService moduleService;

    @PostMapping("/sign-up")
    public TeacherDto signUp(@RequestBody @Validated TeacherForm form, BindingResult result){
        return teacherService.signUp(form);
    }

    @DeleteMapping("{id}")
    public void delete(@PathVariable int id) {
        teacherService.delete(id);
    }

    @PostMapping("/create-course")
    public void createCourse(CourseForm form){
        teacherService.createCourse(form);
    }
    @PostMapping("/creat-module")
    public void createModule(ModuleForm form){
        moduleService.createModule(form);
    }
    @GetMapping("/modules")
    public List<ModuleDto> findAllModules(){
        return moduleService.findAllModules();
    }
    @GetMapping("/find-courses")
    public List<CourseDto> findAllCourses(){
        return courseService.findAllCourse();
    }
    @GetMapping("/search-course")
    public List<CourseDto> searchCourse(Optional<String> name,Optional<String> category){
        return courseService.searchCourse(name,category);
    }

}
