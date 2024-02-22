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
		res.status(200).send("welcome to registeration ,it's lunnch time ")
	
	} catch (error) {
		res.status(400).send({msg : " page not found"})
	}	
};


module.exports = { home ,register };