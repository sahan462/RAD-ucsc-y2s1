const express = require('express');
const router = express.Router();

const {viewgreeting} = require('../controllers/lab8controller');

router.get('/:name', viewgreeting);


module.exports = router;