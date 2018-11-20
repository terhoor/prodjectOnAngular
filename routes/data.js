const express = require('express');
const controller = require('../controllers/data');

const router = express.Router();

router.get('/users', controller.getData);
router.get('/detail-user/:id', controller.getUserId);
router.post('/details-group', controller.getByGroupName);
router.post('/users', controller.createUser);
router.post('/users-change', controller.changeUser);

module.exports = router;