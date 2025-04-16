const { required } = require("joi");
const mongoose = require("mongoose");
const schema = mongoose.Schema;
const passportLocalMongoose = require("passport-local-mongoose");

const userSchema = new schema({
    email: {
        type: String,
        required : true
    },
    address: {
        street: { type: String, default: "" },
        city: { type: String, default: "" },
        state: { type: String, default: "" },
        zip: { type: String, default: "" }
    },          
    createdAt: { 
        type: Date, 
        default: Date.now 
    },

});

userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("User" , userSchema);