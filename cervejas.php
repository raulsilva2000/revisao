<?php
// Start the session
session_start();

if(isset($_SESSION['visitas'])){
    $_SESSION['visitas']++;
} else{
    $_SESSION['visitas'] = 1;
}

?>

<!DOCTYPE html>
<html>
<head>
<link rel="stylesheet" href="cervejas.css">
<title>Famílias de Cervejas</title>
</head>

<body>
<h2>Tipos de Cervejas</h2>

<label for="familias">Família:</label>
<select id="familias" onchange="loadTipos(this.value)">
    <option value="">Selecione a família...</option>
</select>

<div class="grid-container">
  <div class="grid-title">Tipo</div>
  <div class="grid-title">Cor</div>
</div>

<br><br>

<form id="formInserir" method="POST" onsubmit="inserirNovo(event)">
    <label for="tipo">Tipo:</label>
    <input type="text" id="tipo" name="tipo" required>

    <label for="cores">Cor:</label>
    <select id="cores" required>
        <option value="">Selecione a cor...</option>
    </select>

    <input type="submit" value="Inserir">
</form>

<p id="footer">Total de visitas: <?php echo $_SESSION['visitas'] ?></p>

</body>

<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.4/jquery.min.js"></script>
<script src="cervejas.js"></script>

</html>