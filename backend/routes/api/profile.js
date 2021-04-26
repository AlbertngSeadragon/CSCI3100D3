const express = require('express');
const router = express.Router();
const passport = require('passport');
const ProfileCtrl = require('../../controllers/profileCtrl');

// GET /api/profile/current
// fetch the current user profile
router.get('/current', passport.authenticate('jwt', { session: false }), ProfileCtrl.getProfile);

// POST /api/profile/create
// create a new user profile
router.post('/create', passport.authenticate('jwt', { session: false }), ProfileCtrl.createProfile);

// GET /api/profile/user/:id
// fetch the user profile by id
router.get('/user/:id', ProfileCtrl.getProfileById);

module.exports = router;