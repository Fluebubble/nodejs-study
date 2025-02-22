import http from "http";

const url = "http://localhost:3005";
const option = {
  method: "POST",
};

const data = {
  name: "GENA",
  profession: "farmer",
};

const req = http.request(url, option, (res) => {
  const chunks = [];

  res.on("data", (chunk) => {
    console.log(chunk);

    chunks.push(chunk);
  });

  res.on("end", () => {
    const text = Buffer.concat(chunks).toString();
    const data = JSON.parse(text);

    console.log(data, text);
  });

  // res.pipe(process.stdout);
  // console.log(res.statusCode);
});

req.end(JSON.stringify(data));
