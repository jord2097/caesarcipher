function start() {
    let userInput = document.getElementById("userInput").value;
    let encrypt = document.getElementById("encrypt");
    let userKey = document.getElementById("userKey").value;
    let modString = (userInput.trim().toLowerCase());    
    
    if (encrypt.checked) {
        encryptMode = true;
    } else {
        encryptMode = false;
    }
    
    encodeText(modString, userKey, encryptMode)
}

/* function obtainASCII(str){ 
    const strSplit = str.split('');
    const res = strSplit.map(l => l.charCodeAt())
    return res;
} // returns charCode for each letter */

/* function establishKey(preparedArray, userKey, encrypt){
    if (encrypt === true && !isNaN(userKey) && isFinite(userKey)) {
        encodeText(preparedArray, userKey)
    } else if (encrypt === false && !isNaN(userKey) && isFinite(userKey)){
        userKey = 0 - userKey
        encodeText(preparedArray, userKey)
    }
} */
  
function encodeText(modString, userKey, encryptMode){  
    let finalString = ""
    for (let i = 0; i < modString.length; i++){
        let asciiLetter = modString[i].charCodeAt();
        if (asciiLetter >= 97 && asciiLetter <= 122 && encryptMode === true) {
            Key = (userKey%26 + 26) % 26; // wraparound
            finalString += String.fromCharCode((asciiLetter - 'a'.charCodeAt(0) + Key) % 26 + 'a'.charCodeAt(0));         

            
        } else if (asciiLetter >= 97 && asciiLetter <= 122 && encryptMode === false) {            
            Key = ((userKey * -1)%26 + 26) % 26; // wraparound
            finalString += String.fromCharCode((asciiLetter - 'a'.charCodeAt(0) + Key) % 26 + 'a'.charCodeAt(0));   

        } else {
            finalString += modString[i]
        }
        
        
    }
    document.getElementById("output").innerHTML = finalString
}


