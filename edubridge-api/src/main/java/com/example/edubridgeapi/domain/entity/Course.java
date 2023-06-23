package com.example.edubridgeapi.domain.entity;

import jakarta.persistence.*;
import lombok.Data;

import java.io.Serializable;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@Entity
@Data
public class Course implements Serializable {

    public static final long serialVersionUID = 1L;
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    @Column(nullable = false)
    private String name;
    @Column(nullable = false)
    private int fees;

    private String description;
    private String image;
    private LocalDate creation;

    @ManyToOne(cascade = CascadeType.PERSIST)
    private Category category;

    @OneToMany
    @JoinColumn(name="module_id")
    private List<Module> modules=new ArrayList<>();

}
