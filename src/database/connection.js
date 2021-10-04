const mongoose=require("mongoose");


mongoose.connect("mongodb://localhost:27017/mearnproject",{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useCreateIndex:true,
}).then(()=>{
    console.log("connection sucessfull");
}).catch((error)=>{
    console.log(error);
})