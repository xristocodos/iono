const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const passport = require('passport');


require('dotenv').config();

const app = express();

const port = process.env.PORT || 5000

// BodyParser Middleware

app.use(
    bodyParser.urlencoded({
        extended: false
    })
)

app.use(bodyParser.json());

// DB Setup

mongoose.connect(process.env.DB, {useNewUrlParser: true})
    .then(
        () => console.log("Connected to DB")
    )
    .catch(
        err => console.log(err)
    )


app.listen( port, () => console.log(`you are on ${port}!`))