const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

//  crere schema
const userSchema = new mongoose.Schema(
  { email :
    {type : String,
     required : true,
     unique : true,
     lowercase : true,
     trim : true,
     validate (v) { if(!validator.isEmail(v)) throw new Error('Email invalid')}
   },
 password : 
   {type : String,
   required : true,
   validate (v){if(!validator.isLength(v,{min:4,max:8}))
         throw new Error ('Password entre 4 et 8 cara ' ); } 
   },
   authTokens: [{ 
    authToken: {
      type: String,
      required: true
    }
   }]
}        
);
// jwt validation 
userSchema.methods.generateAuthTokenAndSaveUser =async function () {
  const authToken = jwt.sign({ _id  : this._id.tostring() } , 'sos');
  this.authTokens.push({ authToken }) ;
  await this.save()
  return authToken ;
}

// login user 
userSchema.statics.findUser = async (email, password) => { 
   const user = await User.findOne({ email }) ;
   if (!user)  throw new Error ('erreur pas possible connexion') ;
   const isPasswordValid = await bcrypt.compare(password, user.password) ; 
   if (!isPasswordValid) throw new Error ('erreur pas possible  connexion') ;

   return user ;
}

userSchema.pre('save',async function () { 
       if(this.isModified('password') ) 
          this.password = await bcrypt.hash(this.password,8)
})

// passer schema au model
const User = mongoose.model('User' , userSchema );

module.exports = User;