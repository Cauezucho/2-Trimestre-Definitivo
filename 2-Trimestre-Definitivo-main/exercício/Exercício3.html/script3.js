let num1;
let num2;
let resultado;

function sobra() {
    num1 = Number(window.prompt("digite um número"));
    num2 = Number(window.prompt("digite um número"));

    resultado = num1 % num2;
    numero = resultado % 2;

    alert("O resultado é" + resultado + ".");
    if (numero == 0) {
        alert ("Par");
    } else {
        alert ("Ímpar");
    }
}

function multiplicacao() {
    num1 = Number(window.prompt("digite um número"));
    num2 = Number(window.prompt("digite um número"));

    resultado = num1 * num2;

    alert("O resultado é" + resultado);
}

function adicao() {
    num1 = Number(window.prompt("digite um número"));
    num2 = Number(window.prompt("digite um número"));

    resultado = num1 + num2;

    alert("O resultado é" + resultado);

}

function subtracao() {
    num1 = Number(window.prompt("digite um número"));
    num2 = Number(window.prompt("digite um número"));

    resultado = num1 - num2;

    alert("O resultado é " + resultado);
}