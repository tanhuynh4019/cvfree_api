const express = require('express');
const multer = require('multer');
const router = express.Router();
const candidateAdminController = require('../../controllers/Admin/CandidateController');

const upload = multer()

// link
router.get('/admin/api/candidate', candidateAdminController.fetchAllCandidate);
router.post('/admin/api/candidate/create', upload.none(), candidateAdminController.createCandidate);
router.patch('/admin/api/candidate/:id', upload.none(), candidateAdminController.editCandidate);
router.delete('/admin/api/candidate/:id', candidateAdminController.deleteCandidate);
router.get('/admin/api/candidate/:id', candidateAdminController.fetchByIDCandidate);

module.exports = router;