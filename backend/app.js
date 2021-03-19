const express = require('express');
const connectDB = require('./config/db');
const bodyParser = require('body-parser');
const passport = require('passport');
const path = require('path');
const admins = require('./routes/api/admins');

const app = express();
connectDB();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(function (req, res, next) {

    res.setHeader('Access-Control-Allow-Origin', '*');

    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE, HEAD');

    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');

    res.setHeader('Access-Control-Allow-Credentials', true);

    next();
});
app.use(passport.initialize());
require('./config/passport')(passport);

app.use('/api/admins', admins);

if(process.env.NODE_ENV === 'production'){
    app.use(express.static('client/build'));
    
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}

app.get('/', (req, res) => res.send('Hello World!'));

const port = process.env.PORT || 8082;

app.listen(port, () => console.log(`Server running on port ${port}`));