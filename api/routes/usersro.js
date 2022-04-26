/** @format */

const express = require("express");
const User = require("../models/User");
const Post = require("../models/Post");
const bcrypt = require("bcrypt");
const router = express.Router();
const { verifytokenandauth, verifytokenAdmin } = require("./verifyToken");
router.put("/:id", async (req, res) => {
	if (req.body.userId === req.params.id) {
		if (req.body.password) {
			const salt = await bcrypt.genSalt();
			req.body.password = await bcrypt.hash(req.body.password, salt);
		}
		try {
			const updateuser = await User.findByIdAndUpdate(
				req.params.id,
				{
					$set: req.body,
				},
				{ new: true }
			);

			res.status(200).json(updateuser);
		} catch (err) {
			res.status(500).json(err);
		}
	} else {
		res.status(401).json("you can only update your account");
	}
});

router.get("/", async (req, res) => {
	let user = await User.find();
	if (user) {
		res.status(200).json(user);
	} else {
		res.status(500).json({
			message: "user not found",
		});
	}
});

// DELETE
// router.delete("/:id", async (req, res) => {
// 	if (req.params.id === req.body.userId) {
// 		try {
// 			const user = await User.findById(req.params.id);
// 			if (user) {
// 				let post = await Post.deleteMany({ username: user.username });
// 				try {
// 					let user = await User.findByIdAndDelete(req.params.id);
// 					if (user) {
// 						res.status(200).json("user has been deleted");
// 					}
// 				} catch (err) {
// 					res.json(err);
// 				}
// 			} else {
// 				res.status(400).json("user not found");
// 			}
// 		} catch (err) {
// 			res.json(err);
// 		}
// 	} else {
// 		res.status(400).json("you can delete only your account");
// 	}
// });

router.delete("/:id", verifytokenandauth, async (req, res) => {
	try {
		const user = await User.findById(req.params.id);
		if (user) {
			let post = await Post.deleteMany({ username: user.username });
			try {
				let user = await User.findByIdAndDelete(req.params.id);
				if (user) {
					res.status(200).json("user has been deleted");
				}
			} catch (err) {
				res.json(err);
			}
		} else {
			res.status(400).json("user not found");
		}
	} catch (err) {
		res.json(err);
	}
});

module.exports = router;
