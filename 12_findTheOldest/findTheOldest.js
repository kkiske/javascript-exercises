const findTheOldest = function(arr) {
    const currentYear = new Date().getFullYear();
    const arrSorted = arr.sort((a, b) => {
        const aAge = ('yearOfDeath' in a ? a.yearOfDeath : currentYear) - a.yearOfBirth;
        const bAge = ('yearOfDeath' in b ? b.yearOfDeath : currentYear) - b.yearOfBirth;
        return aAge > bAge ? -1 : 1;
    })
    return arrSorted[0];
};

// Do not edit below this line
module.exports = findTheOldest;
