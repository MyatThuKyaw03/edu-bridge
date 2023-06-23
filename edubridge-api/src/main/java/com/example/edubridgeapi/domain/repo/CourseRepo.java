package com.example.edubridgeapi.domain.repo;

import com.example.edubridgeapi.domain.entity.Course;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

import java.util.Optional;

public interface CourseRepo extends   JpaRepository<Course,Integer> , JpaSpecificationExecutor<Course> {

    Optional<Course> findCourseById(int id);

}
