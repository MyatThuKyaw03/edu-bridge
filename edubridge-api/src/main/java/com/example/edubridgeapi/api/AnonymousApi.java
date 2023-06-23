package com.example.edubridgeapi.api;

import com.example.edubridgeapi.domain.dto.CourseDetailsDto;
import com.example.edubridgeapi.domain.dto.CourseDto;
import com.example.edubridgeapi.domain.service.CourseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/anonymous")
public class AnonymousApi {
    @Autowired
    private CourseService courseService;

    @GetMapping("/find-courses")
    public List<CourseDto> findAllCourses(){
        return courseService.findAllCourse();
    }
    @GetMapping("/course-details")
    public CourseDetailsDto courseDetails(@RequestParam int id){
        return courseService.findCourseDetails(id);
    }
}
