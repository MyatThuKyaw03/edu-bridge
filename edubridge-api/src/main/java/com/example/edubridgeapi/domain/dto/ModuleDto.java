package com.example.edubridgeapi.domain.dto;

import com.example.edubridgeapi.domain.entity.Module;

public record ModuleDto(
        String no,
        String title,
        String lecture
) {
    public static ModuleDto from(Module module){
        return new ModuleDto(module.getNo(), module.getTitle(), module.getLecture());
    }
}
