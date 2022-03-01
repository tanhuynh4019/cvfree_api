const express = require('express');
const multer = require('multer');
const router = express.Router();
const candidateController = require('../../controllers/Candidates/candidateController');

const upload = multer()

// link
router.patch('/candidate/api/candidate/login', upload.none(), candidateController.loginCandidate);
router.post('/candidate/api/candidate', upload.none(), candidateController.singUpCandidate);
router.get('/candidate/api/candidate/:id', candidateController.fetchByIDCandidate);

module.exports = router;