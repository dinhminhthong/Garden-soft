package com.example.gardensoft.repository;

import com.example.gardensoft.model.Customer;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

public interface CustomerRepository extends JpaRepository<Customer, Integer> {
    @Modifying
    @Transactional
    @Query(value = "EXEC create_customer  @code=:code, @name=:name , @address=:address, @phone=:phone, @email=:email, @passport=:passport, @account_bank=:accountBank,@payment_term=:paymentTerm, @birth_day=:birthDay, @date_range=:dateRange, @fax=:fax,@bank=:bank, @customer_type_id=:customer_type_id,@is_delete=:isDelete",nativeQuery = true)
void addCustomer(@Param("code") String code,
                 @Param("name")String name,
                 @Param("address")String address,
                 @Param("phone")String phone,
                 @Param("email")String email,
                 @Param("passport")String passport,
                 @Param("accountBank")String accountBank,
                 @Param("paymentTerm")String paymentTerm,
                 @Param("birthDay")String birthDay,
                 @Param("dateRange")String dateRange,
                 @Param("fax")String fax,
                 @Param("bank")String bank,
                 @Param("customer_type_id")Integer id,
                 @Param("isDelete")boolean isDelete);
    @Query (value = "select * from  customer where  name like concat('%',:nameCustomer,'%') and is_delete = 0", nativeQuery = true)
    Page<Customer> findAllName (@Param("nameCustomer") String nameCustomer, Pageable pageable);
    Customer findTopByOrderByCodeDesc();


}
