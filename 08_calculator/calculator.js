const add = function(a, b) { 
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(array) {
  let total = 0;
	for (number of array){
    total += number;
  }
  return total;
};

const multiply = function(array) {
  let total = 1;
  for(i = 0; i < array.length; i++){
    total *= array[i];
  }
  return total;
};

const power = function(a, n) {
  let b = a;
	for(i = 0; i < n - 1; i++){
    a *= b;
  }
  return a;
};

const factorial = function(a) {
  let temp = a;
	while(temp != 0){
    a *= temp - 1;
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
