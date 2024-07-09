-- Demo câu lệnh SQL

-- Insert record vào table
-- INSERT INTO users(id,name,email,password,status,created_at,updated_at) 
-- VALUES(3, 'User 3', 'user3@gmail.com', MD5('123456'),true, NOW(), NOW());

-- Update record
-- UPDATE users SET name='User 2 - Update', email='user2-update@gmail.com', updated_at=NOW()
-- WHERE id=2;

-- Delete Record
-- DELETE FROM users WHERE id = 2;

-- Listing Record
-- SELECT id,name AS fullname,email,status FROM users WHERE id=1;
-- SELECT * FROM users WHERE status=false AND (name ILIKE '%user1%' OR email ILIKE '%user1%')

-- Sắp xếp: ORDER BY
SELECT * FROM users ORDER BY id DESC OFFSET 1 LIMIT 2;









