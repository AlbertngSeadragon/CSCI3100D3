const express = require('express');
const router = express.Router();
const passport = require('passport');


const Event = require('../../models/Event');

// POST /api/events/:id/comments/create
// add comment
router.post('/:id/comments/create', passport.authenticate('jwt', {session: false}), (req, res) => {
    Event.findById(req.params.id)
        .populate('user', ['name'])
        .then(event => {
            
            const newComment = {
                content: req.body.content,
                name: req.user.name,
                user: req.user.id
            };
            
            event.comments.unshift(newComment);
            
            event.save()
                .then(event => {
                    return res.json(event);
                });
        });
});

// DELETE /api/events/:id/comments/:cid/delete
// delete comment
router.delete('/:id/comments/:cid/delete', passport.authenticate('jwt', {session: false}), (req, res) => {
    Event.findById(req.params.id)
        .populate('user', ['name'])
        .then(event => {
            if(event.host._id.toString() !== req.user.id){
                return res.status(401).json({error: 'You are not authorized'});
            }
            
            const index = event.comments
                .map(comment => comment.id)
                .indexOf(req.params.cid);
                
            event.comments.splice(index, 1);
            
            event.save()
                .then(event => res.json(event));
        })
        .catch(err => res.status(500).json(err));
});

module.exports = router;