const Router = require('express')
const User = require('../models/User')
const bcrypt = require('bcrypt')
const { check, validationResult } = require('express-validator')
const router = new Router()

router.post('/register',
    [
        check('email', 'inccorrect email').isEmail(),
        check('password', 'incorrect password').isLength({ min: 6 })
    ],
    async (req, res) => {
        try {
            /*const errors = validationResult(req)
            if (errors.isEmpty()) {
                return res.status(400).json({
                    errors: errors.array(),
                    message: 'incorrect data'
                })
            }*/
            const { email, password } = req.body
            const isUsed = await User.findOne({ email })

            if (isUsed) {
                return res.status(300).json({ message: 'this user already exist' })

            }
            const hashedPassword = await bcrypt.hash(password, 10)

            const user = new User({
                email, password: hashedPassword
            })

            await user.save()
            return res.status(201).json({ message: "user is sign up succesfully", user: req.body.email, password: user.password })
        } catch (error) {
            console.log(error.message);
            res.send({ message: 'server error' })
        }
    })
module.exports = router
