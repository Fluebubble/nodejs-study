import http from "http";

const server = new http.Server();

const data = {
  x: "xyu",
  y: "zopka",
};

server.on("request", async (req, res) => {
  const chunks = [];
  // async iterator
  for await (const chunk of req) {
    chunks.push(chunk);
  }

  const text = Buffer.concat(chunks).toString();
  const data = JSON.parse(text);
  console.log(text, data);
  // req.on("data", (chunk) => {
  //   chunks.push(chunk);
  // });

  // req.on("end", () => {
  //   const text = Buffer.concat(chunks).toString();
  //   const data = JSON.parse(text);
  //   console.log(text, data);
  // });

  // console.log("Received request:", req.method);
  // console.log('bil zapros');
  // res.write("Hello ");
  res.write(JSON.stringify(data));
  res.end();
});

server.on("error", () => {});

server.listen(3005);
