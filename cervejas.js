function loadFamilias() {
    $.ajax({
        url: 'familias.php',
        success: function (response) {
            const dataArray = JSON.parse(response);
            dataArray.forEach(element => {
                $("#familias").append(`<option value="${element["familia"]}">${element["familia"]}</option>`);
            });
        },
        error: function (xhr) {
            alert("Erro: " + xhr.status + " " + xhr.statusText);
        }
    });
}

function loadTipos(familiaInput){
    if(familiaInput!=""){ //se nao for o value da opcao 'Selecione uma familia'
        const obj = {
            familia: familiaInput
        }
    
        $.ajax({
            url: 'tipos.php',
            type: 'POST',
            data: { data: obj },
            success: function (response) {
                const dataArray = JSON.parse(response);
                $("div").remove(".grid-item"); //remover todos os div que tenham a classe grid-item
                dataArray.forEach(element => {
                    $(".grid-container").append(`<div class="grid-item" style="background-color: ${element["cor"].toLowerCase()}">${element["tipo"]}</div>
                    <div class="grid-item" style="background-color: ${element["cor"].toLowerCase()}">${element["cor"]}</div>`);
                });
            },
            error: function (xhr) {
                alert("Erro: " + xhr.status + " " + xhr.statusText);
            }
        });
    }else{
        $('div').remove('.grid-item'); //limpar tabela se opcao for a default
    }
}

function loadCores(){
    $.ajax({
        url: 'cores.php',
        success: function (response) {
            const dataArray = JSON.parse(response);
            dataArray.forEach(element => {
                $("#cores").append(`<option value="${element["cor"]}">${element["cor"]}</option>`);
            });
        },
        error: function(xhr) {
            alert("Erro: " + xhr.status + " " + xhr.statusText);
        }
    });
}

loadFamilias();
loadCores();

function inserirNovo(event){
    event.preventDefault();

    if($('#familias').val()==""){
        alert("Selecione uma familia");
    } else{
        const obj = {
            tipo: $('#tipo').val(),
            cor: $('#cores').val(),
            familia: $('#familias').val()
        }
    
        $.ajax({
            url: 'inserir.php',
            type: 'POST',
            data: {data: JSON.stringify(obj)},
            success: function (response) {
                console.log(response);
                if(response=="Sucesso"){
                    alert("Novo tipo adicionado");
                }else{
                    alert("Erro ao adicionar");
                }
            },
            error: function(xhr) {
                alert("Erro: " + xhr.status + " " + xhr.statusText);
            }
        });
    }
}