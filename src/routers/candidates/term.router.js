const express = require('express');
const multer = require('multer');
const router = express.Router();
const termController = require('../../controllers/Candidates/TermController');

const upload = multer()

// link
router.get('/candidate/api/term', termController.fetchAllTerm);

module.exports = router;