const User =require("../models/user-model");
const bcrypt =require("bcryptjs")


// home function  logic
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
        
const userExist = await User.findOne({email });
 if(userExist){
	return res.status(400).json({msg: "email already exists" });

 }
 // hash the password
 const saltRound=10;// make the bcrypt more compllecated
 const hash_password= await bcrypt.hash(password,saltRound);

 const userCreated = await User.create({username , email, phone, password : hash_password});
		res.status(200).json({msg :userCreated});
	
	} catch (error) {
		res.status(500).json("internal server error");
	}	
};


module.exports = { home ,register };