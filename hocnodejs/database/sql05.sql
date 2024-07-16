-- CASE WHEN THEN ELSE END
-- CASE
--     WHEN condition1 THEN result1
--     WHEN condition2 THEN result2
--     WHEN conditionN THEN resultN
--     ELSE result
-- END;
-- SELECT *, 
-- (CASE 
--  WHEN status=true THEN 'Kích hoạt'
--  WHEN status=false THEN 'Chưa kích hoạt'
--  ELSE 'Chưa xác định'
-- END) AS status_text
-- FROM users;

--Bài tập 1: 
-- Tạo thêm 1 cột ở câu lệnh truy vấn có tên 'discount'
-- Giá trị cột discount theo điều kiện sau: 
-- Nếu giá khóa học từ 600.000 trở lên -> 10%, ngược lại là 0

-- Bài tập 2:
-- Tạo thêm cột "sale_price" thể hiện giá cần phải thanh toán (Sau khi đã trừ discount)
-- SELECT 
-- *, 
-- (CASE 
-- 	WHEN price >= 600000 THEN '10%'
-- 	ELSE '0'
-- END) AS discount,
-- (price - price * (CASE 
-- 	WHEN price >= 600000 THEN 10
-- 	ELSE 0
-- END)/100) AS sale_price
-- FROM courses;

-- SELECT users.*, (SELECT COUNT(id)
-- 				 FROM users_courses 
-- 				 WHERE users.id=users_courses.user_id AND users_courses.status=true
-- 				) AS course_count
-- FROM users
-- ORDER BY course_count DESC

-- Bài tập: Hiển thị thông tin giảng viên và số lượng khóa học của giảng viên đó 
-- (Làm theo 2 cách)

SELECT teacher.*, COUNT(courses_teachers.teacher_id) AS course_count
FROM teacher
LEFT JOIN courses_teachers
ON teacher.id=courses_teachers.teacher_id
GROUP BY teacher.id

-- Bài tập: Hiển thị 1 giảng viên có số lượng học viên lớn nhất
-- Bước 1: Hiển thị thông tin giảng và số lượng học viên từng giảng viên
-- Bước 2: Tìm số lượng học viên lớn nhất
-- Bước 3: Having của bước 1 = giá trị của bước 2

-- SELECT teacher.*, COUNT(DISTINCT users_courses.user_id) AS user_count
-- FROM teacher
-- INNER JOIN courses_teachers 
-- ON teacher.id=courses_teachers.teacher_id
-- LEFT JOIN users_courses
-- ON courses_teachers.course_id=users_courses.course_id
-- GROUP BY teacher.id
-- HAVING COUNT(DISTINCT users_courses.user_id) = (SELECT MAX(user_count) 
-- FROM (
-- 	SELECT COUNT(DISTINCT users_courses.user_id) AS user_count
-- 	FROM courses_teachers 
-- 	LEFT JOIN users_courses
-- 	ON courses_teachers.course_id=users_courses.course_id
-- 	GROUP BY courses_teachers.teacher_id
-- ))

-- Lấy danh sách users đã mua khóa học
SELECT * 
FROM users 
WHERE EXISTS 
(SELECT id FROM users_courses WHERE status=true AND user_id=users.id)

-- Bài tập: Xóa các học viên của giảng viên chứa từ khóa là "huy" (name, email)
DELETE FROM users WHERE id IN (SELECT DISTINCT users.id 
FROM users
INNER JOIN users_courses
ON users.id = users_courses.user_id
INNER JOIN courses_teachers
ON users_courses.course_id = courses_teachers.course_id
INNER JOIN teacher
ON courses_teachers.teacher_id = teacher.id
WHERE teacher.name ILIKE '%huy%' OR teacher.email ILIKE '%huy%'
)







