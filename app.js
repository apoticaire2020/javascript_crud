
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






