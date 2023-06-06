
require('dotenv').config();
const mongoose = require('mongoose');
const validator = require('validator');

main().catch( err => console.error(err));
   

async function main(){
      await mongoose.connect(process.env.MongoUrl);

      const User = mongoose.model('User' ,
       { email : {
        type : String,
        required : true,
        validate (v) { if(!validator.isEmail(v)) throw new Error('Email invalid')}
       },
       password : { type : String,
         required : true,
         validate (v) { if(!validator.isLength(v , { min:4 , max:8})) throw new Error (' Password entre 4 et 8 cara ' ); } 
      },
       
      });

     const firstUser = new User( { email : 'hafida@yahoo.fr' , password : "soskjs"});
   //  const seconduser = new User( { name : 'kamal ', age :30 });
    const firstsave  = await firstUser.save();
    // const seconsave = await seconduser.save();
    console.log( firstsave );

         
 }


