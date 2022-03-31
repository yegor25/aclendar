const Router = require('express')
const jwt = require('jsonwebtoken')
const User = require('../models/User')
const bcrypt = require('bcrypt')
const { json } = require('body-parser')
const keys = require('../config/keys')
const { db } = require('../models/User')
const Tokens = require('../models/Tokens')
 const loginRouter = new Router()

 
loginRouter.post('/login', async (req, res) => {
        try {
            const {email, password} = req.body
            const candidate =  await User.findOne({email: email})
            if(!candidate) {
                return res.status(400).json( {message: 'Такого Email нет в базе'})
            }
            
            const isMatched = bcrypt.compareSync(password, candidate.password)
             if(!isMatched) {
                return res.status(400).json( {message: 'Пароли не совпадают'} )
            }
            const jwtSecret = 'wfwqfqw87t8qwftqwfqw87tfqwqw'
            const token = jwt.sign(
                {userId: candidate._id},
                jwtSecret,
                {expiresIn: '1h'}
            )
           User.insertMany({token: token})
      
        } catch (error) {
            console.log(error);
        }
      
        /*if (candidate) {
            const passwordResult = bcrypt.compareSync(req.body.password, candidate.password)
            if (passwordResult) {
                const token = jwt.sign( {
                    email: candidate.email,
                    userId: candidate._id
                }, keys.jwt, {expiresIn: 60*60})
                res.status(200).json({token: `Bearer ${token}`, message: "success", isAuth: true})
            } else {
               return res.status(401).json({message: 'no any matches', isAuth: false})
            }
        } else {
           return res.status.json( { message: 'errrorrr'} )
        }*/
       
})

module.exports = loginRouter