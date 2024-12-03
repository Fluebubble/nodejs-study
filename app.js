const common = require("./someFolder/common.js");
const common2 = require("./someFolder/common.js");
// const es = await import("./someFolder/es.mjs");

console.log(common === common2);

// console.log(common);
// console.log(es);
// console.log(__dirname);
// console.log(__filename);
// console.log(module);
// console.log(exports);

// console.log(require.cache[require.resolve('.\\someFolder\\common.js')]);
// console.log(require.cache['C:\\Workspace\\GitHub\\nodejs-study\\someFolder\\common.js']);
// console.log("app.js", require.main === module);
// };

// console.log(require.cache[require.resolve(".\\someFolder\\common.js")]);
