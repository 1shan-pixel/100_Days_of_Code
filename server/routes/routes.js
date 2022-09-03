//route is the end point of api
//endpoint can change 
//url change huda tyo slash ma kun enter handa kasto dekhine type ko 
import {signupUser} from './controller/user-controller'; 

const router = express.Router(); 

router.post('/signup' ,signupUser) ; 


export default router; 