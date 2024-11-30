<?php
include 'connect.php';

$query = "SELECT * FROM reservations ORDER BY date DESC, time DESC";
$result = $conn->query($query);

echo "<table border='1'>";
echo "<tr><th>Họ và Tên</th><th>Số Điện Thoại</th><th>Số Khách</th><th>Ngày</th><th>Thời Gian</th><th>Yêu Cầu</th></tr>";
while ($row = $result->fetch_assoc()) {
    echo "<tr>
            <td>{$row['name']}</td>
            <td>{$row['phone']}</td>
            <td>{$row['guests']}</td>
            <td>{$row['date']}</td>
            <td>{$row['time']}</td>
            <td>{$row['requests']}</td>
          </tr>";
}
echo "</table>";
?>
