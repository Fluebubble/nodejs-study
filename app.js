const start = async () => {
  const common = await import("./someFolder/common.js");
  const es = await import("./someFolder/es.mjs");

  console.log(common);
  console.log(es);
  // console.log(__dirname);
  // console.log(__filename);
  console.log(module);
  console.log(exports);
};

start();
