const mongoose = require('mongoose')

const reviewSchema =new mongoose.Schema({
	review: {
		type: String,
		required: [true, "review is required"]
	},

	rating: {
		type: Number,
		min: 1,
		max: 10,
		required:false
	}, 

	createdAt: {
		type: Date,
		default: Date.now()
	},
    user: {
        type: mongoose.Schema.ObjectId,
        ref: 'User',
        required: [true, 'need a user to review']
    },
    post:{
        type: mongoose.Schema.ObjectId,
        ref: 'Post',
        required: [true, 'need tpo specify the post to review']
    }
});

reviewSchema.pre(/^find/, function(next){
    this.populate({
        path: 'user',
        select: `email username`
    }).populate('post')
    next()
})


const ReviewModel = mongoose.model("ReviewModel", reviewSchema);

module.exports= ReviewModel

