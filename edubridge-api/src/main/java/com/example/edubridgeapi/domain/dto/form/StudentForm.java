package com.example.edubridgeapi.domain.dto.form;

import com.example.edubridgeapi.domain.entity.Student;

public record StudentForm(
        String name,
        String loginId,
        String password,
        Enum role
)  {
    public Student entity(){
        var stu=new Student();
        stu.setUsername(name);
        stu.setLoginId(loginId);
        stu.setPassword(password);
        return stu;
    }

}
