package com.example.edubridgeapi.domain.dto;

import com.example.edubridgeapi.domain.entity.Student;
import jakarta.validation.constraints.NotBlank;

public record  StudentDto (
        int id,
        @NotBlank(message = "Please enter name")
        String name,
        @NotBlank(message = "LoginId cannot be Blank")
        String loginId,


        Enum role
){
        public static StudentDto from(Student stu){
                return new StudentDto(
                        stu.getId(),
                        stu.getUsername(),
                        stu.getLoginId(),

                        stu.getRole());
        }
}
