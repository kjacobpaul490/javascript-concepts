function addNumbers(a, b) {
    a = Number(a);
    b = Number(b);
    document.getElementById("lblResult").innerHTML = a + b;

}

function subNumbers(a, b) {
    a = Number(a);
    b = Number(b);
    document.getElementById("lblResult").innerHTML = a - b;

}
function mulNumbers(a, b) {
    a = Number(a);
    b = Number(b);
    document.getElementById("lblResult").innerHTML = a * b;

}
function divNumbers(a, b) {
    a = Number(a);
    b = Number(b);
    document.getElementById("lblResult").innerHTML = a / b;

}
function modNumbers(a, b) {
    a = Number(a);
    b = Number(b);
    document.getElementById("lblResult").innerHTML = a % b;

}
function expoNumbers(a){
    a = Number(a);
    document.getElementById("lblResult").innerHTML = a**2;
}
function incNumbers(numb){
    debugger;
    numb = Number(numb);
    numb++;
    document.getElementById("lblResult").innerHTML = numb;
}
function decNumbers(x){
    debugger;
     x = Number(x);
     x--;
    document.getElementById("lblResult").innerHTML = x ;
}