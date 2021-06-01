function botaoPesquisar() {
    var cep = $('#cep').val();
    $.ajax({
        url: "https://brasilapi.com.br/api/cep/v1/" + cep
    }).then(data => preencherCampos(data));
}

function preencherCampos(data) {
    $('#nomeCidade').text(data.city);
    $('#nomeEstado').text(data.state);
    //$('#conteudo').html(`<p>Cidade: ${data.city}</p> <p>Estado: ${data.state}</p>`);
}