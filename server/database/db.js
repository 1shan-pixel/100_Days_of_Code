import mongoose from "mongoose" //connects the app with database



 const Connection = async (username, password) => {
    const URL = `mongodb://${username}:${password}@ac-jkhma9r-shard-00-00.h6hws9t.mongodb.net:27017,ac-jkhma9r-shard-00-01.h6hws9t.mongodb.net:27017,ac-jkhma9r-shard-00-02.h6hws9t.mongodb.net:27017/?ssl=true&replicaSet=atlas-e1crl8-shard-0&authSource=admin&retryWrites=true&w=majority `
    try{
        await mongoose.connect(URL, {useNewUrlParser : true})
        console.log("databse connected")
    }
    catch(error){   
        console.log('error while connecting the databse' , error)

    }
}

export default Connection