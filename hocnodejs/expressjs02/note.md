# JWT

- Access Token ==> Không lưu Server
- Refresh Token ==> Lưu Database, Redis

```
userId = {
    accessToken,
    refreshToken
}
```

# Phân quyền theo vai trò (Phân quyền động)

- Phân quyền theo chức năng / mô đun
- Phân quyền theo dữ liệu

Còn thiếu:

- users_roles
- users_permissions
- Middeware kiểm tra quyền (Xác thực trước)
