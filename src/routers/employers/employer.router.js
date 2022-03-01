const express = require('express');
const multer = require('multer');
const router = express.Router();
const employerController = require('../../controllers/Employers/EmployerController');

const upload = multer()

// link
router.patch('/employer/api/employer/login', upload.none(), employerController.loginEmloyer);
router.post('/employer/api/employer', upload.none(), employerController.signUpEmployer);
router.get('/employer/api/employer/:id', employerController.getById);

module.exports = router;