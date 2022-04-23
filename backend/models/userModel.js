import mongoose from 'mongoose'
import bcryptjs from 'bcryptjs'

const userSchema = mongoose.Schema(
	{
		name: String,
		email: {
			type: String,
			required: true,
		},
		password: {
			type: String,
			required: true,
		},
		images: {
			before: String,
			after: String,
		},
	},
	{
		minimize: false,
		timestamps: true,
	}
)

userSchema.methods.matchPassword = async function (enteredPassword) {
	return await bcryptjs.compare(enteredPassword, this.password)
}

userSchema.pre('save', async function (next) {
	if (!this.isModified('password')) {
		next()
	}
	const salt = await bcryptjs.genSalt(10)
	this.password = await bcryptjs.hash(this.password, salt)
})

const User = mongoose.model('User', userSchema)

export default User
