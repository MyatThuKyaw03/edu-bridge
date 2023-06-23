package com.example.edubridgeapi.domain.entity;

import jakarta.persistence.*;
import lombok.Data;

import java.io.Serializable;
import java.time.LocalDate;

@Entity
@Data
public class Registration implements Serializable {

    public static final long serialVersionUID = 1L;

    @EmbeddedId
    private RegistrationPK id;
    @Column(nullable = false, name = "reg_date")
    private LocalDate regDate;
    @Column(nullable = false, name = "reg_fee")
    private int regFees;

    @ManyToOne
    @MapsId(value = "id")
    private Student student;

    @ManyToOne
    @MapsId(value = "id")
    private Course course;
}
