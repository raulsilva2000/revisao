<?php
$servername = "localhost";
$username = "root";
$password = "1234";
$dbname = "ptw";

$data = json_decode($_POST['data'], true);

try {
    $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    $stmtIdFamilia = $conn->prepare("SELECT id FROM cvfamilias WHERE familia='{$data['familia']}'");
    $stmtIdFamilia->execute();
    $idfamilia = $stmtIdFamilia->fetch(PDO::FETCH_ASSOC);

    $stmt = $conn->prepare( "INSERT INTO cvtipos (tipo, cor, idfamilia) VALUES ('{$data['tipo']}', '{$data['cor']}', {$idfamilia['id']}) ");
    $stmt->execute();

    echo "Sucesso";
}
catch(PDOException $e) {
    echo "Error: " . $e->getMessage();
}
?>