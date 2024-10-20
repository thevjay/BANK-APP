const User = require('../Models/userModel')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const nodemailer = require("nodemailer");
require('dotenv').config()


const period = 1000 * 60 * 60 * 24 * 3


const signUpAdmin=async(req,res)=>{
    try{

        const {role,username,email,address,password}=req.body

        const existingAdmin=await User.findOne({email})
        if(existingAdmin){
            res.status(402).json({
                success:false,
                message:"This admin already exist."
            })
        }
    
        const hashPassword=await bcrypt.hash(password,10)
        const newAdmin=new User({
            role,
            username,
            email,
            address,
            password:hashPassword
        })

        const savedAdmin=await newAdmin.save()
        console.log(savedAdmin)

        res.status(200).json({
            success:true,
            message:"Admin created successfully",
            savedAdmin
        })
    }
    catch(error){
        console.log(error)
        res.status(500).json({
            success:false,
            message:"Internal server error "
        })
    }
}

const signInAdmin=async(req,res)=>{
    try{

        const {email,password}=req.body

        if(!email || !password){
            res.status(402).json({
                success:false,
                message:"Reqyuired all fields"
            })
        }

        const emailExist=await User.findOne({email})
        if(!emailExist){
            res.status(402).json({
                success:false,
                message:"Email does not exist"
            })
        }

        const isMatched=await bcrypt.compare(password,emailExist.password)
        if(!isMatched){
            res.status(402).json({
                success:false,
                message:"Invalid password"
            })
        }

        const token=jwt.sign({id:emailExist._id},"fsd",{expiresIn:"1d"})

        res.cookie("adminLogin",token,{maxAge:period,httpOnly:true})
        console.log("Generated Token:",token)

        res.status(200).json({
            success:true,
            message:"Admin login successfully",
            token,
            emailExist
        })

    }
    catch(error){
        console.log(error)
        res.status(500).json({
            success:false,
            message:"Internal server error "
        })
    }
}

const createUserAccount=async(req,res)=>{
    try{

        const {role,username,email,address,NIN_Number}=req.body

        const acctNumber=await Math.floor(Math.random()*10000000000)+1
        console.log(acctNumber)

        const hashPassword=await bcrypt.hash(acctNumber.toString(),10)
        const newUser=new User({
            role,
            username,
            email,
            address,
            NIN_Number,
            accountNumber:acctNumber,
            password:hashPassword
        })

        const savedUser=await newUser.save()

        // const transporter = nodemailer.createTransport({
        //     service: 'gmail',
        //     host: process.env.MAIL_HOST,
        //     port: 465,
        //     secure: true,
        //     auth: {
        //       user: process.env.MAIL_USER,
        //       pass: process.env.MAIL_PASS
        //     },
        //     from: "jammulavijay01@gmail.com"
        //   });

        //   const info = await transporter.sendMail({
        //     from: '"Easy Bank 👻" <jammulavijay01@gmail.com>', // sender address
        //     to: email, // list of receivers
        //     subject: "Account Created Successfully", // Subject line
        //     html: `
        //     <p>Hello ${username},</p>
        //     <p>Your account has been created successfully.</p>
        //     <p>Your account number is ${acctNumber}.</p>
        //     <p>Note: Your Account Number, ${acctNumber} is your initial password.</p>
        //     <p>Click <a href="https://yourwebsite.com/update-password">here</a> to log in and update your password.</p>
        // `
        //   });
        
        //   console.log("Message sent: %s", info.messageId);
    
           res.status(201).json({success: true, message:"User Created Successfully", savedUser})
        }
    catch(error){
        console.log(error)
        res.status(500).json({
            success:false,
            message:"Internal Server error"
        })
    }
}


const showAllUsers=async(req,res)=>{
    try{

        const user=await User.find({})
        res.status(200).json({
            success:true,
            message:"all users",
            user
        })
    }
    catch(error){
        console.log(error)
        res.status(500).json({
            success:false,
            message:"Internal Server error"
        })
    }
}

const creditUserAccount=async(req,res)=>{
    try{

        const {accountNumber,amount}=req.body

        let user=await User.findOne({accountNumber})
        const prevBalance=user.accountBalance
        const newBalance=prevBalance+Number(amount)

        if(user){
            user.accountBalance=newBalance;
            let updatedAccBalance=await user.save()

            res.status(200).json({
                success:true,
                message:"Balance updated successfully",
                updatedAccBalance
            })
        }else {
            throw new Error('This user does not exist.')
        }
    }
    catch(error){
        console.log(error)
        res.status(500).json({
            success:false,
            message:"Internal Server Error"
        })
    }
}


const deleteUserAccount=async(req,res)=>{
    try{

        const id=req.params.id

        if(!id){
            res.status(402).json({
                success:false,
                message:"User ID is undefined"
            })
        }

        const deletedUser=await User.findByIdAndDelete(id)

        if(deletedUser){
            res.status(200).json({
                success:true,
                message:"User deleted successfully",
                deletedUser
            })
        }
    }
    catch(error){
        res.status(500).json({
            success:false,
            message:"Internal Server error"
        })
    }
}


module.exports={signUpAdmin,signInAdmin,createUserAccount,showAllUsers,creditUserAccount,deleteUserAccount}