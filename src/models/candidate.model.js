const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const candidateSchema = mongoose.Schema({
    fullname: {
        type: String
    },
    email: {
        type: String,
        require: true,
        unique: true,
        lowercase: true
    },
    password: {
        type: String, 
        require: true,
    }
})

candidateSchema.pre('save', async function (next) {
  try {
    // Bỏ muối 🤢
    const salt = await bcrypt.genSalt(10);
    // Hash (salt + hash)
    const passwordHashed = await bcrypt.hash(this.password, salt);
    // save password
    this.password = passwordHashed;
    next();
  } catch (error) {
    next(error);
  }
});

candidateSchema.methods.isValidPassword = async function (newPassword) {
  try {
    return await bcrypt.compare(newPassword, this.password);
  } catch (error) {
    throw new Error(error);
  }
}

module.exports = mongoose.model('Candidate', candidateSchema);