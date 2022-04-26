/** @format */

const router = require("express").Router();

const Post = require("../models/Post");
const { verifytokenandauth, verifytokenAdmin } = require("./verifyToken");

//CREATE POST

router.post("/" ,async (req, res) => {
	try {
		const newPost = new Post(req.body);
		let savepost = await newPost.save();
		res.status(200).json(savepost);
	} catch (err) {
		res.status(500).json(err);
		console.log(err)
	}
});


// GET ALL POST BY ...
router.get("/", async (req, res) => {
	const username = req.query.user;
	const catName = req.query.cat;
	try {
		let posts;
		if (username) {
			posts = await Post.find({ username });
		}
		
		else if (catName) {
			posts = await Post.find({
				categories: {
					$in: [catName],
				},
			});
		}
        else{
            posts =await Post.find()
        }
        res.status(200).json(posts)
	} catch (err) {
		res.status(5000).json(err);
	}
});


router.get("/:id", async (req, res) => {
	let post = await Post.findById(req.params.id);
	if (post) {
		res.json(post)
	} else {
		res.status(200).json({
			message: "post not found",
			body: post
		});
	}
});


router.put("/:id", async (req, res) => {
	try {
		const post = await Post.findById(req.params.id);
			try {
				const updatePost = await Post.findByIdAndUpdate(
					req.params.id,
					{ $set: req.body },
					{ new: true }
				);
				console.log(updatePost);

				res.status(200).json(updatePost);
			} catch (err) {
				res.status(500).json(err);
			}
		
	} catch (err) {
		res.status(500).json(err);
	}
});

// DELETE

router.delete("/:id", async (req, res) => {
	try {
		const post = await Post.findById(req.params.id);
			try {
				await post.delete();
				res.status(200).json("post deleted successfully");
			} catch (err) {
				res.status(200).json(err);
			}
		
	} catch (err) {
		res.status(401).json(err);
	}
});

module.exports = router;



