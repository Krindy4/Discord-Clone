const User = require('../../models/user')
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const postRegister = async (req,res)=>{
try{
  //The user details sent by the user
    const {username,mail,password} = req.body;

    //Checking if theuser already exists
    const userExists = await User.exists({mail : mail.toLowerCase()});

    if(userExists){
        return res.status(409).send('Email already in use');
    }
    //To encrypt a password
    const encryptedPassword = await bcrypt.hash(password, 10);
    
    //Creating new user and saving it to database
    const user = await User.create({
      username,
      mail : mail.toLowerCase(),
      password : encryptedPassword
    });

    //Creating JWT access token
    const token =jwt.sign(
      {
        userId : user._id,
        mail
      },
      process.env.TOKEN_KEY,
      {
        expiresIn : "24h"
      }
    );

    res.status(201).json({
      userDetails : {
        mail : user.mail,
        token : token,
        username : user.username,
        _id : user._id,
      },
    });


}catch(err){
  return res.status(500).send('Error occured. Please try again');  
}
};


module.exports = postRegister;