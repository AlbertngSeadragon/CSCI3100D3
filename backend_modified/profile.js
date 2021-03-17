//profile page router

const express = require('express');
const router = express.Router();

module.exports = function(){
    router.get('/', function(req, res){
        res.send('profile page');
    });
    router.get('/edit', function(req, res){
        res.send('edit profile page');
    });
}