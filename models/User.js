
const mongoose = require('mongoose')
const User = mongoose.model('User', new mongoose.Schema({
    email: { type: String, unique: true },
    password: { type: String },
    userInfo: {
        companyName: {type: String},
        industry: {type: String},
        role: {type: String},
        clientsCount: {type: Number},
        crmUsers: {type: Number}
    },
    

    client: [{ type: mongoose.Types.ObjectId, ref: 'Clients' }]
}))
module.exports = User

