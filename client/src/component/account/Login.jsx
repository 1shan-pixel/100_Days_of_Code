import {useState} from 'react'; 
import {API} from '../../services/api.js'; 
//created a function type ko using arrow function , you better know the syntax 
import {Box, TextField, Button, styled,Typography} from '@mui/material'; 
import { signupUser } from '../../../../server/controller/user-controller';
 // this is how you import packages in react.js 

 const Component = styled(Box)`
 width : 400px; 
 margin: auto; 
 box-shadow: 5px 2px 5px 2px rgb(0 0 0/ 0.6); 
 border-radius: 10px; 
 justifyContent : center; 
 `


const imageURL = 'https://www.sesta.it/wp-content/uploads/2021/03/logo-blog-sesta-trasparente.png';







const  Image = styled('img')({
    width: 100 , 
    margin: 'auto', 
    display: 'flex', 
    padding: 10,//during passing to the styled package, if it is a html tag, we must pass it as an object.  

})

const Wrapper = styled(Box)
`
    padding: 25px 35px; 
    display : flex;  
    flex: 1 ; 
    flex-direction: column; 
    & > div, & > button, & > p {
        margin-top: 20px ; 
    } 

`

const LoginButton = styled(Button)
`
    border-radius: 10px; 
    
    `


const SignUpButton = styled(Button)`    
    text-transform: none; 
    color: blue; 
    height : 30px; 
`
const signUpInitialValues = {
    name : '', 
    username : ' ', 
    password: ' ',
}
//here we dont need to put commas as it is not an html element
const Login = () => {
    const [account, toggleAccount] = useState('login'); 
    const [signup, setSignup] = useState(signUpInitialValues) ; 
    //toggleAccount = a function that updates the state
    const toggleSignUp = () => {
        account === 'signup' ? toggleAccount('login') : toggleAccount('signup') ; 


    }
    const onInputChange = (e) => {
        setSignup({...signup, [e.target.name]: e.target.value})
    }
    const signupUser = async ()=> {
        let response = await API.userSignup(signup) 
    }
    return(
       <Component> 
        < Image src = {imageURL}  alt = "sth"/>
        {
        account === 'login' ?
            <Wrapper>
                <TextField variant = "standard" label = "Enter your name" />
                <TextField variant = "standard" label = "Enter your password" />
                <LoginButton variant = "contained"> Login </LoginButton>
                <Typography style = {{textAlign: 'center'}}> Or</Typography>
                <SignUpButton onClick = {()=> toggleSignUp()}>Create an account </SignUpButton> 
            </Wrapper> 
 
        :   
            <Wrapper>
                <TextField variant = "standard" onChange = { (e)=> onInputChange(e)} name = 'name' label = "Full Name " />
                <TextField variant = "standard" onChange = { (e)=> onInputChange(e)} name = 'username' label = "User Name " />
                <TextField variant = "standard" onChange = { (e)=> onInputChange(e)} name = 'password' label = "Password"/>f
                <LoginButton onClick = {() => signupUser()}variant = "contained">SignUp </LoginButton> 
                <Typography style = {{textAlign: 'center'}}> Or</Typography>
                <SignUpButton onClick = {()=> toggleSignUp()}>Already have an account?  </SignUpButton> 
            </Wrapper>
}
       </Component>
    )
}
// now exporting the Login function from this file 
export default Login 