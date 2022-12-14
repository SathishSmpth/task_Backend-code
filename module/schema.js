const mongoose = require("mongoose");

const schema = mongoose.Schema;

const userDetail = {
    firstName:String,
    lastName:String,
    email:String,
    password:String,
    dob:String,
    phone:Number,
    state:String,
    date:{type:schema.Types.Mixed}
}


const users = mongoose.model("usersList", userDetail )


module.exports = users;