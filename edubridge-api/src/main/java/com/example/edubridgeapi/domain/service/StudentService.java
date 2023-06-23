package com.example.edubridgeapi.domain.service;

import com.example.edubridgeapi.domain.dto.StudentDto;
import com.example.edubridgeapi.domain.dto.form.StudentForm;
import com.example.edubridgeapi.domain.repo.StudentRepo;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.flyway.FlywayDataSource;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional
public class StudentService {

    @Autowired
    private StudentRepo repo;

    public StudentDto save(@Valid StudentForm form){
        return StudentDto.from(repo.save(form.entity()));
    }
    public List<StudentDto> search(){
        return repo.findAll().stream().map( a-> StudentDto.from(a)).toList();
}
    public void remove(int id){
        repo.deleteById(id);
}
}
