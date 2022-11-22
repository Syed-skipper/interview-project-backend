const express = require('express');
const router = express.Router();
const students = require('../Modules/studentModule');


router.get('/read',students.getStudents);
router.post('/create', students.createStudents);


module.exports = router;