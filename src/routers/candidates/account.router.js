const express = require('express');
const multer = require('multer');
const router = express.Router();
const accountController = require('../../controllers/Candidates/AccountController');
const passport = require('passport');
const passportConfig = require('../../middlewares/passport_candidate');

const upload = multer()

// link
router.post('/candidate/api/signup', upload.none(), passport.authenticate('local', {session: false}), accountController.signUp);
router.post('/candidate/api/signin', upload.none(), accountController.signIn);
router.get('/candidate/api/secret', passport.authenticate('jwt', { session: false }), accountController.secret);

module.exports = router;