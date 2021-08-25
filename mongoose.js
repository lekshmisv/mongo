const mongoose=require('mongoose');
const studentSchema=new mongoose.Schema({
    name:{
        type:String,
        require:true,
        trim:true,
    },
    rollno:{
        unique:true,
        type:Number,
        require:true,
        trim:true
    },
    age:{
        type:Number,
        require:true,
        trim:true
    },
    batch:{
        type:String,
        require:true,
        trim:true
    }
});
const student=mongoose.model('student',studentSchema);
mongoose.connect('mongodb://127.0.0.1:27017/',(err,res)=>{
if(err) {   
return console.log(err);
}
console.log('db connected');
});

// insert one insert many

/* const std=new student({
    name:"lekshmi",
    rollno:20,
    batch:"mca"
})
std.save().then((res)=>{
    console.log(res);
}).catch((err)=>{
    console.log(err);
}); */

student.insertMany([
    {
    name:"anju",
    rollno:22,
    batch:"mca"
    },
    {
    name:"lekshmi",
    rollno:20,
    batch:"mca"
    },
    {
    name:"Vijay",
    rollno:23,
    batch:"mca"
    },
]).then((res)=>{
    console.log(res);
}).catch((err)=>{
    console.log(err);
});