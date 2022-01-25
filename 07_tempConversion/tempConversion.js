const ftoc = function(fIndex) {
  return Math.round((fIndex - 32) * 5/9 *10) / 10;
};

const ctof = function(cIndex) {
  return Math.round((cIndex * 9/5 + 32) * 10) / 10;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
