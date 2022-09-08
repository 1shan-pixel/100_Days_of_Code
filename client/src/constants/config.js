export const API_NOTIFICATION = {
    isLoading: {
        title: "loading.. ", 
        message : "Loading please wait"
    }, 
    isSucess: {
        title: "Success", 
        message : "Data Loaded Succesfully", 
    }, 
    responseFaliure : {
        title: "Error",
        message : "Error while fetching response", 
    }, 
    requestFaliure: {
        title: "Error", 
        message : "Error while parsing request", 
    }, 
    networkFaliure: {
        title: "Error", 
        message : "Unable to connect to server", 
    }, 


}
export const SERVICE_URLS ={
    userSignup : {method: 'POST' , url: './signup'},
}