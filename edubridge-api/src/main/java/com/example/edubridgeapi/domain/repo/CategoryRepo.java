package com.example.edubridgeapi.domain.repo;

import com.example.edubridgeapi.domain.entity.Category;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CategoryRepo extends JpaRepository<Category,Integer> {
}
