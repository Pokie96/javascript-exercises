const fibonacci = function(n) {
    let fibArray = [1, 1];
    for(let i = 1; i <= n; i++){
        let thisNum = fibArray[i-1] + fibArray[i];
        fibArray.push(thisNum);
    }
    return fibArray[n-1];
};


// Do not edit below this line
module.exports = fibonacci;
