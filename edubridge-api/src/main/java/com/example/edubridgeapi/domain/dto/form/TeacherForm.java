package com.example.edubridgeapi.domain.dto.form;

import com.example.edubridgeapi.domain.entity.Member;
import com.example.edubridgeapi.domain.entity.Role;
import com.example.edubridgeapi.domain.entity.Teacher;

public record TeacherForm(

        String name,
        String loginId,
        String password,
        Enum role
) {
    public Teacher entity(){
        var tec=new Teacher();
        tec.setUsername(name);
        tec.setLoginId(loginId);
        tec.setPassword(password);
        tec.setRole(Role.Teacher);
        return tec;


    }
}
