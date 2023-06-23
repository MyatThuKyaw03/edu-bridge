package com.example.edubridgeapi.domain.repo;

import com.example.edubridgeapi.domain.entity.Student;
import org.springframework.data.jpa.repository.JpaRepository;

public interface StudentRepo extends JpaRepository<Student,Integer> {

}
