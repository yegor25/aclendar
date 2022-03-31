
 const mongoose = require('mongoose')
 const User = mongoose.model( 'User', new mongoose.Schema( {
    email: {type: String, unique: true},
    password: {type: String},
    client: [{type:mongoose.Types.ObjectId, ref: 'Clients'}]
}))
module.exports = User

