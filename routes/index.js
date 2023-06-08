const express = require('express');
const router = express.Router();
const indexController = require('../controllers/indexController')

router.post('/read', indexController.read);

module.exports = router;
