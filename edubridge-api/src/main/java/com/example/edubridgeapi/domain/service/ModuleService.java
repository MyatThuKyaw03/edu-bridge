package com.example.edubridgeapi.domain.service;

import com.example.edubridgeapi.domain.dto.ModuleDto;
import com.example.edubridgeapi.domain.dto.form.ModuleForm;
import com.example.edubridgeapi.domain.repo.ModuleRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ModuleService {
    @Autowired
    private ModuleRepo moduleRepo;

    public List<ModuleDto> findAllModules(){
        return moduleRepo.findAll().stream().map(m -> ModuleDto.from(m)).toList();
    }

    public void createModule(ModuleForm moduleForm){
        moduleRepo.save(moduleForm.entity());
    }
}
