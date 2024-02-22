const mongoose =require("mongoose");

const userSchema = new mongoose.Schema({
	username :String,
	email : email,
	password :String,
	phone : Number,
})

const User =new mongoose.model("User", userSchema);

module.exports =User;
