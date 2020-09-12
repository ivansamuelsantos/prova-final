function submeter() {
    var nome = document.getElementById("nome");
    var dataNasc = document.getElementById("data-nasc");
    var ano = document.getElementById("ano");
    var materia = document.getElementById("materia");

    if (nome.value == "" || dataNasc.value == "" || ano.value == "" || materia.value == "") {
        alert("Todos os campos são obrigatórios");
        return;
    } else {
        alert("O cadastro foi efetuado com sucesso no seu imaginário :)");
    }
}

function limpar() {
    document.getElementById("nome").value = "";
    document.getElementById("data-nasc").value = "";
    document.getElementById("ano").value = "";
    document.getElementById("materia").value = "";
    document.getElementById("nome").focus();
}