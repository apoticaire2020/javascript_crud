// Crud 
require('dotenv').config();

const { MongoClient } = require('mongodb')
const client = new MongoClient(process.env.MongoUrl)

async function main(){
    await client.connect();
    console.log('Connected ok' );
   
    const db = client.db("myTask")
    const collection = db.collection("documents");
   // INSERT 
//    try {
//         const insertData = await collection.insertMany([{
//             name : "ali", age : 30 , sexe : "male" , hobby : "coding"
//         }, {
//             name : "mohamed", age : 24 , sexe : "male" , hobby : "lecture"
//         } , {
//             name : "aicha", age : 25 , sexe : "female" , hobby : "tennis"
//         }]);
//         console.log(" Inserted data => " , insertData );
//    } catch (e) { throw e}
    
// READ

 try {
     const res =  await collection.find({ sexe : "male"})
       console.log("doc trouve " , res);
 } catch (e) {
       throw    e 
 }
    return 'done !';
   

}

main()
   .then(console.log)
   .catch(console.error)
   .finally( () => client.close());
