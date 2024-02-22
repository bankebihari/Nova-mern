const mongoose =require("mongoose");

const URI= "mongodb://localhost:27017/mern_admin";
mongoose.connect(URI);



//const URI = "mongodb+srv://bankebihari1206:<password>@cluster0.jftekbp.mongodb.net/mern_admin?retryWrites=true&w=majority&appName=Cluster0";

//this process is used for only the  .env database connection
//const URI=process.env.MONGODB_URI;

const connectDb = async () =>{
	try {
		await mongoose.connect(URI);
		console.log("database connection successful to DB");
	} catch (error) {  
		console.log("database connection failed");
		process.exit(0);
		
	}
};

module.exports = connectDb;
