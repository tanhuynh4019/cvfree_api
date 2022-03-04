const express = require('express');
const multer = require('multer');
const router = express.Router();
const termController = require('../../controllers/Admin/TermController');

const upload = multer()

// link
router.get('/admin/api/term', termController.fetchAllTerm);
router.get('/admin/api/term/:id', termController.fetchByIDTerm);
router.post('/admin/api/term', upload.none(), termController.createTerm);
router.patch('/admin/api/term/:id', upload.none(), termController.editTerm);
router.delete('/admin/api/term/:id', termController.deleteTerm);

module.exports = router;