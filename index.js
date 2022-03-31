
const express = require('express')

const authRouter = require('./routes/auth.routes')
const loginRouter = require('./routes/login.routes')
const clientsRouter = require('./routes/clients.routes')
const app = express()
const corsMiddleware = require('./cors.middleware')

app.use(corsMiddleware)
const mongoose = require('mongoose')
const { response } = require('express')
app.use(express.json())

app.use('/api/auth', authRouter)
app.use('/api/auth', loginRouter)
app.use('/api/clients', clientsRouter)


const start = async () => {
    try {
        await mongoose.connect("mongodb://localhost:27017/MyDb")
        app.listen(3002, () => {
            console.log('server started');
            
        })
    } catch (error) {
        
    }
}

start()