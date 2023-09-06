const express = require('express');
const router = express.Router();
const {signup, logout, login, dashboard} = require('../controllers/userController');


router.post("/signup", signup);

module.exports = router;