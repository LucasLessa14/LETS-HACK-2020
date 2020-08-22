const mongoose = require('../../database/database');

const CompanySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    about: {
        type: String,
        required: true,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        require: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    }
});

const Company = mongoose.model('Company', CompanySchema);

module.exports = Company;