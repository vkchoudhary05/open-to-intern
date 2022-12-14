const express = require('express');

var bodyParser = require('body-parser');

let multer = require('multer')

const route = require('./routes/route.js');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(multer().any());



const mongoose = require('mongoose')
mongoose.connect("mongodb+srv://new-user_2020:Vivek2020@cluster0.lxwkw.mongodb.net/test", { useNewUrlParser: true })
    .then(() => console.log('mongodb running on 27017'))
    .catch(err => console.log(err))

app.use('/', route);




app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});

