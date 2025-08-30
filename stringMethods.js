/**
 * This function is used to get the length of the string.
 * @param {String} string - string.
 * @returns {Void} Void
 */
function lengthStringMethods(string){
    document.getElementById("lblLengthResult").innerHTML = string.length;
    
}
/**
 * This function is used to concat the two strings.
 * @param {string} fname 
 * @param {string} lname 
 * @returns {Void} Void
 */
function concatStringMethods(fname,lname){
    debugger
    document.getElementById("lblFullNameResult").innerHTML = fname + " " + lname;
    document.getElementById("lblFullNameConcatMethodResult").innerHTML = fname.concat(lname);
    document.getElementById("lblFullNameConcatSpaceMethodResult").innerHTML = fname.concat("\n"+lname);// \n will as gives the space between the two strings
}

/**
 * This function is used to get the index of the string.
 * @param {string} string 
 * @param {string} search 
 * @returns {Void} Void
 * jacob -[j,a,c,o,b] single charater
 *        [0,1,2,3,4] index
 * jacob  -[ja,c,o,b] ja charater
 *         [0,1,2,3] index
 * jacob  -[jac,o,b] jac charater
 *         [0,1,2] index
 * jacob  -[jacob] jacob charater
 *         [0] index
 * jacob  -[j,a,c,o,b]  jsdfdfsd
 *         [-1] index
 */
function indexOfStringMethods(companyName,searchText){
    document.getElementById("lblIndexOfResult").innerHTML = companyName.indexOf(searchText);
}
/**
 * This function is used to get the slice of the string.
 * @param {string} sliceString
 * @param {number} start
 * @param {number} end
 * @returns {Void} Void
 */
function sliceStringMethods(sliceString,start,end){
  
    document.getElementById("lblSliceResult").innerHTML = sliceString.slice(Number(start),Number(end));
}