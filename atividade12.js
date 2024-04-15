function calculando() {
    let opcao = document.querySelector("#opcao").value;
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    let res = 0;

    switch (opcao) {
        case "adicao":
            res = num1 + num2;
        case "subtracao":
            res = num1 - num2;
        case "multiplicacao":
            res = num1 * num2;
        case "divisao":
            res = num1 / num2;
        default:
            res = null;
    }
    document.getElementById('resultado').innerHTML = res;
    console.log(opcao);
    console.log(num1);
    console.log(res);
}