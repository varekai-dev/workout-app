import mongoose from 'mongoose'

const exerciseSchema = mongoose.Schema(
	{
		name: {
			type: String,
			require: true,
		},
		times: {
			type: Number,
			require: true,
		},
		imageName: {
			type: String,
			required: true,
		},
	},
	{
		minimize: false,
		timestamps: true,
	}
)

const Exercise = mongoose.model('Exercise', exerciseSchema)

export default Exercise
