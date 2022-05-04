


const mongoose = require('mongoose')
 const Clients = mongoose.model( 'Clients', new mongoose.Schema( {
    owner: {type: String, ref: 'User'},
    name: {type:String},
    surname: {type:String},
    patronymic: {type: String},
    phone: {type: Number},
    gender: {type: String},
    birthday: {type: Date},
    agreement: {type: Boolean}
}))
module.exports = Clients