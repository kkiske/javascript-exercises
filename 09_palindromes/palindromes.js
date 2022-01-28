const palindromes = function (str) {
    let testString = str.replace(/[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g, '').replaceAll(' ', '').toLowerCase();
    for (let i = 0; i < testString.length; i++) {
        if (testString[i] !== testString[testString.length - 1 - i]) {
            return false;
        }
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
