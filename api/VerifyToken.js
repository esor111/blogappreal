/** @format */

const jwt = require("jsonwebtoken");

const VerifyToken = (req, res, next) => {
	const authHeader = req.headers.token;
	if (authHeader) {
		const token = authHeader.split(" ")[1];

		jwt.verify(token, process.env.THE_SECRECT, (err, user) => {
			if (err) {
				res.status(403).json("token is not valid");
			}
			req.user = user;
			next();
		});
	} else {
		res.json("you are not authenticated !");
	}
};


const verfytokenandAdmin = ()=>{
    VerifyToken(req, res, ()=>{
if(req.user.isAdmin){
    next()
}else{
    res.status(403).json("you are not allowed to do that")
}
    })
}



const VerifyTokenandAuthorzation = (req, res, next) => {
	VerifyToken(req, res, () => {
        // req.user.is is people who is loggedin we pass the same id in params
		if (req.user.id === req.params.id || req.user.isAdmin) {
            next();
		} else {
			res.status(403).json("you are not allowed to do that");
		}
	});
};

module.exports = { VerifyToken, VerifyTokenandAuthorzation, verfytokenandAdmin };
