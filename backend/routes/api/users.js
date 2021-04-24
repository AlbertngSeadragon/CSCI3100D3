const express = require('express');
const router = express.Router();
const passport = require('passport');
const UserCtrl = require('../../controllers/userCtrl');

// POST /api/users/register
// register a new user
router.post('/register', UserCtrl.createStudent);

// POST /api/users/adminRegister
// register a new admin user (accessible by only admins)
router.post('/adminRegister', passport.authenticate('jwt', { session: false }), UserCtrl.createAdmin);

// POST /api/users/login
// login the user
router.post('/login', UserCtrl.login);

// GET /api/users/confirmEmail?key=${verificationKey}
// verify the user account with provided verificationKey
router.get('/confirmEmail', UserCtrl.confirmEmail);

// GET /api/users/current
// fetch the current user data
router.get('/current', passport.authenticate('jwt', { session: false }), UserCtrl.getCurrentUser);

// GET /api/users/myEvents
// fetch all the events current user enrolled in
router.get('/myEvents', passport.authenticate('jwt', { session: false }), UserCtrl.getUserEvents);

// GET /api/users/:id
// fetch data of user given by id
router.get('/:id', UserCtrl.getUserById);

module.exports = router;