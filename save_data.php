<?php
include 'connect.php';

$name = $_POST['name'];
$phone = $_POST['phone'];
$guests = $_POST['guests'];
$date = $_POST['date'];
$time = $_POST['time'];
$requests = $_POST['requests'];

$query = "INSERT INTO reservations (name, phone, guests, date, time, requests) 
          VALUES ('$name', '$phone', '$guests', '$date', '$time', '$requests')";
if ($conn->query($query) === TRUE) {
    echo "Dữ liệu đã được lưu!";
} else {
    echo "Lỗi: " . $conn->error;
}
?>
