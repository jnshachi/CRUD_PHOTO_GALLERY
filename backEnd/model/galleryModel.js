const mongoose = require("mongoose");

//creating schema design forphoto gallery app
const gallerySchema = new mongoose.Schema({
  ImgName: {
    type: String,
    required: true,
    trim: [true, "please enter ImgName"],
  },
  ImgUrl: {
    type: String,
    required: [true, "please enter imgurl"],
  },
  ImgDetails: {
    type: String,
    required: [true, "please enter img details"],
  },
});
module.exports = mongoose.model("gallery", gallerySchema);
