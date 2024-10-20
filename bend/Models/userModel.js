const mongoose = require('mongoose')

const userSchema=new mongoose.Schema({
    role:{
        type:String,
        enum:['admin','staff','customer']
    },
    username:String,
    email:String,
    password:{
        type:String,
        required:function(){
            if(this.role !=='customer'){
                return false
            }
            return true
        }
    },
    accountBalance:{
        type:Number,
        required:function (){
            if(this.role == 'customer'){
                return true
            }
            return false
        },
        default:0
    },
    accountNumber:{
        type:Number,
        required:function (){
            if(this.role == 'customer'){
                return true
            }
            return false
        },
        index:true,
        unique:true
    },
    address:String,
    NIN_Number:{
        type: Number,
      required: function () {
        if (this.role == 'customer') {
          return true
        }
        return false
      }
    },
},{timestamps:true})

// model
const User = mongoose.model('User', userSchema)

module.exports = User