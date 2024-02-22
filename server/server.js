require("dotenv").config();
const express = require("express");
const mongoose= require('mongoose');
const nodemon= require('nodemon');
const router=require('./router/auth-router');

const connectDb = require("./utils/db")

const app=express();

app.use(express.json()); // middleware
app.use("/api/auth",router) 

// app.get('/' , (req,res)=>{
//     res.send(`welcome to my home page usign the get request`);

// });

// app.get('/register',(req,res)=>{
//     res.send(`welcome to refister page`)
// });


const PORT =process.env.PORT|| 3000

connectDb().then(() => {


app.listen(PORT) , () =>{
	console.log(`server is running on port no ${PORT}`);

};
});