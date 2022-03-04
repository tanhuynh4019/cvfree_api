const express = require('express');
const multer = require('multer');
const router = express.Router();
const themeCvController = require('../../controllers/Candidates/TheneCvController');

const upload = multer()

// link
router.get('/candidate/api/theme_cv', themeCvController.getAllThemeCv);

module.exports = router;