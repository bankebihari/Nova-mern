const User =require("../models/user-model");


// home function 
const  home = async (req,res) => {
try {
res
   .status(200)
   .send("welcome to my mern series"
   );

} catch (error) {
	console.log(error );
}
};

 

//register logic
const register= async(req,res) => {
	try {
		const { username,email , phone , password} = req.body; 
        
const userExist = User.findOne({email : email});
 if(userExist){
	return res.status(400).json({msg: "email already exists" });

 }

 await User.create({username , email, phone, password});
		res.status(200).json({data});
	
	} catch (error) {
		res.status(500).json("internal server error");
	}	
};


module.exports = { home ,register };