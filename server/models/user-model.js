const mongoose =require("mongoose");

const userSchema = new mongoose.Schema({
// 	username :String,
// 	email : email,
// 	password :String,
// 	phone : Number,
 username:{
	type : String,
	require : true,
 },
 email : {
	type : String,
	require : true,
 },
 phone : {
	type : String,
	require : true,
 },
 password : {
	type : String,
	require : true,
 },
 isAdmin :{
	type : Boolean,
	default: false,
 },

 })

 // define the model or the collectio name
const User =new mongoose.model("User", userSchema);

module.exports =User;
