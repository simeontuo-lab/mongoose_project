// CRUD (get)
const express = require('express');
const Employee = require('../models/Employee');

const router = express.Router();

router.post('/', async (req, res) => {

    const newEmployee = await Employee.create(req.body);
    res.status(201).json(newEmployee);
  
});

router.get('/', async (req, res) => {
    const allEmployees = await Employee.find();
    res.json(allEmployees);
});

module.exports = router;