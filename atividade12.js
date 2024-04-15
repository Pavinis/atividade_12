function calculando() {
    let opcao = document.querySelector("#opcao").value;
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    let res = 0;

    switch (opcao) {
        case "adicao":
            res = (num1 + num2);
            break;
        case "subtracao":
            res = num1 - num2;
            break;
        case "multiplicacao":
            res = num1 * num2;
            break;
        case "divisao":
            res = num1 / num2;
            break;
    }
    document.getElementById('resultado').innerHTML = ("   " + res);
    console.log(opcao);
    console.log(num1);
    console.log(res);
}