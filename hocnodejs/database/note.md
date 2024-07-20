# Kiểu dữ liệu

- Nhóm Number

* integer
* smallint
* bigint
* double

- Nhóm String

* char ==> Ký tự cố định
* varchar ==> Chuỗi biến đổi
* text ==> Chuỗi dài (Phụ thuộc vào cơ sở dữ liệu)

- Nhóm Boolean

* boolean: true/false

- Nhóm DateTime

* timestamp with timezone
* timestamp without timezone
* date

# Toán tử

```
=, >, <, >=, <=
!= (<>) ==> Toán tử khác
AND, OR, NOT
IN
BETWEEN
IS NULL
EXISTS
LIKE, ILIKE
```

1. SELECT
2. FROM
3. JOIN
4. WHERE
5. GROUP BY
6. HAVING
7. ORDER BY
8. LIMIT / OFFSET

# Các loại quan hệ (Áp dụng từ 2 bảng trở lên)

## Quan hệ 1-1

- 1 bản ghi của bảng này liên kết với bản ghi của bảng khác
- Ví dụ: 1 user có 1 cccd

## Quan hệ 1-n

- 1 bản ghi của bảng này liên kết với 1 hoặc nhiều bản ghi của bảng khác
- Ví dụ: 1 user có thể có nhiều bài posts

## Quan hệ n-n

- 1 bản ghi của bảng này có thể liên kết với nhiều bản ghi của bảng khác và ngược lại
- Ví dụ: 1 tác giả có thể có nhiều cuốn sách, 1 cuốn sách có thể thuộc nhiều tác giả

Lưu ý:

- Trong quan hệ Database để liên kết được thông qua các trường có tên là khóa ngoại (Foreign key)
- Các khóa ngoại này được tham chiếu tới khóa chính của bảng cần liên kết
- Với quan hệ n-n ==> Phải có bảng trung gian

Table books

- id
- name
- price

Table authors

- id
- name
- address

Table books_authors

- id
- book_id ==> books.id
- author_id ==> authors.id

Đặt unique: name và email

==> 1
Name: Hoàng An
Email: hoangan.web@gmail.com

==> 2
Name: Hoàng An
Email: hoanganit19@gmail.com

Đặt Unique: email

==> 1
Name: Hoàng An
Email: hoangan.web@gmail.com

==> 2
Name: Hoàng An
Email: hoanganit19@gmail.com

pg_dump -U postgres -h localhost f8_fullstack_k5 >> f8_fullstack_k5.sql
