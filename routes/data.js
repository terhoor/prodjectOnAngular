const express = require('express')
const controller = require('../controllers/data')

const router = express.Router()

// router.get('/teachers', controller.getTeachers)
// router.get('/students', controller.getStudents)
router.get('/users', controller.getData)

module.exports = router