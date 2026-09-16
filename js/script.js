const cpf = document.getElementById("cpf");
const telefone = document.getElementById("telefone");
const cep = document.getElementById("cep");


cpf.addEventListener("input", function () {

    let valor = cpf.value.replace(/\D/g, "");

    valor = valor.substring(0, 11);

    if (valor.length > 9) {
        valor = valor.replace(
            /^(\d{3})(\d{3})(\d{3})(\d{1,2})$/,
            "$1.$2.$3-$4"
        );
    } else if (valor.length > 6) {
        valor = valor.replace(
            /^(\d{3})(\d{3})(\d{1,3})$/,
            "$1.$2.$3"
        );
    } else if (valor.length > 3) {
        valor = valor.replace(
            /^(\d{3})(\d{1,3})$/,
            "$1.$2"
        );
    }

    cpf.value = valor;
});


telefone.addEventListener("input", function () {

    let valor = telefone.value.replace(/\D/g, "");

    valor = valor.substring(0, 11);

    if (valor.length > 10) {

        valor = valor.replace(
            /^(\d{2})(\d{5})(\d{4})$/,
            "($1) $2-$3"
        );

    } else if (valor.length > 6) {

        valor = valor.replace(
            /^(\d{2})(\d{4})(\d{1,4})$/,
            "($1) $2-$3"
        );

    } else if (valor.length > 2) {

        valor = valor.replace(
            /^(\d{2})(\d+)/,
            "($1) $2"
        );

    } else if (valor.length > 0) {

        valor = valor.replace(
            /^(\d{0,2})/,
            "($1"
        );
    }

    telefone.value = valor;
});


cep.addEventListener("input", function () {

    let valor = cep.value.replace(/\D/g, "");

    valor = valor.substring(0, 8);

    if (valor.length > 5) {

        valor = valor.replace(
            /^(\d{5})(\d{1,3})$/,
            "$1-$2"
        );

    }

    cep.value = valor;
});