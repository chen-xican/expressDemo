
const express = require('express');
const service = require('./service');
const router = express.Router()


router.get('/',service.getBook);
router.get('/toAddBook',service.toAddBook);
router.post('/addBook',service.addBook);
router.get('/deleteBook',service.deleteBook);
router.get('/toEditBook',service.toEditBook);
router.post('/editBook',service.editBook);


module.exports = router