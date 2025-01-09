import http from "http";

const request = http.request("http://localhost1:3006/", (res) => {
  console.log(res.statusCode);

  res.setEncoding("utf8");

  res.on("data", (data) => {
    console.log(data);

    // process.stdout.write(data);
  });
  
});

request.on('error', (e) => {
  console.error(`problem with request: ${e.message}`);
});

request.end();
