package com.example.edubridgeapi.domain.repo;

import com.example.edubridgeapi.domain.entity.Course;
import com.example.edubridgeapi.domain.entity.Module;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface ModuleRepo extends JpaRepository<Module,Integer> {

    Optional<Module> findModulesByCourse(Course course);
}
