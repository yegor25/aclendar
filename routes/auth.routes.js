const Router = require('express')
const User = require('../models/User')
const bcrypt = require('bcrypt')
const { body, validationResult } = require('express-validator')
const { db } = require('../models/User')
const router = new Router()

router.post('/register',
    
        body('email').isEmail().isLength({min: 8}).normalizeEmail(),
        body('password').isLength({ min: 8 }),
    
    async (req, res) => {
        try {
            const errors = validationResult(req)
            if (!errors.isEmpty()) {
                return res.status(400).json({
                    errors: errors.array(),
                    message: 'incorrect data'
                })
            }
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
            return res.status(201).json({ message: "user is sign up succesfully", user: req.body.email, password: user.password, userId: user._id })
        } catch (error) {
            console.log(error.message);
            res.send({ message: 'server error' })
        }
    })
router.post('/userInfo',
    async (req, res) => {
        try {

            let user = await User.findByIdAndUpdate(req.body.userId,
                {
                    $set: {
                        userInfo: req.body.userInfo 
                    }
                }, { returnOriginal: false });


            return res.json(user)
            

        } catch (error) {

        }
    })
/*{
                            companyName: req.body.companyName,
                            industry: req.body.industry,
                            role: req.body.role,
                            clientsCount: req.body.clientsCount,
                            crmUsers: req.body.crmUsers
                        }*/
module.exports = router
