const bcrypt = require('bcryptjs')
const usersRouter = require('express').Router()
const User = require('../models/user')
const { error } = require('../utils/logger')

usersRouter.get('/', async(req, res) =>{
    const users = await User.find({})
    res.json(users)
})

usersRouter.post('/', async (req, res) => {
    const {username, name, password} = req.body
    if(username === undefined && password === undefined){
        return res.status(400).json({error: 'username and password missing'})
    }else if (username === undefined){
        return res.status(400).json({error: 'username missing'})
    }else if (password === undefined){
        return res.status(400).json({error: 'password missing'})
    }
    
    const saltRounds = 10
    const passwordHash = await bcrypt.hash(password, saltRounds)

    const user = new User({
        username,
        name,
        passwordHash
    })

    const savedUser = await user.save()
    res.status(201).json(savedUser)
})


module.exports = usersRouter