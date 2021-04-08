const express = require('express');
const router = express.Router();
const passport = require('passport');
const UserCtrl = require('../../controllers/userCtrl');

router.post('/register', UserCtrl.createStudent);
router.post('/adminRegister', passport.authenticate('jwt', { session: false }), UserCtrl.createAdmin);
router.post('/login', UserCtrl.login);
router.get('/confirmEmail', UserCtrl.confirmEmail);
router.get('/current', passport.authenticate('jwt', { session: false }), UserCtrl.getCurrentUser);
router.get('/myEvents', passport.authenticate('jwt', { session: false }), UserCtrl.getUserEvents);
router.get('/:id', UserCtrl.getUserById);

module.exports = router;