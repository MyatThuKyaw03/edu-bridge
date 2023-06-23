package com.example.edubridgeapi.domain.dto;

import com.example.edubridgeapi.domain.entity.Category;
import com.example.edubridgeapi.domain.entity.Course;
import com.example.edubridgeapi.domain.entity.Module;
import jakarta.persistence.Embeddable;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

public record CourseDto (
        int id,
         String name,
         int fees,
         String image,
         LocalDate creation,
         Category category,
        List<Module> module
        ){

    public static CourseDto from(Course course){
        return new CourseDto(
                course.getId(),
                course.getName(),
                course.getFees(),
                course.getImage(),
                course.getCreation(),
                course.getCategory(),
                course.getModules()
        );
    }

}
