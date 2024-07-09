SELECT users.*, phones.value as phone_number, phones.id
FROM users 
LEFT JOIN phones 
ON users.id=phones.user_id
--WHERE phones.value='0123456787';
ORDER BY users.id DESC;