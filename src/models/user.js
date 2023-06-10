const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');


const userSchema = new mongoose.Schema(
  { email :
    {type : String,
     required : true,
     validate (v) { if(!validator.isEmail(v)) throw new Error('Email invalid')}
   },
 password : 
   {type : String,
   required : true,
   validate (v){if(!validator.isLength(v,{min:4,max:8}))
         throw new Error ('Password entre 4 et 8 cara ' ); } 
   },
}        
);


userSchema.pre('save',async function () { 
       if(this.isModified('password') ) 
          this.password =await bcrypt.hash(this.password,8)
})
const User = mongoose.model('User' , userSchema );
module.exports = User;