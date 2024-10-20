const express = require('express')
const { signUpAdmin, signInAdmin, createUserAccount, showAllUsers, creditUserAccount, deleteUserAccount } = require('../Controllers/adminController')
const isAuthorized = require('../Middlewares/authMiddleware')
const route = express.Router()


//signup admin
route.post('/signup-admin',signUpAdmin)

//signin admin
route.post('/signin-admin',signInAdmin)

//create user
route.post('/create-user',isAuthorized,createUserAccount)


//all users
route.get('/all-users',isAuthorized,showAllUsers)

//credit user
route.put('/credit-user',isAuthorized,creditUserAccount)

//delete
route.delete('/delete-user/:id',deleteUserAccount)




module.exports=route