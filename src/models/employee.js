const mongoose = require('mongoose')

const employeeSchema = new mongoose.Schema(
	{
		firstName: { type: String, required: true },
		lastName: { type: String, required: true },
		availability: { type: [String], required: true },
		certifications: { type: [String], default: [] },
		email: {
			type: String,
			required: true,
			unique: true
		},
		phone: String,
		dateJoined: {
			type: Date,
			required: true
		}
	},
	{
		timestamps: true
	}
)

module.exports = mongoose.model('Employee', employeeSchema)