package com.example.edubridgeapi.domain.dto.form;

import com.example.edubridgeapi.domain.entity.Category;
import com.example.edubridgeapi.domain.entity.Course;
import com.example.edubridgeapi.domain.entity.Module;

import java.time.LocalDate;

public record CourseForm(
        String name,
        String description,
        LocalDate creation,
        Category category,
        Module module
) {
    public Course entity(){
        var cou = new Course();
        cou.setName(name);
        cou.setDescription(description);
        cou.setCreation(creation);
        cou.setCategory(category);
        cou.getModules().add(module);
        return cou;
    }
}
