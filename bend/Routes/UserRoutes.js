const express = require('express')
const { signInUser, creditAnotherUser } = require('../Controllers/userController')

const userRouter = express.Router()

//Signin
userRouter.post('/signin-customer', signInUser)

// credit other user
userRouter.put('/tranfer-funds', creditAnotherUser)

module.exports = userRouter