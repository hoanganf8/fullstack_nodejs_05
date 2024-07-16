-- Bài tập 1: Lấy danh sách học viên (Đủ thông tin và số điện thoại) 
-- của giảng viên có email là hoangan@gmail.com

-- Bài tập 2: Bổ sung điều kiện: Khóa học được kích hoạt

-- Bài 3: Bổ sung: Lấy ra 1 user mới nhất đăng ký khóa học

-- SELECT users.*, phones.value AS phone 
-- FROM users 
-- INNER JOIN phones
-- ON users.id = phones.user_id
-- INNER JOIN users_courses 
-- ON users.id = users_courses.user_id
-- INNER JOIN courses
-- ON users_courses.course_id = courses.id
-- INNER JOIN courses_teachers 
-- ON courses_teachers.course_id = courses.id
-- INNER JOIN teacher
-- ON courses_teachers.teacher_id = teacher.id
-- WHERE teacher.email = 'hoangan@gmail.com' AND users_courses.status = true
-- ORDER BY users_courses.created_at DESC
-- LIMIT 1



