CREATE PROCEDURE create_customer @code varchar(50), @name nvarchar(50), @address ntext, @phone varchar(50), @email varchar(65),
	@passport varchar(50), @account_Bank varchar(50), @payment_term varchar(50), @birth_day varchar(50), @date_range varchar(50), @fax varchar(50),
	@bank varchar(50), @customer_type_id int, @is_delete bit 
	as insert into dbo.customer (code, name, address, phone, email, passport, account_bank, payment_term, birth_day, date_range, fax, bank, customer_type_id, is_delete)
	values (@code, @name, @address, @phone, @email, @passport, @account_Bank, @payment_term, @birth_day, @date_range, @fax, @bank, @customer_type_id, @is_delete)
EXEC create_employee @code='DT012',@name='hoang dung', @address='da nang', @phone = '07123123', @email ='hoangdung@', @passport='pass port',
@account_Bank='LE Hoang Dung', @payment_term='payment term', @birth_day = '13/07', @date_range= 'date range', @fax='23231231', @bank='BIDV',@customer_type_id=1, @is_delete=0

insert into dbo.customer_type (type) values(N'là khách hàng'),(N'là khách hàng thân thiết'),(N'là khách hàng VIP');
select * from dbo.customer
use gardensoft
select * from  customer where  name like concat('%','s','%') and is_delete = 0