package com.example.edubridgeapi.domain.entity;

import jakarta.persistence.CollectionTable;
import jakarta.persistence.ElementCollection;
import jakarta.persistence.Entity;
import jakarta.persistence.OneToOne;
import lombok.Data;

import java.util.List;

@Entity
@Data
public class Teacher extends Member {

    @ElementCollection
    @CollectionTable(name = "education_background")
    private List<String> background;

}
