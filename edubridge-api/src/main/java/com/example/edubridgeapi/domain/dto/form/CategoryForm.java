package com.example.edubridgeapi.domain.dto.form;

import com.example.edubridgeapi.domain.entity.Category;
import jakarta.validation.constraints.NotEmpty;

public record CategoryForm (
        int id,
        @NotEmpty(message = "Name cannot be empty!")
        String name
){
    public Category entity(){
        var cat= new Category();
        cat.setId(id);
        cat.setName(name);
        return cat;
    }
}
