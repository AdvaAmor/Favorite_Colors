const express = require("express");
const app = express();
const boxes = require("./routes/boxes");

app.use(express.json());
//routes

app.use("/api", boxes);

const port = 5000;

const start = () => {
  try {
    app.listen(port, function () {
      console.log(`server is lisening on port ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};
start();
