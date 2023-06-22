
<!DOCTYPE html>
<html>
<head>
<link rel="stylesheet" href="risco.css">
<title>Cálculo do Risco Cardiovasculas</title>
</head>

<body>
<h2>Cálculo do Risco Cardiovasculas</h2>

<form id="formCalcular" method="POST" onsubmit="calcularRisco(event)">
    <label for="idade">Idade:</label>
    <input type="number" id="idade" name="idade">

    <label>Atividade Física:</label>
    
    <div id="ativadeFisicaOpcoes">
        <label class="container">Intensa
        <input type="radio" name="radio" id="intensa">
        </label>
        
        <label class="container">Moderada
        <input type="radio" name="radio" id="moderada">
        </label>

        <label class="container">Leve
        <input type="radio" name="radio" id="leve">
        </label>
        
        <label class="container">Nula
        <input type="radio" name="radio" id="nula">
        </label>
    </div>

    <input type="submit" value="Calcular Risco">
</form>

<p id="result"></p>

<div class="grid-container">

</div>

</body>

<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.4/jquery.min.js"></script>
<script src="risco.js"></script>

</html>