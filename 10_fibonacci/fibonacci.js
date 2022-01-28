const fibonacci = function(a) {
    let arr = [1, 1];
    if (a < 0) {
        return 'OOPS';
    }
    if (a < 3) {
        return 1;
    }
    for (let i = 3; i <= a; i++) {
        let newElement = arr[i - 3] + arr[i - 2];
        arr[i - 1] = newElement;
    }
    return arr[a - 1];
};

// Do not edit below this line
module.exports = fibonacci;
