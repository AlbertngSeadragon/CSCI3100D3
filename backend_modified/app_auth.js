//app.js with authentication and profile routers

const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const connectDB = require('./config/db');
const Student = require('./models/Student');
const app = express();
connectDB();

app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(session({
    secret: '12341234', //need to be randomized later
    resave: false,
    saveUninitialized: true,
    //store: new FileStore() //session can be stored in db if we want 
}))

const passport = require('./auth/passport')(app);
const authRouter = require('./auth/auth')(passport);
const profileRouter = require('./profile');

app.use('/auth', authRouter);
app.use('/profile', profileRouter);
app.get('/', function(req, res){
    if(req.user){
        res.send(`user: ${req.user} \n is logged in, /auth/logout to logout`);
    }else{  
        res.send(`no user logged in, /auth/login to login\n /auth/register to register`);
    }
});
app.listen(3000, function () {
    console.log('listening on port 3000');
});