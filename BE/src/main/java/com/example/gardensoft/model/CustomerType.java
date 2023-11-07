package com.example.gardensoft.model;

import com.fasterxml.jackson.annotation.JsonBackReference;

import javax.persistence.*;
import java.util.Set;

@Entity
public class CustomerType {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
//    @Column(name = "id_type")
    private int id;
    @Column(columnDefinition = "nvarchar(50)")
    private String type;

    @OneToMany(mappedBy = "customerType")
    @JsonBackReference
    private Set<Customer> customers;

    public CustomerType() {
    }



    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public Set<Customer> getCustomers() {
        return customers;
    }

    public void setEmployees(Set<Customer> customers) {
        this.customers = customers;
    }
}
