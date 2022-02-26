const mongoose = require('mongoose');
const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const route = require('./routers/routes');

const app = express()
const port = 3000

// plugin
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));


// routes
route(app);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})