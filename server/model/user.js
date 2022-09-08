import mongoose from "mongoose" ; 

const userSchema = mongoose.Schema({
    name: {
        type : String, 
        required: true ,
    }, 
    username: {
        type: String, 
        unique: true , 
        required : true, 


    },
    password: {
        type: String, 
        required : true, 
    }, 
})


const user = mongoose.model('user', userSchema); //creates a collection with a given schema 

export default user; 