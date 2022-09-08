
//this is made for calling api when hitting up the sign up button 

import axios from "axios" ; 
import { API_NOTIFICATION, SERVICE_URLS } from "../constants/config";

const API_URL = " http://localhost:3000 " ; 
 //saying which url to intercept through axios instance 
const axiosInstance  = axios.create({
    baseURL : API_URL , 
    timeout: 10000, 
    headers : {
        "content-type" : "applicaiton/json", 
    }, 

})

axiosInstance.interceptors.request.use(
    function(config){
        return config; 
    }
    ,
    function(error){
        return Promise.reject(error); 
    }, 
)

axiosInstance.interceptors.response.use(
    function(response){
        return processResponse(response)
    }, 
    function(error){
        return Promise.reject(processError(error)); 
    }



)

const processResponse = (response) => {
   if(response.status === 200){
    return {isSucess: true, data: response.data}
   }
   else{
    return {
        isFailure: true , 
        status: response?.status,
        msg: response?.msg, 
        code: response?.code, //so that code doesn't break here


   }
   }
}
const processError = (error)=> {
    //error three types : either request or response or nothing comes in the error 
    //response comes in error when request is succesful but reponse fails to happen and other cases follow suit similarly. 

    if(error.response){
        console.log("Error in the response " ,error.toJSON); 
        return {
           
            isError: true, 
            msg: API_NOTIFICATION.responseFaliure, 
            code: error.response.status, 
            
        }

    }
    else if(error.request){
        console.log("Error in request", error.toJSON()); 
        return{
            
       
        isError: true, 
            msg: API_NOTIFICATION.responseFaliure, 
            code: ""
            
    }
}
    else{
        console.log("Error in network", error.toJSON()); 
        return {

        
        isError: true, 
            msg: API_NOTIFICATION.networkFaliure, 
            code: ""
        }
    }
    
}

const API = {

}; 

for(const[key,value ] of Object.entries(SERVICE_URLS)){
    API[key] = (body,showUploadProgress, showDownloadProgress ) =>//this is a function that takes three params
    {
        axiosInstance({
            method: value.method, 
            url: value.url, 
            data: body, 
            responseType: value.responseType, 
            onUploadProgress: function(progressEvent){
                if(showUploadProgress){
                    let percentageCompleted = 
                    Math.round(progressEvent.loaded * 100/progressEvent.total)
                    showUploadProgress(percentageCompleted)


                }
            }, 
            onDownloadProgress: function(progressEvent){
                if(showDownloadProgress){
                    let perecentageCompleted = Math.round(progressEvent.loaded * 100/ progressEvent.total)
                    showDownloadProgress(perecentageCompleted)
                }
            }
        })
    }

}
//making common apis through api interceptors


