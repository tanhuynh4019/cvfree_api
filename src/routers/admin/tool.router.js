const express = require('express');
const multer = require('multer');
const router = express.Router();
const toolController = require('../../controllers/Admin/ToolController');

const upload = multer()

// link
router.get('/admin/api/tool/', toolController.getAll)
router.get('/admin/api/tool/:id', toolController.getById)
router.post('/admin/api/tool/add',upload.none(), toolController.create);
router.patch('/admin/api/tool/update/:id', upload.none(), toolController.edit)
router.delete('/admin/api/tool/delete/:id', toolController.delete)

module.exports = router;