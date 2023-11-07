package com.example.gardensoft.service;

import com.example.gardensoft.dto.CustomerDTO;
import com.example.gardensoft.model.Customer;
import com.example.gardensoft.repository.CustomerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CustomerService implements ICustomerService {
    @Autowired
    private CustomerRepository customerRepository;

    @Override
    public List<Customer> findAll() {

        return customerRepository.findAll();
    }

    @Override
    public void saveAllEmployee(List<CustomerDTO> customerDTOList) {
        for (int i = 0; i < customerDTOList.size(); i++) {
            this.add(customerDTOList.get(i));
        }
    }

    @Override
    public void add(CustomerDTO customerDTO) {
            customerRepository.addCustomer(
                    customerDTO.getCode(),
                    customerDTO.getName(),
                     customerDTO.getAddress(),
                    customerDTO.getPhone(),
                    customerDTO.getEmail(),
                    customerDTO.getPassport(),
                    customerDTO.getAccountBank(),
                    customerDTO.getPaymentTerm(),
                    customerDTO.getBirthDay(),
                    customerDTO.getDateRange(),
                    customerDTO.getFax(),
                    customerDTO.getBank(),
                    customerDTO.getCustomerType().getId(),
                    false);
    }

    @Override
    public Page<Customer> findAllByList(Pageable pageable) {
        return customerRepository.findAll(pageable);
    }

    @Override
    public Page<Customer> findAllByName(String nameCustomer, Pageable pageable) {
        return this.customerRepository.findAllName(nameCustomer, pageable);
    }

    @Override
    public Customer findById(Integer id) {
        return customerRepository.findById(id).get();
    }

    @Override
    public void delete(Integer id) {
        Customer customer =findById(id);
        customer.setDelete(true);
        customerRepository.save(customer);
    }

    @Override
    public Customer findTopByOrderByCodeDesc() {
        return customerRepository.findTopByOrderByCodeDesc();
    }

}
