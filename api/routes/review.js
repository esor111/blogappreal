const router = require("express").Router();
const Review = require("../models/Review");
const Post = require("../models/Post");


router.post("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (post) {
      let review = await Review.create(req.body);
      await post.save();
      res.status(200).json(review);
    } else {
      res.status(500).json("Post not found");
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/:id", async (req, res) => {
  try {
    let productId = req.params.id;
    let review = await Review.find();
    review = review.filter((review) => review.post?._id == productId);
    return res.json(review);
  } catch (err) {
    res.json({
      message: err.message,
    });
  }
});

router.get("/", async (req, res) => {
  try {
    let reviews = await Review.find();
    if (reviews) {
      return res.json(reviews);
    }
    res.json({
      message: "reviews not found",
    });
  } catch (err) {
    res.json({
      message: err.message,
    });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    let reviews = await Review.findByIdAndDelete(req.params.id);
    res.status(200).json(reviews._id);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/topthree", async (req, res) => {
  try {
    let plans = await Review.find()
      .sort({
        rating: -1,
      })
      .limit(3);
    return res.json(plans);
  } catch (err) {
      res.status(500).json(err)
  }
});

module.exports = router;
