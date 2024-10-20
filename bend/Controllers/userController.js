const User = require('../Models/userModel')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

const period=1000*60*60*24*3

const signInUser=async(req,res)=>{
    try{

        const {email,password}=req.body

        if(!email || !password){
            res.status(402).json({
                success:false,
                message:"Required all Fields"
            })
        }

        const user=await User.findOne({email})
        if (!user) {
            return res.status(401).json({ message: 'Invalid Email or Password' });
        }

        const isValidPass = await bcrypt.compare(password, user.password);

        if (!isValidPass) {
            return res.status(401).json({ message: 'Invalid Password' });
        }

        const token=jwt.sign(
            { userid: user._id },"fsd",
            {
              expiresIn: '1d',
            })

        res.cookie('userId', user._id, { maxAge: period, httpOnly: true });

        res.status(200).json({
            success: true,
            message: 'Authentication Successful',
            user,
            token:token
        });
    }
    catch(error){
        console.log(error)
        res.status(500).json({
            success:false,
            message:"Internal Server error"
        })
    }
}

const creditAnotherUser=async(req,res)=>{
    try{

        const { accountNumber, amount } = req.body;

        const id = req.cookies.userId;

        const user = await User.findOne({ accountNumber: accountNumber });


        if(user){
            const recipientBalance=user.accountBalance;
            const ownerOfAccount=await User.findById(id)

            if(ownerOfAccount){
                const ownerBalance=ownerOfAccount.accountBalance
                const newBalance=ownerBalance - Number(amount)
                const newRecipientBalance=recipientBalance + Number(amount)

                if(ownerBalance>=amount){
                    const updatedOwnerAcct=await User.findByIdAndUpdate({_id:id},{accountBalance:newBalance})

                    //Credit other user
                    const updateRecipientAcct=await User.findByIdAndUpdate({accountNumber},{accountBalance:newRecipientBalance})

                    res.status(202).json({
                        success: true,
                        updateRecipientAcct,
                        updatedOwnerAcct,
                    });
                }else{
                    console.log(`Owner account not found for ID: ${id}`);
                    throw new Error("Owner account not found");
                }
            }else{
                throw new Error("Invalid account number");
            }
        }
    }
    catch(error){
        console.log(error)
        res.status(500).json({
            success:false,
            message:"Internal Server error"
        })
    }
}
module.exports={signInUser,creditAnotherUser}
