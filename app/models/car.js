const mongoose = require('mongoose')

const commentSchema = require('./comments')

const carSchema = new mongoose.Schema(
	{
		make: {
			type: String,
			required: true,
		},
		model: {
			type: String,
			required: true,
		},
        year: {
			type: Number,
			required: true,
		},
        type: {
            type: String,
            required: true,
        },
		description: {
			type: String,
			required: true,
		},
        startingbid: {
			type: Number,
			required: true,
		},
		buyout: {
			type: Number,
			required: true,
		},
        stock: {
            type: Number,
            required: true,
        },
        image: {
            type: String,
            required: true,
        },
		owner: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'User',
			required: true,
		},
        comments: [commentSchema]
	},
	{
		timestamps: true,
	}
)

module.exports = mongoose.model('Car', carSchema)
