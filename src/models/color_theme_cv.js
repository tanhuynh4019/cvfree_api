const mongoose = require('mongoose');
const colorThemeCvSchema = mongoose.Schema({
    name: {
        type: String,
        maxLength: 250,
        require: true
    },
    idThemeCv: {
        type: String,
        maxLength: 200,
        require: true
    },
    color: {
        type: String,
        maxLength: 10,
        require: true
    },
    isActive: {
        type: Boolean,
        default: true
    },
    dateEdit: {
        type: Date,
        default: Date.now()
    }
})

module.exports = mongoose.model('ColorThemeCv', colorThemeCvSchema);