const express = require('express')
const Employee = require('../models/Employee')

const router = express.Router()

router.post('/', async (req, res) => {
	const employee = await Employee.create(req.body)
	res.status(201).json(employee)
})

router.get('/', async (req, res) => {
	const employees = await Employee.find()
	res.json(employees)
})

router.get('/:id', async (req, res) => {
	const employee = await Employee.findById(req.params.id)
	if (!employee) return res.status(404).json({message: 'Employee not found'})
	res.json(employee)
})<

router.delete('/:id', async (req, res) => {
	const employee = await Employee.findByIdAndDelete(req.params.id)
	if (!employee) return res.status(404).json({message: 'Employee not found'})
	res.json({ message: 'Employee deleted successfully' })
})

// more Mongoose queries:

// Sort employees by date joined.
router.get('/sorted/date-joined', async (req, res) => {
	const employees = await Employee.find().sort({dateJoined: -1})
	res.json(employees)
})

// Sort employees alphabetically by last name.
router.get('/sorted/last-name', async (req, res) => {
	const employees = await Employee.find().sort({lastName: 1})
	res.json(employees)
})

// Filter by certification.
router.get('/certification/:cert', async (req, res) => {
	const employees = await Employee.find({
		certifications: req.params.cert
	})
	res.json(employees)
})

// Filter by multiple certifications.
router.get('/filters/certifications', async (req, res) => {
	const certs = req.query.list.split(",")
	const employees = await Employee.find({
		certifications: {$all: certs}
	})
	res.json(employees)
})

// Filter by certification and availibility.
router.get('/filters/certifications-and-availability', async (req, res) => {
	const certs = req.query.certs.split(",")
	const availability = req.query.availability.split(",")
	const matchingEmployees = await Employee.find({
		certifications: {$all: certs},
		availability: {$all: availability}
	})
	res.json(matchingEmployees)
})

// Filter by certification and availability and time since joining.
router.get('/filters/general', async (req, res) => {
	const certs = req.query.certs.split(",")
	const availability = req.query.availability.split(",")
	const minTime = req.query.minTime

	const today = new Date()
	const cutoff = today.setMonth(today.getMonth() - minTime)

	const matchingEmployees = await Employee.find({
		certifications: {$all: certs},
		availability: {$all: availability},
		dateJoined: { $lte: cutoff }
	})

	res.json(matchingEmployees)
})

module.exports = router