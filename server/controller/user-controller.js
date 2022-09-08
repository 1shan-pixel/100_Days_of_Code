import user from  '../model/user.js'; 


export const signupUser = async (request, response)=>{
    //use try catch for error handling for external entity \
    try{
        const User = request.body; 
        const newUser = user(User); 
        await newUser.save(); 

        return response.status(200).json({"msg" : "GOD DID!"}); 


    }
    catch(error){
        return response.status(500).json({"msg" : "Errow while signing up"}); 
    }

}