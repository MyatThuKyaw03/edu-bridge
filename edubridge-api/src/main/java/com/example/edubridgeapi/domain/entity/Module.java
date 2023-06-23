package com.example.edubridgeapi.domain.entity;

import jakarta.persistence.*;
import lombok.Data;

import java.io.Serializable;

@Entity
@Data
public class Module implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    @Column(nullable = false)
    private String no;
    @Column(nullable = false)
    private String title;
    @Column(nullable = false)
    private String lecture;

    @ManyToOne
    private Course course;
}
