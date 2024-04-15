function calculando() {
    let opcao = document.querySelector("#opcao").value;
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    let res = 0;

    switch (opcao) {
        case "adicao":
            res = num1 + num2;
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
        case "mod":
            res = num1 % num2;
            break;
        case "potencia":
            res = num1 ** num2;
            break;
        case "log":
            res = Math.log10(num1);
            document.getElementById('num2').value = (null);
            break;
        case "sqrt":
            res = Math.sqrt(num1);
            document.getElementById('num2').value = (null);
            break;
        case "porcentagem":
            res = num1 / 100;
            document.getElementById('num2').value = (null);
            break
    }
    document.getElementById('resultado').innerHTML = (res);
    console.log(opcao);
    console.log(num1);
    console.log(res);
}

function tiraNum2() {
    let opcao = document.querySelector("#opcao").value;

    switch (opcao) {
        case "log":
            document.getElementById('num2').placeholder = ("Este espaço não será utilizado");
            document.getElementById('num2').value = (null);
            break;
        case "sqrt":
            document.getElementById('num2').placeholder = ("Este espaço não será utilizado");
            document.getElementById('num2').value = (null);
            break;
        case "porcentagem":
            document.getElementById('num2').placeholder = ("Este espaço não será utilizado");
            document.getElementById('num2').value = (null);
            break;
        default:
            document.getElementById('num2').placeholder = ("");
    }
}