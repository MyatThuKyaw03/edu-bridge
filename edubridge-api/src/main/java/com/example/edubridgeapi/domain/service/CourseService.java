package com.example.edubridgeapi.domain.service;

import com.example.edubridgeapi.domain.dto.CourseDetailsDto;
import com.example.edubridgeapi.domain.dto.CourseDto;
import com.example.edubridgeapi.domain.entity.Course;
import com.example.edubridgeapi.domain.repo.CourseRepo;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CourseService {

    @Autowired
    private CourseRepo repo;
    public List<CourseDto> findAllCourse(){
        return repo.findAll().stream().map(c -> CourseDto.from(c)).toList();
    }

    public CourseDetailsDto findCourseDetails(int id){
        return CourseDetailsDto.from(repo.findCourseById(id).orElseThrow(EntityNotFoundException::new));
    }

    Specification<Course> courseSpec(Optional<String> name,Optional<String> category){
        return name.isEmpty() || null == category ? Specification.where(null):
                (root, query, criteriaBuilder) -> criteriaBuilder.and(
                        criteriaBuilder.like(root.get("name"),name.get().toLowerCase().concat("%")),
                        criteriaBuilder.equal(root.get("category"),category.get())
                );
    }

    public List<CourseDto> searchCourse(Optional<String> name,Optional<String> category){
        return repo.findAll(courseSpec(name,category))
                .stream().map(CourseDto::from).toList();
    }
    public Course findCourseDetail(int id){
        return repo.findCourseById(id).orElseThrow(EntityNotFoundException::new);
    }

}
