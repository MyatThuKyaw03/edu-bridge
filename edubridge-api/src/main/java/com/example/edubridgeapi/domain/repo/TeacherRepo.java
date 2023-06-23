package com.example.edubridgeapi.domain.repo;

import com.example.edubridgeapi.domain.entity.Teacher;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TeacherRepo extends JpaRepository<Teacher,Integer> {
}
