package com.example.edubridgeapi.domain.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Embeddable;
import lombok.Data;

import java.io.Serializable;

@Embeddable
@Data
public class RegistrationPK implements Serializable {

    public static final long serialVersionUID = 1L;

    @Column(name = "course_id")
    private int courseId;

    @Column(name = "student_id")
    private int studentId;
}
