const mongoose = require('mongoose');
const categoryThemeCvSchema = mongoose.Schema({
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
    name: {
        type: String,
        maxLength: 150,
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

module.exports = mongoose.model('CategoryThemeCv', categoryThemeCvSchema);