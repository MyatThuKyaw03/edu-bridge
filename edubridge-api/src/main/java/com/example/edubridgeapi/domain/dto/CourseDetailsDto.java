package com.example.edubridgeapi.domain.dto;

import com.example.edubridgeapi.domain.entity.Course;

import java.time.LocalDate;

public record CourseDetailsDto(
        int fees,
        String title,
        String desc,
        LocalDate creation
) {
    public static CourseDetailsDto from(Course course){
        return new CourseDetailsDto(
                course.getFees(),
                course.getName(),
                course.getDescription(),
                course.getCreation()
                );
    }
}
