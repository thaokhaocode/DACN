<?php
session_start();
include 'connect.php';

$username = $_POST['username'];
$password = $_POST['password'];

// Kiểm tra tài khoản
$query = "SELECT * FROM admins WHERE username = '$username' AND password = '$password'";
$result = $conn->query($query);

if ($result->num_rows > 0) {
    $_SESSION['admin'] = $username;
    header("Location: http://localhost/xampp/DACN_LETANAN_22CNTT1/admin.html");
} else {
    echo "Tên đăng nhập hoặc mật khẩu không đúng!";
}
?>
