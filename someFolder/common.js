module.exports = {
  x: 1,
  type: "commonJs",
};

console.log("common.js", require.main === module);
