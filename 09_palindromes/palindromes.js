const palindromes = function (word) {
    let originalWordArray = word.split("");
    let originalWord = originalWordArray.filter(
        char => char >= 'a' && char <= 'z' 
        || char >= 'A' && char <= 'Z').join('');
    originalWord = originalWord.toLowerCase()
    let newWordArray = originalWord.split("");
    newWordArray.reverse();
    let newWord = newWordArray.join("");
    console.log(originalWord)
    console.log(newWord)
    return originalWord === newWord ? true : false;
};



// Do not edit below this line
module.exports = palindromes;
