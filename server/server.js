const express = require("express");
const cors = require("cors");

const app = express();

const PORT = 3001;
app.use(cors());

app.get("/api/hello", (req, res) => {
  console.log("Hello World!");

  res.status(200).send({
    message: "Hello World!",
  });
});

app.listen(PORT, () => {
  console.log("App is listening on port 3001");
});
