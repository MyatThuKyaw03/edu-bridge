package com.example.edubridgeapi.domain.dto;

import com.example.edubridgeapi.domain.entity.Category;

public record CategoryDto (
        int id,
        String name
){
    public static CategoryDto from(Category category){
        return new CategoryDto(category.getId(), category.getName());
    }
}
