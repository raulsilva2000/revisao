<?php
$servername = "localhost";
$username = "root";
$password = "1234";
$dbname = "ptw";

$data = json_decode($_POST["data"],true);

try {
    $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $stmt = $conn->prepare("SELECT tipo, cor FROM cvtipos INNER JOIN cvfamilias ON cvfamilias.id=cvtipos.idfamilia WHERE familia='{$data['familia']}'");
    $stmt->execute();
    $result = $stmt->fetchAll(PDO::FETCH_ASSOC);
    
    echo json_encode($result);
}
catch(PDOException $e) {
    echo "Error: " . $e->getMessage();
}
?>