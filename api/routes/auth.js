/** @format */
const router = require("express").Router();
const bcrypt = require("bcrypt");
const User = require("../models/User");
const Post = require("../models/Post");
const jwt = require("jsonwebtoken");
const CryptoJS =require('crypto-js')

// REGISTER
// router.post("/register", async (req, res) => {
// 	try {
// 		const salt = await bcrypt.genSalt(10);
// 		const hashPass = await bcrypt.hash(req.body.password, salt);

// 		const newUser = new User({
// 			username: req.body.username,
// 			email: req.body.email,
// 			password: hashPass,
// 		});
// 		const user = await newUser.save();
// 		res.status(200).json(user);
// 	} catch (err) {
// 		res.status(500).json("you not register");
// 	}
// });



router.post("/register", async (req, res) => {
	const newUser = new User({
		username: req.body.username,
		email: req.body.email,
		password: CryptoJS.AES.encrypt(
			req.body.password,
			process.env.PASSWORD_SECRECT
		).toString(),
	});

	try {
		const saveduser = await newUser.save();
		res.status(200).json(saveduser);
	} catch (err) {
		res.status(500).json(err);
	}
});


// LOGIN


// router.post("/login", async (req, res) => {
// 	let {username, password} = req.body;
// 	let user = await User.findOne({username });
// 	if (user) {

// 		if (user.username ===username && user.password === password) {
// 			res.json({
// 				message: "suceessfully Login",
// 				body: user,
// 			});
// 		} else {
// 			res.status(400).json({
// 				message: "incorect password",
// 			});
// 		}
// 	} else {
// 		res.status(403).json("please signup frist")
// 	}
// });



router.post("/login", async (req, res) => {
	let user = await User.findOne({ username: req.body.username });
	if (user) {
		try {
			const hashedpassword = CryptoJS.AES.decrypt(
				user.password,
				process.env.PASSWORD_SECRECT
			);
			const password = hashedpassword.toString(CryptoJS.enc.Utf8);
			if (password !== req.body.password) {
				res.status(403).json("wrong crendecial");
			} else {
				const accesstoken = jwt.sign({ id: user.id, isAdmin: user.isAdmin, }, process.env.THE_SECRECT, {expiresIn: "3d"});

				const { password, ...others } = user._doc;
				res.status(200).json({ ...others, accesstoken });
			}
		} catch (err) {
			res.status(500).json(err);
		}
	} else {
		res.status(403).json("please register first");
	}
});
module.exports = router;



