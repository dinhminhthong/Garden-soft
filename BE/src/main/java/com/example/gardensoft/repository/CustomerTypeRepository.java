package com.example.gardensoft.repository;

import com.example.gardensoft.model.CustomerType;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CustomerTypeRepository extends JpaRepository<CustomerType,Integer> {
   CustomerType findById (int id);
}
