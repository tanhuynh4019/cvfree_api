const mongoose = require('mongoose');
const express = require('express');
const dotenv = require('dotenv');
dotenv.config();
const cors = require('cors');
const route = require('./routers/routes');

const app = express()
const port = process.env.PORT || 3000;

// plugin
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));


// routes
route(app);

// connect database 
mongoose.connect(process.env.DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('Connect success!')).catch(error => console.log(error));

app.listen(port, "0.0.0.0" , () => {
    console.log(`Example app listening on port ${port}`)
})