const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Employer = new Schema({
    email: {
        type: String,
        required: true,
        length: 100
    },
    password: {
        type: String,
        required: true,
        length: 100
    },
    fullname: {
        type: String,
        required: true,
        length: 50
    },
    phone: {
        type: String,
        required: true,
        length: 15
    },
    gender: {
        type: String,
        length: 5
    },
    name_company: {
        type: String,
        required: true,
        length: 100
    },
    workPosition: {
        type: String,
        required: true,
        length: 100
    },
    skype: {
        type: String,
        length: 1000
    },
    workLocation: {
        type: String,
        length: 100
    },
    poorDistrict: {
        type: String,
        length: 100
    }
});
module.exports = mongoose.model('Employer', Employer);