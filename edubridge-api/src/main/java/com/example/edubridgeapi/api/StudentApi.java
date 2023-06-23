package com.example.edubridgeapi.api;

import com.example.edubridgeapi.domain.dto.CourseDetailsDto;
import com.example.edubridgeapi.domain.dto.CourseDto;
import com.example.edubridgeapi.domain.dto.ModuleDto;
import com.example.edubridgeapi.domain.service.CourseService;
import com.example.edubridgeapi.domain.service.ModuleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/student")
public class StudentApi {

    @Autowired
    private CourseService courseService;

    @Autowired
    private ModuleService moduleService;

    @GetMapping("/search-courses")
    public List<CourseDto> findAllCourses(){
        return courseService.findAllCourse();
    }
    @GetMapping("/course-details")
    public CourseDetailsDto courseDetails(@RequestParam int id){
        return courseService.findCourseDetails(id);
    }
    @GetMapping("/learn")
    public List<ModuleDto> findAllModules(){
        return moduleService.findAllModules();
    }
}
