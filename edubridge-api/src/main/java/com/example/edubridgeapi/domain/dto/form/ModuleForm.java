package com.example.edubridgeapi.domain.dto.form;

import com.example.edubridgeapi.domain.entity.Module;

public record ModuleForm (
        String no,
        String title,
        String lecture
){
    public Module entity(){
        var mod=new Module();
        mod.setNo(no);
        mod.setTitle(title);
        mod.setLecture(lecture);
        return mod;
    }
}
