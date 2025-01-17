import axios from "axios";

const BASE = "http://localhost:3006";
const href = BASE + "/user/1/friends" + "?sex=m&age=25&age=45";

console.log(href);

axios.get(href).catch((err) => console.log(err));

// const options = {
//   hostname: "localhost",
//   port: 3006,
//   path: "/../service.js",
// };

// http.get(options, (res) => {
//   res.setEncoding("utf8");
//   res.on("data", console.log);
// });
