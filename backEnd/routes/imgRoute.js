const express = require("express");

const {
  getAllImages,
  createGalleryItem,
  getSingleGalleryItem,
  deleteGalleryItem,
  updateGalleryItem,
  getLimiteddata,
  getImgByName,
} = require("../controllers/imgController");

const router = express.Router();

// ALL the routes 👍
router.route("/").get(getAllImages);
router.route("/limited").get(getLimiteddata);
router.route("/search").get(getImgByName);
router.route("/show/:id").get(getSingleGalleryItem);
router.route("/").post(createGalleryItem);
router.route("/:id/edit").put(updateGalleryItem);
router.route("/delete/:id").delete(deleteGalleryItem);
module.exports = router;
