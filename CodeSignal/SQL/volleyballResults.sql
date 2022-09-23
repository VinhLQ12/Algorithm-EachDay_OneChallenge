CREATE PROCEDURE solution()
BEGIN
    select *
    from results
    ORDER by wins ASC;
END