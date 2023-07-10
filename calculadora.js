function calcular() {
    var numero1 = parseFloat(document.getElementById("numero1").value);
    var numero2 = parseFloat(document.getElementById("numero2").value);
    var operador = document.getElementById("operador").value;
    var resultado;

    switch (operador) {
        case 'soma':
            resultado = numero1 + numero2;
            break;
        case 'subtracao':
            resultado = numero1 - numero2;
            break;
        case 'multiplicacao':
            resultado = numero1 * numero2;
            break;
        case 'divisao':
            resultado = numero1 / numero2;
            break;
        default:
            resultado = "Operação inválida";
            break;
    }

    document.getElementById("resultado").textContent = resultado;
}
