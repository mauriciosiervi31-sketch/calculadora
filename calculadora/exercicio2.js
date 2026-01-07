let operadorUsado = false;

function numero(n) {
    document.getElementById("tela").value += n;
}

function operador(op) {
    let tela = document.getElementById("tela");

    if (tela.value === "") return;
    if (operadorUsado) return;

    tela.value += op;
    operadorUsado = true;
}

function calcular() {
    let tela = document.getElementById("tela");

    if (tela.value === "") return;

    tela.value = eval(tela.value);
    operadorUsado = false;
}

function limpar() {
    document.getElementById("tela").value = "";
    operadorUsado = false;
}
