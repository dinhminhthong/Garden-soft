package com.example.gardensoft.service;

import com.example.gardensoft.dto.CustomerDTO;
import com.example.gardensoft.model.Customer;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;

public interface ICustomerService {
    List<Customer> findAll();
    void saveAllEmployee(List<CustomerDTO> customerDTOList);
    void add(CustomerDTO customerDTO);
    Page<Customer>findAllByList(Pageable pageable);
    Page<Customer> findAllByName(String nameCustomer, Pageable pageable);
    Customer findById(Integer id);
    void delete (Integer id);
    Customer findTopByOrderByCodeDesc();

}
