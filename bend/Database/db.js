const mongoose = require('mongoose')

const connectToDB = () => {
    try{
        mongoose.connect(process.env.MONGODB_URL)
        console.log('Connected to Database')
    }
    catch(err){
        console.log('Error Connecting')
    }
}

module.exports = connectToDB