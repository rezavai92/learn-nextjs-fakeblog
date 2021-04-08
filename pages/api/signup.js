import connectDB from '../../middlewares/connectdb'
import User from '../../models/User'

const bcrypt = require('bcryptjs')
const handler =async(req,res)=>{

    if (req.method==="POST"){
        const {name,email,password} = req.body;

        if (name && email && password){


          try  {
            const foundUser = await User.find({email:email})
      
            if(foundUser){
              return  res.status(409).json({msg:"email already taken"})
            }


    const newUser = new User({

        name,
        email,
        password
      });
  
      let s="";
  
  
      let salt =bcrypt.genSaltSync(10);
  
      newUser.password = bcrypt.hashSync(password,salt);
      const u = await newUser.save();
      const payload = {
        user :{
  
            id : u.id
        }
      }
  
      jwt.sign(payload,config.get("jwtSecret"),{expiresIn:"30d"},
        (err,token)=>{
            if(err){
                throw err;
            }
  
  
             res.json({"token":token})
        }
      )

        }
     catch(error){

        res.status(500).json({msg : "internal server error"})
      }  
      
  
        }

    

   
    }
}

export default connectDB(handler)