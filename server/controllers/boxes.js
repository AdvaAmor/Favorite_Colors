const fs = require("fs");

const getBoxes = (req, res) => {
  fs.readFile("./databases.json", "utf8", (err, data) => {
    if (err) {
      console.log(`Error reading file from disk: ${err}`);
      res.status(500).send("server error");
    } else {
      // parse JSON string to JSON object
      res.json(JSON.parse(data));
    }
  });
};
// update a box
const updateBox = (req, res) => {
  fs.readFile("./databases.json", "utf8", (err, data) => {
    if (err) {
      console.log(`Error reading file from disk: ${err}`);
      res.status(500).send("server error");
    } else {
      const information = JSON.parse(data);
      const newBox = req.body;
      const newData = information.map((box) => {
        if (box.color === newBox.color) {
          return { color: box.color, votes: newBox.votes };
        }
        return box;
      });

      fs.writeFile("./databases.json", JSON.stringify(newData), (err) => {
        if (err) {
          console.log(`Error writeFile to the  file: ${err}`);
          res.status(500).send("server error");
        } else {
          // parse JSON string to JSON object
          console.log(`File is written successfully!`);
          res.json(newData);
        }
      });
    }
  });
};

module.exports = {
  getBoxes,
  updateBox,
};
