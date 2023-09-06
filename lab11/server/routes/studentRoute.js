const express = require('express');
const router = express.Router();
const {addStudent, viewStudents} = require("../controllers/studentController");


router.post("/", addStudent);
router.get("/", viewStudents);

module.exports = router;