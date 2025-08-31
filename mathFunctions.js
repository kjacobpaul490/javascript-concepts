/**
 * This function is used to get the math constants.
 * @returns {Void} Void
 */
function mathConstants() {
 
        document.getElementById("lblMathConstants").innerHTML =
        "<p><b>Math.E:</b> " + Math.E + "</p>" +
        "<p><b>Math.PI:</b> " + Math.PI + "</p>" +
        "<p><b>Math.SQRT2:</b> " + Math.SQRT2 + "</p>" +
        "<p><b>Math.SQRT1_2:</b> " + Math.SQRT1_2 + "</p>" +
        "<p><b>Math.LN2:</b> " + Math.LN2 + "</p>" +
        "<p><b>Math.LN10:</b> " + Math.LN10 + "</p>" +
        "<p><b>Math.LOG2E:</b> " + Math.LOG2E + "</p>" +
        "<p><b>Math.Log10E:</b> " + Math.LOG10E + "</p>";
}
/**
 * This function is used to get the math round.
 * @param {number} mathRound
 * @returns {Void} Void
 */
function mathRound(mathRound){
    document.getElementById("lblMathRound").innerHTML = Math.round(mathRound);
}
/**
 * This function is used to get the math ceil.
 * @param {number} mathCeil
 * @returns {Void} Void
 */
function mathCeil(mathCeil){
    document.getElementById("lblMathCeil").innerHTML = Math.ceil(mathCeil);
}
/**
 * This function is used to get the math floor.
 * @param {number} mathFloor
 * @returns {Void} Void
 */
function mathFloor(mathFloor){
    document.getElementById("lblMathFloor").innerHTML = Math.floor(mathFloor);
}
/**
 * This function is used to get the math trunc.
 * @param {number} mathTrunc
 * @returns {Void} Void
 */
function mathTrunc(mathTrunc){
    document.getElementById("lblMathTrunc").innerHTML = Math.trunc(mathTrunc);
}
/**
 * This function is used to get the math sign.
 * @param {number} mathSign
 * @returns {Void} Void
 */
function mathSign(mathSign){
    document.getElementById("lblMathSign").innerHTML = Math.sign(mathSign);
}

/**
 * This function is used to get the math pow.
 * @param {number} mathPow
 * @returns {Void} Void
 */
function mathPow(mathNumber,mathPow){
    document.getElementById("lblMathPow").innerHTML = Math.pow(mathNumber,mathPow);
}
/**
 * This function is used to get the math sqrt.
 * @param {number} mathSqrt
 * @returns {Void} Void
 */
function mathSqrt(mathSqrt){
    document.getElementById("lblMathSqrt").innerHTML = Math.sqrt(mathSqrt);
}
/**
 * This function is used to get the math abs.
 * @param {number} mathAbs
 * @returns {Void} Void
 */
function mathAbs(mathAbs){
    document.getElementById("lblMathAbs").innerHTML = Math.abs(mathAbs);
}