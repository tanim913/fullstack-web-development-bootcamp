USE sql_store;
SELECT * 
FROM customers 
-- WHERE customer_id = 1 
ORDER BY first_name

SELECT 
	last_name, 
	first_name, 
    points, 
    points * 10 + 100 AS 'increased point'
FROM customers;

SELECT DISTINCT state 
FROM customers;

SELECT * FROM orders WHERE order_date >= '2019-01-01' ;





SELECT 
	name, 
	unit_price,
    unit_price * 1.1 AS new_price
FROM products;
    
select first_name , last_name , 10 as points
from customers
order by points , first_name;

select * 
from order_items
where order_id = 5
order by quantity * unit_price desc