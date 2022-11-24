const add = function(a, b) { 
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(array) {
  return array.reduce(function(total, current){
    return current + total
  }, 0)
};

const multiply = function(array) {
  return array.reduce(function(total, current){
    return total * current;
  }, 1)
};

const power = function(a, n) {
  let b = a;
	for(i = 0; i < n - 1; i++){
    a *= b;
  }
  return a;
};

const factorial = function(a) {
  if(a === 0){
    return 1;
  }
  let temp = a - 1;
	while(temp > 0){
    a *= temp;
    temp--;
  }
  return a;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
