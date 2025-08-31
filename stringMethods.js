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
    try {
        ;
        document.getElementById("lblSliceResult").innerHTML = sliceString.slice(Number(start),Number(end));
    } catch (error) {
        document.getElementById("lblSliceResult").innerHTML = "Error: " + error;
    }
  
   
}
/**
 * This function is used to split the string.
 * @param {string} splitString
 * @param {string} splitBy
 * @returns {Void} Void
 */
function splitStringMethods(splitString,splitBy){
    
    var arrydata = splitString.split(splitBy);
    var loopElement = "";
    for(var i = 0; i < arrydata.length; i++){
        loopElement = loopElement + `<li>${arrydata[i]}</li>`;
    }
    document.getElementById("lblSplitResult").innerHTML = `<ul> ${loopElement}</ul>`;

}
/**
 * This function is used to get the substring of the string.
 * @param {string} substringString
 * @param {number} start
 * @param {number} end
 * @returns {Void} Void
 */
function substringStringMethods(substringString,start,end){
    document.getElementById("lblSubstringResult").innerHTML = substringString.substring(Number(start),Number(end));
}
/**
 * This function is used to get the upper case of the string.
 * @param {string} upperCaseString
 * @returns {Void} Void
 */
function toUpperCaseStringMethods(upperCaseString){
    document.getElementById("lblUpperCaseResult").innerHTML = upperCaseString.toUpperCase();
}
/**
 * This function is used to get the lower case of the string.
 * @param {string} lowerCaseString
 * @returns {Void} Void
 */
function toLowerCaseStringMethods(lowerCaseString){
    document.getElementById("lblLowerCaseResult").innerHTML = lowerCaseString.toLowerCase();
}
/**
 * This function is used to get the trim of the string.
 * @param {string} trimString
 * @returns {Void} Void
 */
function trimStringMethods(trimString){
    document.getElementById("lblTrimResult").innerHTML = trimString.trim();
}
/**
 * This function is used to get the replace of the string.
 * @param {string} replaceString
 * @param {string} replaceWith
 * @returns {Void} Void
 */
function replaceStringMethods(replaceString,replace,replaceWith){
    
    document.getElementById("lblReplaceResult").innerHTML = replaceString.replace(replace,replaceWith);
}
/**
 * This function is used to get the search of the string.
 * @param {string} searchString
 * @param {string} search
 * @returns {Void} Void
 */
function searchStringMethods(searchString,search){
    
    document.getElementById("lblSearchResult").innerHTML = searchString.search(search);
}
/**
 * This function is used to get the match of the string.
 * @param {string} matchString
 * @returns {Void} Void
 */
function matchStringMethods(matchString,match){
    
    document.getElementById("lblMatchResult").innerHTML = matchString.match(match);
}
/**
 * This function is used to get the includes of the string.
 * @param {string} includesString
 * @param {string} includes
 * @returns {Void} Void
 */
function includesStringMethods(includesString,includes){
    debugger;
    document.getElementById("lblIncludesResult").innerHTML = includesString.includes(includes);
}
/**
 * This function is used to get the startsWith of the string.
 * @param {string} startsWithString
 * @param {string} startsWith
 * @returns {Void} Void
 */
function startsWithStringMethods(startsWithString,startsWith){
    document.getElementById("lblStartsWithResult").innerHTML = startsWithString.startsWith(startsWith);
}
/**
 * This function is used to get the endsWith of the string.
 * @param {string} endsWithString
 * @param {string} endsWith
 * @returns {Void} Void
 */
function endsWithStringMethods(endsWithString,endsWith,endsWithLength){
    document.getElementById("lblEndsWithResult").innerHTML = endsWithString.endsWith(endsWith,endsWithLength);
}
/**
 * This function is used to get the padStart of the string.
 * @param {string} padStartString
 * @param {number} padStart
 * @returns {Void} Void
 */
function padStartStringMethods(padStartString,padStart,padStartChar){
    debugger
    document.getElementById("lblPadStartResult").innerHTML = padStartString.padStart(padStart,padStartChar);
}
/**
 * This function is used to get the padEnd of the string.
 * @param {string} padEndString
 * @param {number} padEnd
 * @param {string} padEndChar
 * @returns {Void} Void
 */
function padEndStringMethods(padEndString,padEnd,padEndChar){
    document.getElementById("lblPadEndResult").innerHTML = padEndString.padEnd(padEnd,padEndChar);
}
/**
 * This function is used to get the repeat of the string.
 * @param {string} repeatString
 * @param {number} repeat
 * @returns {Void} Void
 */
function repeatStringMethods(repeatString,repeat){
    document.getElementById("lblRepeatResult").innerHTML = repeatString.repeat(repeat);
}
/**
 * This function is used to get the charCodeAt of the string.
 * @param {string} charCodeAtString
 * @param {number} charCodeAt
 * @returns {Void} Void
 */
function charCodeAtStringMethods(charCodeAtString,charCodeAt){
    document.getElementById("lblCharCodeAtResult").innerHTML = charCodeAtString.charCodeAt(charCodeAt);
}
/**
 * This function is used to get the codePointAt of the string.
 * @param {string} codePointAtString
 * @param {number} codePointAt
 * @returns {Void} Void
 */
function codePointAtStringMethods(codePointAtString,codePointAt){
    document.getElementById("lblCodePointAtResult").innerHTML = codePointAtString.codePointAt(codePointAt);
}
/**
 * This function is used to get the fromCharCode of the string.
 * @param {string} fromCharCodevalue
 * @param {number} fromCharCode
 * @returns {Void} Void
 */
function fromCharCodeStringMethods(fromCharCodevalue){
    debugger

    let result = String.fromCharCode(72, 69, 76, 76, 79)
    document.getElementById("lblFromCharCodeResult").innerHTML = result;
}
/**
 * This function is used to get the fromCodePoint of the string.
 * @param {string} fromCodePointString
 * @param {number} fromCodePoint
 * @returns {Void} Void
 */
function fromCodePointStringMethods(fromCodePoint){
    let result = String.fromCodePoint(fromCodePoint);
    
    document.getElementById("lblFromCodePointResult").innerHTML = result;
}