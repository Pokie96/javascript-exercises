const fibonacci = function(n) {
    let fibArray = [1, 1];
    n = Number(n);
    if(n < 0){
        return 'OOPS';
    } else{
        for(let i = 1; i <= n; i++){
            let thisNum = fibArray[i-1] + fibArray[i];
            fibArray.push(thisNum);
        }
        return fibArray[n-1];
    };
};


// Do not edit below this line
module.exports = fibonacci;
