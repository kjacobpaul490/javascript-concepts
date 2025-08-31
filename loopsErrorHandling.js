
let y=0
function loop(x) {
    try {
          
        if (x > 10) {
            throw "Number is not greater than 10"
          
        }
        alert(y);

    } catch (error) {
        document.getElementById("lblLoopResult").innerHTML = error;
    }
    finally{
        document.getElementById("lblFinalBlock").innerHTML = "I dont care blocks!";
    }



}
