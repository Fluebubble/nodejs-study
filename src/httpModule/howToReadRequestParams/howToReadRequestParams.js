import http from "http";

const PORT = process.env.PORT || 3006;

const server = http.createServer((req, res) => {
  console.log(req.url);

  const normalizedUrl = new URL(req.url, "http://localhost:3006");
  console.log(normalizedUrl);
  console.log(normalizedUrl.searchParams.age);
  console.log(normalizedUrl.searchParams.get("age"));
  console.log(normalizedUrl.searchParams.getAll("age"));
  console.log(normalizedUrl.searchParams.entries());
  console.log(
    Object.fromEntries(normalizedUrl.searchParams.entries())
  );

  res.end();
});

server.listen(PORT, () => {
  console.log(`server is running on http://localhost:${PORT}/`);
});
