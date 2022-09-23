CREATE PROCEDURE solution()
BEGIN
    SELECT id, scholarship/12 as scholarship
    from scholarships;
END