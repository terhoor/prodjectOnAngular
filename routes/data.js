const express = require('express');
const controller = require('../controllers/data');

const router = express.Router();

// router.get('/teachers', controller.getTeachers);
// router.get('/students', controller.getStudents);
router.get('/users', controller.getData);
router.get('/detail-user/:id', controller.getUserId);
router.post('/details-group', controller.getByGroupName);

module.exports = router;