package com.example.edubridgeapi.domain.service;

import com.example.edubridgeapi.domain.dto.ModuleDto;
import com.example.edubridgeapi.domain.dto.TeacherDto;
import com.example.edubridgeapi.domain.dto.form.CourseForm;
import com.example.edubridgeapi.domain.dto.form.ModuleForm;
import com.example.edubridgeapi.domain.dto.form.TeacherForm;
import com.example.edubridgeapi.domain.repo.CourseRepo;
import com.example.edubridgeapi.domain.repo.ModuleRepo;
import com.example.edubridgeapi.domain.repo.TeacherRepo;
import jakarta.persistence.EntityNotFoundException;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;


@Service
@Transactional
public class TeacherService {
    @Autowired
    private TeacherRepo teacherRepo;

    @Autowired
    private CourseRepo courseRepo;




    public TeacherDto signUp(@Valid TeacherForm form){

        return TeacherDto.from(teacherRepo.save(form.entity()));

    }

    public TeacherDto update(int id,@Valid TeacherForm form){
        return teacherRepo.findById(id)
                .map( acc ->{
                    acc.setUsername(form.name());
                    acc.setPassword(form.password());
                    acc.setLoginId(form.loginId());

                    return TeacherDto.from(acc);
                }).orElseThrow( ()-> {
                    throw new RuntimeException(" ");});


    }
    public void delete(int id){
         teacherRepo.deleteById(id);
    }

    public void createCourse(CourseForm courseForm){
        courseRepo.save(courseForm.entity());
    }



}
