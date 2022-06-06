const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// const passportLocalMongoose = require('passport-local-mongoose');

const boxSchema = new Schema({
  color: {
    type: String,
    required: true,
    unique: true,
  },
  Votes: Number,
});

module.exports = mongoose.model("Box", boxSchema);
