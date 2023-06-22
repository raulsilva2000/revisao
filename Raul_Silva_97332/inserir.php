<?php
$servername = "localhost";
$username = "root";
$password = "1234";
$dbname = "ptw";

$data = json_decode($_POST['data'], true);

try {
    $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    $stmtIdAtividade = $conn->prepare("SELECT id FROM atividadefisica WHERE descricao='{$data['af']}'");
    $stmtIdAtividade->execute();
    $idAtividade = $stmtIdAtividade->fetch(PDO::FETCH_ASSOC);

    $stmt = $conn->prepare( "INSERT INTO riscocardiovascular (nome, idade, af) VALUES ('{$data['nome']}', '{$data['idade']}', {$idAtividade['id']}) ");
    $stmt->execute();

    echo "Sucesso";
}
catch(PDOException $e) {
    echo "Error: " . $e->getMessage();
}
?>