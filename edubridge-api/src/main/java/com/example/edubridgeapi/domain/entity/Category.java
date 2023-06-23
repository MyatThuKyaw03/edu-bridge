package com.example.edubridgeapi.domain.entity;

import jakarta.persistence.*;
import lombok.Data;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

@Entity
@Data
public class Category implements Serializable {

    public static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    @Column(nullable = false, unique = true)
    private String name;

    @OneToMany(mappedBy = "category")
    private List<Course> courses=new ArrayList<>();

    public void addCourse(Course course){
        this.courses.add(course);
        course.setCategory(this);
    }
    public void removeCourse(Course course){
        course.setCategory(null);
        courses.remove(course);
    }
}
