var screenDiv = document.getElementById("screen");
var screenNumber = document.getElementById("screenNumber");

var btn0 = document.getElementById("zero");
var btn1 = document.getElementById("one");
var btn2 = document.getElementById("two");
var btn3 = document.getElementById("three");
var btn4 = document.getElementById("four");
var btn5 = document.getElementById("five");
var btn6 = document.getElementById("six");
var btn7 = document.getElementById("seven");
var btn8 = document.getElementById("eight");
var btn9 = document.getElementById("nine");
var btnClear = document.getElementById("clear");
var btnAdd = document.getElementById("add");
var btnSubtract = document.getElementById("subtract");
var btnDivide = document.getElementById("divide");
var btnMultiply = document.getElementById("multiply");
var btnDecimal = document.getElementById("decimalPoint");
var btnEqual = document.getElementById("equal");

var values = [];

btnAdd.addEventListener("click", () => {
    screenNumber.value = screenNumber.value + " + ";
});

btnSubtract.addEventListener("click", () => {
    screenNumber.value = screenNumber.value + " - ";
});

btnDivide.addEventListener("click", () => {
    screenNumber.value = screenNumber.value + " / ";
});

btnMultiply.addEventListener("click", () => {
    screenNumber.value = screenNumber.value + " * ";
});

btnDecimal.addEventListener("click", () => {
    screenNumber.value = screenNumber.value + ".";
});


btn0.addEventListener("click", () => {
    screenNumber.value = screenNumber.value + "0";
    values.push(0);
});

btn1.addEventListener("click", () => {
    screenNumber.value = screenNumber.value + "1";
    values.push(1);
});

btn2.addEventListener("click", () => {
    screenNumber.value = screenNumber.value + "2";
    values.push(2);
});

btn3.addEventListener("click", () => {
    screenNumber.value = screenNumber.value + "3";
    values.push(3);
});

btn4.addEventListener("click", () => {
    screenNumber.value = screenNumber.value + "4";
    values.push(4);
});

btn5.addEventListener("click", () => {
    screenNumber.value = screenNumber.value + "5";
    values.push(5);
});

btn6.addEventListener("click", () => {
    screenNumber.value = screenNumber.value + "6";
    values.push(6);
});

btn7.addEventListener("click", () => {
    screenNumber.value = screenNumber.value + "7";
    values.push(7);
});

btn8.addEventListener("click", () => {
    screenNumber.value = screenNumber.value + "8";
    values.push(8);
});

btn9.addEventListener("click", () => {
    screenNumber.value = screenNumber.value + "9";
    values.push(9);
});

btnClear.addEventListener("click", () => {
    screenNumber.value = "";
});

btnEqual.addEventListener("click", () => {
    screenNumber.value = add();
    values[0] = parseInt(screenNumber.value, 10);
    values.pop();
});


function add() {
    return values[0] + values[1];
}

function subtract() {
    return values[0] - values[1];
}

function multiply() {
    return values[0] * values[1];
}

function divide() {
    return values[0] / values[1];
}