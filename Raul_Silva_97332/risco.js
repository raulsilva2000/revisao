function calcularRisco(event){
    event.preventDefault();

    let idade = $('#idade').val();
    $('#result').css('color','red');

    if(idade=="" || idade<0){
        $('#result').html('Parametros Invalidos');
        return;
    }

    let atividadeFisicaValue;
    let atividadeFisicaPosicao=0;

    if(document.getElementById("intensa").checked){
        atividadeFisicaValue = "Intensa";
        atividadeFisicaPosicao = 1;
    } else if(document.getElementById("moderada").checked){
        atividadeFisicaValue = "Moderada";
        atividadeFisicaPosicao = 2;
    } else if(document.getElementById("leve").checked){
        atividadeFisicaValue = "Leve";
        atividadeFisicaPosicao = 3;
    } else if(document.getElementById("nula").checked){
        atividadeFisicaValue = "Nula";
        atividadeFisicaPosicao = 4;
    } else{
        $('#result').html('Parametros Invalidos');
        return;
    }

    let rc=0;

    if(idade<=30){
        rc = rc + 0;
    } else if(idade>=31 && idade<=45){
        rc++;
    } else if(idade>=46 && idade<=50){
        rc = rc + 3;
    } else{
        rc = rc + 5;
    }
    console.log(rc);

    if(atividadeFisicaValue=='Intensa'){
        rc++;
    } else if(atividadeFisicaValue=='Moderada'){
        rc = rc + 2;
    } else if(atividadeFisicaValue=='Leve'){
        rc = rc + 3;
    } else {
        rc = rc + 6;
    }

    console.log(rc);

    let resultado;

    if(rc>=0&&rc<=1){
        resultado = 'NULO';
    } else if(rc>=2&&rc<=3){
        resultado = 'BAIXO';
    } else if(rc>=4&&rc<=6){
        resultado = 'MODERADO';
    } else if(rc>=7&&rc<=9){
        resultado = 'ALTO';
    } else{
        resultado = 'ELEVADO';
    }

    $('.grid-container').append(`<div class="grid-item">Idade: <p id="valorNegrito">${idade}</p></div>`);
    $('.grid-container').append(`<div class="grid-item">AF: <p id="valorNegrito">${atividadeFisicaPosicao}</p></div>`);
    $('.grid-container').append(`<div class="grid-item">RC: <p id="valorNegrito">${resultado}</p></div>`);

    
}