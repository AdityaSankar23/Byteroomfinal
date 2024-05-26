const mongoose = require( "mongoose");

const dataSchema = new mongoose.Schema({
    // firstname: {   
    //     type:String,
    //     required:true
    // },
    // lastname: {
    //     type:String,
    //     required:true
    // },
    username: {
        type:String,
        required:true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
})

const Register = new mongoose.model("Register", dataSchema);

module.exports = Register;
