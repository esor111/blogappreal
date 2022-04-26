import {useState} from "react"
import { publicRequest } from "../../requestMethod"
import "./register.css"
import { Link } from "react-router-dom"
export default function Register() {
const [ usertails, setuDetail]=useState([])
console.log(usertails)
const changeHandler=(e)=>{
 let value= e.target.value 

 setuDetail({...usertails, [e.target.name]:value})
}

const registerHandler=async()=>{
try{
await publicRequest.post("auth/register", {...usertails})
window.location.replace("/login")
}catch(err){
console.log(err)
}
}


const submitHnadler=(e)=>{
e.preventDefault()
}

    return (
        <div className="register">
      <span className="registerTitle">Register</span>
      <form className="registerForm" onSubmit={submitHnadler}>
        <label>Username</label>
        <input className="registerInput" type="text" placeholder="Enter your username..."  name="username" onChange={changeHandler}/>
        <label>Email</label>
        <input className="registerInput" type="text" placeholder="Enter your email..." name="email" onChange={changeHandler}/>
        <label>Password</label>
        <input className="registerInput" type="password" placeholder="Enter your password..." name="password" onChange={changeHandler}/>
        <button className="registerButton" onClick={registerHandler}>Register</button>
      </form>
        <Link to="/login"><button className="registerLoginButton">Login</button></Link>
    </div>
    )
}
