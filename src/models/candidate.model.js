const mongoose = require('mongoose');
const candidateSchema = mongoose.Schema({
    image: {
        type: String,
        maxlength: 1000
    },
    code: {
        type: String,
        maxlength: 20
    },
    email: {
        type: String,
        maxlength: 100
    },
    password: {
        type: String,
        maxlength: 100
    },
    phone: {
        type: String,
        maxlength: 15
    },
    fullName: {
        type: String,
        maxlength: 50
    },
    idVip: {
        type: String,
        maxlength: 100
    },
    isActive: {
        type: Boolean
    },
    isBin: {
        type: Boolean
    },
    dateCreate: {
        type: Date,
        default: Date.now
    },
    dateEdit: {
        type: Date,
        default: Date.now
    },
    dateLogin: {
        type: Date,
        default: Date.now
    },
})

module.exports = mongoose.model('Candidate', candidateSchema);