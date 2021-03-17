var express = require('express');
var session = require('express-session');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(session({
    secret: '12341234',
    resave: false,
    saveUninitialized: true,
    //store: new FileStore()
}))

var passport = require('./auth/passport')(app);
var authRouter = require('./auth/auth')(passport);

app.use('/auth', authRouter);

app.get('/', function(req, res){
    if(req.user){ //when there is an logged in user in this session
        res.send(`user: ${user.first_name} is logged in, /auth/logout to logout`);
    }else{  
        res.send(`no user logged in, /auth/login to login`);
    }
});
app.listen(3000, function () {
    console.log('listening on port 3000');
});