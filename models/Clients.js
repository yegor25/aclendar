


const mongoose = require('mongoose')
 const Clients = mongoose.model( 'Clients', new mongoose.Schema( {
    owner: {type: String, ref: 'User'},
    name: {type:String},
    surname: {type:String},
}))
module.exports = Clients