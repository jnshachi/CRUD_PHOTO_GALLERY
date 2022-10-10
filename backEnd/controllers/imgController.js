// const { findById } = require("../model/galleryModel");
const Gallery = require("../model/galleryModel");

// create a gallery item
exports.createGalleryItem = async (req, res, next) => {
  const galleryItem = await Gallery.create(req.body);
  res.status(201).json({
    success: true,
    galleryItem,
  });
};

// Show all gallery items
exports.getAllImages = async (req, res) => {
  const galleryItems = await Gallery.find();

  res.status(201).json({
    success: true,
    galleryItems,
  });
};

// show a single Product
exports.getSingleGalleryItem = async (req, res) => {
  let galleryItem = await Gallery.findById(req.params.id);
  res.status(200).json({
    success: true,
    galleryItem,
  });
};

// get limited data
exports.getLimiteddata = async (req, res) => {
  const limit = 9;
  let { page } = req.query;
  if (!page) page = 1;
  let skip = (page - 1) * limit;
  let galleryItems = await Gallery.find().skip(skip).limit(limit);

  res.status(200).json({
    success: true,
    galleryItems,
    page,
  });
};

// get images by name
exports.getImgByName = async (req, res) => {
  let { name } = req.query;

  let galleryItems = await Gallery.find({ ImgName: name });
  res.status(200).json({
    success: true,
    galleryItems,
  });
};

// update gallery item
exports.updateGalleryItem = async (req, res, next) => {
  let galleryItem = await Gallery.findById(req.params.id);
  if (!galleryItem) {
    return res.status(500).json({
      success: false,
      message: "item not found",
    });
  }

  galleryItem = await Gallery.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });
  res.status(200).json({
    success: true,
    galleryItem,
  });
};

// Delete a item
exports.deleteGalleryItem = async (req, res) => {
  let galleryItem = await Gallery.findById(req.params.id);
  if (!galleryItem) {
    return res.status(500).json({
      success: false,
      message: "item not found",
    });
  }
  await galleryItem.remove();
  res.status(200).json({
    success: true,
    message: "product deleted successfully",
  });
};
