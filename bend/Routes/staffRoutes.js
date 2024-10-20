const express = require('express')
const { signInStaff ,createUserAccount,showAllUsers,creditUserAccount} = require('../Controllers/staffController')
const isAuthorized =require('../Middlewares/authMiddleware')
const  route = express.Router()


//signin admin
route.post('/signin-staff',signInStaff)

// create user
route.post('/create-user', isAuthorized, createUserAccount)

// all users
route.get('/all-users', isAuthorized, showAllUsers)

// creadit user
route.put('/credit-user', isAuthorized, creditUserAccount)

module.exports=route