const express = require('express');
const router = express.Router();
const passport = require('passport');

const CommentCtrl = require('../../controllers/commentCtrl');

// POST /api/events/:id/comments
// add comment to event given by id
router.post('/:id/comments/', passport.authenticate('jwt', { session: false }), CommentCtrl.createComment);

// DELETE /api/events/:id/comments/:cid
// delete comment with given cid from event given by id
router.delete('/:id/comments/:cid/', passport.authenticate('jwt', { session: false }), CommentCtrl.deleteComment);

module.exports = router;