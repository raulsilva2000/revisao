function loadAF(){
    $.ajax({
        url: 'afisicas.php',
        success: function (response) {
            const dataArray = JSON.parse(response);
            dataArray.forEach(element => {
                $("#af").append(`<option value="${element["descricao"]}">${element["descricao"]}</option>`);
            });
        },
        error: function(xhr) {
            alert("Erro: " + xhr.status + " " + xhr.statusText);
        }
    });
}

function inserirNovo(event){
    event.preventDefault();

    if( ($('#nome').val()=="") || ($('#af').val()=="") || ($('#idade').val()=="") ){
        $('#status').html("Parâmetros Inválidos");
        $('.footer').show();
        setTimeout(function() {$('.footer').hide()}, 4000);
    } else{
        const obj = {
            nome: $('#nome').val(),
            af: $('#af').val(),
            idade: $('#idade').val()
        }
    
        $.ajax({
            url: 'inserir.php',
            type: 'POST',
            data: {data: JSON.stringify(obj)},
            success: function (response) {
                console.log(response);
                if(response=="Sucesso"){
                    $('#status').html("Registo inserido com sucesso");
                }else{
                    $('#status').html("Erro ao inserir registo");
                }
                $('.footer').show();
                setTimeout(function() {$('.footer').hide()}, 4000);
            },
            error: function(xhr) {
                $('#status').html("Erro ao inserir registo");
                $('.footer').show();
                setTimeout(function() {$('.footer').hide()}, 4000);
            }
        });
    }
}

loadAF();