const express = require("express");
const router = express.Router();
const { getBoxes, updateBox } = require("../controllers/boxes");

router.get("/box", getBoxes);
router.put("/box", updateBox);

module.exports = router;
