package com.example.gardensoft.controller;

import com.example.gardensoft.model.CustomerType;
import com.example.gardensoft.service.IEmployeeTypeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin("*")
public class CustomerTypeController {
    @Autowired
    private IEmployeeTypeService iEmployeeTypeService;
    @GetMapping("/type")
    public ResponseEntity<?> getAllType (){
        List<CustomerType> customerTypes = iEmployeeTypeService.findAllType();
        return new ResponseEntity<>(customerTypes, HttpStatus.OK);
    }
}
