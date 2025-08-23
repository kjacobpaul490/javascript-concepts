add()
function add() {



  console.log("Type of a is " + typeof a);
}
function knowVariableType() {
  
var numA=10;
var stringB="10";
var booleanC=true;
var arrayD=['a','b','c']



document.getElementById("pTypea").innerHTML =  typeof numA +" " + typeof stringB +" " + typeof booleanC + ' '+ typeof arrayD;



}