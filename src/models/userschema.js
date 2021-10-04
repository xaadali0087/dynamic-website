const mongoose=require("mongoose");
const validator=require("validator");


const userSchema=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("invalid Email")
            }
        }
    },
    phone:{
        type:Number,
        required:true,
        min:11
    },
    message:{
        type:String,
        required:true,
    }

})

const MyModel=mongoose.model("MyModel",userSchema)

module.exports=MyModel;