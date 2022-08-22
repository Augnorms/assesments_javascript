function solution(plaintext, keyword, row, column) {
    
    var letters = "ABCFGHIJLMNPQSTUVXYZ";

// encrypt and decrypt this plain text
var plainText = plaintext;

// remove spaces
var compressedText = plainText.replace(/\s+/g, "").toLocaleUpperCase();
var decryptedText = "";


var key = keyword.toLocaleUpperCase();;
var extendedKey = extendKey(key, compressedText.length);


var keyword = keyword.toLocaleUpperCase();;
var polybiusLetters = keyword + letters; 
var polybiusLetters = polybiusLetters.split('').filter(function(item, i, ar){ return ar.indexOf(item) === i; }).join('');

var polybiusSquare = [[]];

var index = 0;

for (var i = 0; i<5; i++) {
    polybiusSquare[i] = [];
    for (var j = 0; j<5; j++) {       
        var letter = polybiusLetters[index];
        polybiusSquare[i][j] = letter;
        index++;
    }
}

var compTextArray = buildArray(compressedText, polybiusSquare);
var extKeyArray = buildArray(extendedKey, polybiusSquare);
var cipherArray = [];


for (var i = 0; i<compTextArray.length; i++) {
    cipherArray.push(compTextArray[i] + extKeyArray[i]);
}
return cipherArray;

var decryptArray = []
// we're simply reversing the above process to decrypt
for (var i = 0; i<cipherArray.length; i++) {
    decryptArray.push(cipherArray[i] - extKeyArray[i]);
}

// rebuild the original message by looking up letters in the square
for (var i = 0; i < decryptArray.length; i++) {
    decryptedText += lookupLetter(decryptArray[i], polybiusSquare);
}

// Let's see if it worked
console.log("compressedText", compressedText);
console.log("decryptedText ", decryptedText);

// Lookup letters in the square
function lookupLetter(chunk, polybiusSquare) {
    var coords = String(chunk).split("");
    var row = Number(coords[0]);
    var column = Number(coords[1]);

    // the row and col values have been increased by 1 to match the 1-5 values 
    // of a written polybius square. decrease by 1
    row--;
    column--;
    
    return polybiusSquare[row][column];
}

function buildArray(letters, polybiusSquare) {
    var returnArray = [];
    
    for (var i = 0; i<letters.length; i++) {
        var char = letters[i];
        returnArray.push(findChunk(char, polybiusSquare))
    }

    return returnArray;
}

// find a letter in the square
function findChunk(findMe, polybiusSquare) {
    for (var i = 0; i<5; i++) {
        for (var j = 0; j<5; j++) {
            if (polybiusSquare[i][j] === findMe) {
                // the Polybius square has rows and columns labeled 1,2,3,4,5
                // so increment the row and column for display
                i++;
                j++;
                return Number("" + i + j); // this is hacky, but it works
            }
        }
    }   
}

// extend the key to a predetermined length
function extendKey(key, length) {
    var longKey = key;
    while (longKey.length < length) {
        longKey += key;
    }
    return longKey.substring(0, length);
}

}
console.log(solution("codesignal", "keyword", 5, 5));