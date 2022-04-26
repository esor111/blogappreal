import {loginStart, loginSuccess, loginfaliure} from "../redux/userRedux"

import { publicRequest } from "../requestMethod"
 export const Loginn = async(dispatch, user)=>{
dispatch(loginStart())
    try{
const res = await publicRequest.post("/auth/login", user)
dispatch(loginSuccess(res.data))

    }catch(err){
dispatch(loginfaliure())
    }
}

export default Loginn



