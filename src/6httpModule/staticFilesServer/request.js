// import http from "http";
import axios from "axios";

axios
  .get("https://mate.academy/students-api/goods/245")
  .then((res) => {
    console.log(res.status);
    console.log(res.data);
  })
  .catch((error) => console.log(error));

// const request = http.request("http://localhost1:3006/", (res) => {
//   console.log(res.statusCode);

//   res.setEncoding("utf8");

//   res.on("data", (data) => {
//     console.log(data);

//     // process.stdout.write(data);
//   });
// });

// request.on("error", (e) => {
//   console.error(`problem with request: ${e.message}`);
// });

// request.end();
