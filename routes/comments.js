const express = require('express')


const { getAllComments } = require('../controllers/comments');
const router = express.Router()
const CommentsController = (require('../controllers/comments.js'))

router.get('/', CommentsController.getAllComments);
router.get("/:id", CommentsController.getCommentId);
router.post('/', CommentsController.postComment);



module.exports = router