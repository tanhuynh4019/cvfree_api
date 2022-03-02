const express = require('express');
const multer = require('multer');
const router = express.Router();
const themeCvController = require('../../controllers/admin/ThemeCvController');

const upload = multer()

// link
router.get('/admin/api/theme_cv', themeCvController.getAllThemeCv);
router.post('/admin/api/theme_cv', upload.none(), themeCvController.createThemeCv)

module.exports = router;