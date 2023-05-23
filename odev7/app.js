const express = require("express");
const path = require("path");

server = express();
const port = 3005;
const blog = { id: 1, title: "Blog title", description: "Blog description" };

// server.use(express.static("public"));
server.get("/", (req, res) => {
  res.send(blog);
  //   res.sendFile(path.resolve(__dirname, "public/index.html"));
});

server.listen(port, () => {
  console.log(`${port}. listening...`);
});
