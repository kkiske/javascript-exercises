const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
	return arr.reduce((total, element) => total + element, 0);
};

const multiply = function(arr) {
  return arr.reduce((total, element) => total * element, 1);
};

const power = function(a, b) {
	if (b == 0) {
    return 1;
  } else if (b > 0) {
    let total = 1;
    for (let i = 1; i <= b; i++) {
      total *= a;
    }
    return total;
  } else {
    let total = 1;
    for (let i = 1; i <= Math.abs(b); i++) {
      total *= a;
    }
    return 1 / total;
  }
};

const factorial = function(a) {
	if (a == 0) {
    return 1;
  } else {
    let total = 1;
    for (let i = 1; i <= a; i++) {
      total *= i;
    }
    return total;
  }
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
