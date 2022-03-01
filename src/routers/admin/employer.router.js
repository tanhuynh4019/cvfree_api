const express = require('express');
const multer = require('multer');
const router = express.Router();
const employerController = require('../../controllers/admin/EmployerController');

const upload = multer()

// link
router.get('/admin/api/employer', employerController.fetchAllEmployer);
router.get('/admin/api/employer/:id', employerController.getByID);
router.post('/admin/api/employer', upload.none(), employerController.createEmployer);
router.delete('/admin/api/employer/:id', employerController.deleteEmployer);
router.patch('/admin/api/employer/:id', upload.none(), employerController.editEmployer);

module.exports = router;