require('dotenv').config();
const express = require("express");
const mongoose= require('mongoose');
const nodemon= require('nodemon');
const router=require('./router/auth-router');

const connectDb = require("./utils/db")
//creating app constant and passing    the  rest api
const app=express();

//middleware
app.use(express.json()); // middleware than now we can use json
app.use("/api/auth",router) 

// app.get('/' , (req,res)=>{
//     res.send(`welcome to my home page usign the get request`);

// });

// app.get('/register',(req,res)=>{
//     res.send(`welcome to refister page`)
// });


const PORT = 5000;

//connectDb().then(() => {

// start the server
connectDb();
app.listen(PORT, () =>{
	console.log(`server is running at  port ${PORT}`);

})
//});