<?php
$servername = "localhost";
$username = "root";
$password = "1234";
$dbname = "ptw";

try {
    $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $stmt = $conn->prepare("SELECT familia FROM cvfamilias");
    $stmt->execute();
    
    $result = $stmt->fetchAll(PDO::FETCH_ASSOC);

    echo json_encode($result);
}
catch(PDOException $e) {
    echo "Error: " . $e->getMessage();
}
?>