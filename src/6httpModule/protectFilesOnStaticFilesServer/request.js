import http from "http";

const options = {
  hostname: "localhost",
  port: 3006,
  path: "/../service.js",
};

http.get(options, (res) => {
  res.setEncoding("utf8");
  res.on("data", console.log);
});
