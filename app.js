
require('dotenv').config();
const { connectDb } = require('./src/services/mongoose');
const express = require('express');//framework cote serveur HTTP +ROUTES 
 
const userRoutes = require('./src/routes/user');

const app = express();
const port = process.env.PORT || 3000

// connection dabtabase
connectDb().catch( err => console.error(err));
// appeler  routes 
app.use(express.json());
app.use(userRoutes);



// LANCER APP 
app.listen(port , () => 
       console.log(`Server running at : http://localhost:${port}`))





//  try {
//      const restab =  await collection.find({ sexe : "male"})
//        console.log(await   restab.toArray());
//  } catch (e) {
//        throw  e ; }
// UPDATE  
// try {
//        const updatemohamed = await collection.updateOne({ name : "mohamed"}, {
//            $set : { name : "Mohammed"  , age : 40},
//        }) ;
//        console.log(await updatemohamed);
// } catch (e) { throw e; }
    // DELETE 
try {
       const deleteaicha = await collection.deleteOne   ({ name : "aicha"});
       console.log(await deleteaicha);
} catch (e) { throw e; }    
return 'done !';   
}

  
   



