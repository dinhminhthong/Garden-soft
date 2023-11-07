package com.example.gardensoft.service;

import com.example.gardensoft.model.CustomerType;
import com.example.gardensoft.repository.CustomerTypeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CustomerTypeService implements IEmployeeTypeService{
    @Autowired
    private CustomerTypeRepository employeeTypeRepository;

    @Override
    public List<CustomerType> findAllType() {
        return employeeTypeRepository.findAll();
    }
}
