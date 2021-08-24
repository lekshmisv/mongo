//CRUD opertations Create Read update Delete 

// package called
const mongodb=require('mongodb');
 

//const MongoClient=mongodb.MongoClient
//const ObjectID=mongodb.ObjectId

const {MongoClient,ObjectId}=mongodb;
const connectionUrl="mongodb://127.0.0.1:27017"
const dbName="class"
MongoClient.connect(connectionUrl,(error,client)=>{
    if(error){
        return console.log(error);
    }
    const db = client.db(dbName)
    //insert ------------------------------
    
    /* db.collection('student').insertOne({
        name:"rafi",
        rollNo:20,
        age:23,
        batch:"mca"
    },(error,result)=>{
        if(error){
            return console.log(error);
        }
        console.log(result);
    }); */


    //insert many 

  /* db.collection('student').insertMany([
        {
            _id:new ObjectId("611df5d54ceaa0110ab580aa"),
            name:"Lechu",
            rollNo:21,
            age:23,
            batch:"mca" 
        },
        {
            _id:new ObjectId("611df5d54ceaa0110ab580ac"),
            name:"Anju",
            rollNo:25,
            age:24,
            batch:"mca" 
        },

    ]).then((result)=>{
        console.log(result);
    }).catch((error)=>{
        console.log(error);
    }) */

   /* db.collection('student').findOne({_id:ObjectId("611df5d54ceaa0110ab580ca")}).then((student)=>{
        console.log(student);
    }).catch((err)=>{
        console.log(err);
    })
    
    students.forEach((student)=>{
        console.log(student);
    }); */

    //update 

    //update one upadate many

   /* db.collection('student').updateOne({
        _id:ObjectId("611df5d54ceaa0110ab580ac")
    },{
      $set:{
          name:"Anju boss",
      },
      $inc:{
          rollNo: 2
      }
    }).then((result)=>{
        console.log(result);
    }).catch((error)=>{
        console.log(error);
    }) */

/* db.collection('student').updateOne({
        _id:ObjectId("611df5d54ceaa0110ab580aa")
    },{
      $set:{
          name:"Lekshmi SV",
      }
    }).then((result)=>{
        console.log(result);
    }).catch((error)=>{
        console.log(error);
    }) 
    /* db.collection('student').updateMany({
        batch:"mca"
    },{
        $inc:{
            rollNo:2
        }
    }).then((result)=>{
        console.log(result);
    }).catch((error)=>{
        console.log(error);
    }); */



    //delete 

    /* db.collection('student').deleteOne({
         _id:ObjectId("6124a344d6ec3a38ecca8b19")
    }).then((result)=>{
        console.log(result);
    }).catch((error)=>{
        console.log(error);
    }); */

     db.collection('student').deleteMany({
        rollNo:22
    }).then((result)=>{
        console.log(result);
    }).catch((error)=>{
        console.log(error);
    });

});
