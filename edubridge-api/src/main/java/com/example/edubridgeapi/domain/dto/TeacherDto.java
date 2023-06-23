package com.example.edubridgeapi.domain.dto;

import com.example.edubridgeapi.domain.entity.Member;
import com.example.edubridgeapi.domain.entity.Role;
import com.example.edubridgeapi.domain.entity.Teacher;
import jakarta.validation.constraints.NotBlank;

public record TeacherDto(
        int id,
        @NotBlank(message = "Please enter name")
        String name,
        @NotBlank(message = "LoginId cannot be Blank")
        String loginId,


        Enum role
) {
public static TeacherDto from (Teacher tec){
    return new TeacherDto(
            tec.getId(),
    tec.getUsername(),
    tec.getLoginId(),
    tec.getRole());

}
}
