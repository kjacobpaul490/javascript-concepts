function normalComapre(a, b) {

    const resultElement = document.getElementById('result');
    if (a == b) {
        resultElement.textContent = 'true';
    } else {
        resultElement.textContent = 'false';
    }
}
function normalTypeComapre(a, b) {
    a = Number(a);

    const resultElement = document.getElementById('result');
    if (a === b) {
        resultElement.textContent = 'true';
    } else {
        resultElement.textContent = 'false';
    }
}
function ternary(a, b) {
    debugger;

    const resultElement = document.getElementById('result');
    (a > b) ? resultElement.textContent = 'true' : resultElement.textContent = 'false';

}




