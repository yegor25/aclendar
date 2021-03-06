const Router = require('express')

const Clients = require('../models/Clients')
const clientsRouter = new Router()

clientsRouter.post('/add', async (req, res) => {
    try {
        const { name, surname, patronymic, phone, gender, birthday, agreement, userId } = req.body
        const client = await new Clients({
            owner: userId,
            name,
            surname,
            patronymic,
            phone,
            gender,
            birthday,
            agreement
        })
        await client.save()
        res.json(client)
    } catch (error) {
        console.log(error);
    }
})

clientsRouter.get('/', async (req, res) => {
    try {
        const {userId} = req.query
        const clients = await Clients.find( {owner: userId})
        res.json({clients})
        res.send('ok')
    } catch (error) {
        
    }
})
clientsRouter.delete('/delete/:id', async (req,res) => {
    try {
        const client = await Clients.findOneAndDelete({_id:req.params.id})
        res.json(client)
    } catch (error) {
        
    }
})
module.exports = clientsRouter