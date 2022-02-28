const mongoose = require('mongoose');
const termSchema = mongoose.Schema({
    name: {
        type: String,
        require: true,
        maxLength:150
    },
    type: {
        type: Number,
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

module.exports = mongoose.model('Term', termSchema);