// Crud 
require('dotenv').config();

const { MongoClient } = require('mongodb')
const client = new MongoClient(process.env.MongoUrl)

async function main(){
    await client.connect();
    console.log('Connected ok' );
   
    const db = client.db("newDb")
    const docs = db.collection("docs");
   // INSERT 
   // try {
   //      const insertData = await docs.insertMany([{
   //          name : "abbass", age : 30 , sexe : "male" , hobby : "coding"
   //      }, {
   //          name : "aissa", age : 31 , sexe : "male" , hobby : "lecture"
   //      } , {
   //          name : "khadija", age : 32 , sexe : "female" , hobby : "tennis"
   //      }]);
   //      console.log(" Inserted data => " , insertData );
   // } catch (e) { throw e}
    
// READ

//   try {
//       const res =  await collection.find({ age : 30})
//       console.log(await res.toArray());
//  } catch (e) {throw    e}
 //UPDATE one
//  try {
//     const updateOmar =  await collection.updateOne({ name : "omar"}
//     ,{$set:{age :65}})
//     console.log(await updateOmar);
// } catch (e) {throw    e}
    
   // update many 
//    const res =  await collection.updateMany(
//     { sexe: 'female' },
//     { $set: { 'hobby' : "lecture" } }
//   );
//  delete 
//  try {
//      const deleteemany = await milaffat.deleteMany({});
//      console.log(await deleteemany);
//  } catch (e) { throw e}


    return 'done !';
 }

main()
   .then(console.log)
   .catch(console.error)
   .finally( () => client.close());
