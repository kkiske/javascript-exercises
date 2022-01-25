const removeFromArray = function(...args) {
    return args[0].filter(element => {
        for (let i = 1; i < args.length; i ++) {
            if (element === args[i]) {
                return false;
            }
        }
        return true;
    })
};

// Do not edit below this line
module.exports = removeFromArray;
