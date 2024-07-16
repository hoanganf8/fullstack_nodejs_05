-- COUNT, SUM, MAX, MIN, AVG ==> Kết hợp với Group By

-- GROUP BY column1, column2,...

SELECT COUNT(id) AS user_count, status 
FROM users 
GROUP BY status
HAVING COUNT(id)>1;

-- Bài tập 1: Lấy danh sách users và số lượng khóa học đã mua của từng user

-- Bài tập 2: Sắp xếp giảm dần thứ tự theo số lượng khóa học đã mua
SELECT users.*, phones.value AS phone_number, COUNT(users_courses.user_id) AS course_count
FROM users 
INNER JOIN phones
ON users.id = phones.user_id
LEFT JOIN users_courses
ON users.id=users_courses.user_id
GROUP BY users.id, phones.value
ORDER BY course_count DESC
LIMIT 1;

-- Buổi sau: SubQuery
-- 1. SubQuery sau Select
-- 2. SubQuery sau Where
-- 3. SubQuery sau Group By
-- 4. SubQuery sau Having
-- 5. SubQuery sau From (Bảng tạm)









