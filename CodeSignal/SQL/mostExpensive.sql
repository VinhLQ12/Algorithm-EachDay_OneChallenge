CREATE PROCEDURE solution()
BEGIN
    select name
    from Products
    ORDER BY price*quantity desc, name asc
    limit 1;
END