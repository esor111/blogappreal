import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { publicRequest , userRequest} from "../../requestMethod";
import { useSelector } from "react-redux";
import "./singlePost.css";

export default function SinglePost() {
  const [updateMode, setUpdatemode]=useState(false)

const location = useLocation()
//
const [title, setTitle]=useState()
const [decs, setDecs]=useState()
//

const id = location.pathname.split("/")[2]  
const [pdata, setSingle]=useState({})
const PF = "http://localhost:5000/images/"

const user = useSelector(state=>state.user.currentUser?.username)

useEffect(()=>{

  let getDta=async()=>{
    let res =await publicRequest.get(`/posts/${id}`)
setSingle(res.data)
  }
  getDta()
},[id])



const handleDelete=async()=>{
	try{
await publicRequest.delete(`/posts/${pdata._id}`,
 {data: {user},}
 
 )
 window.location.replace("/")

	}catch(err){}
}


const handleUpdate=async()=>{
  try{
   await userRequest.put(`/posts/${pdata._id}`, {user, title, decs}
   
   )
   window.location.replace("/")
  
  }
  catch(err){
  console.log("user cant update")
  }
  }
  


  return (

    <div className="singlePost">
    <div className="singlePostWrapper">
      <img
        className="singlePostImg"
        src={PF +pdata.photo}
        alt=""
      />

      {updateMode ?   <input
        type="text"
        placeholder={pdata.title}
        className="singlePostTitleInput"
        autoFocus
        onChange={(e) => setTitle(e.target.value)}
      /> : (

      
      <h1 className="singlePostTitle" placeholder={title}>
        {pdata.title}
        {pdata.username === user && (
          <div className="singlePostEdit">
            <i className="singlePostIcon far fa-edit" onClick={() =>setUpdatemode(true)}></i>
            <i
            className="singlePostIcon far fa-trash-alt"
            onClick={handleDelete}
          ></i>
            </div>

        )}
      </h1>
      
        ) }
      <div className="singlePostInfo">


        <span>
          <Link to={`/?user=${pdata.username}`} ><span>See {pdata.username} post's</span></Link> 
          <b className="singlePostAuthor">
            <Link className="link" to="/posts?username=Safak"></Link>
          </b>
        </span>



        <span>{pdata.createdAt}</span>
      </div>

      {updateMode ?  <textarea
        className="singlePostDescInput"
        onChange={(e) => setDecs(e.target.value)}
        placeholder={pdata.decs}
      /> : (
      <p className="singlePostDesc" >{pdata.decs}</p>
      )}
{updateMode &&(
<button style={{background: "cyan", border: "none", padding: "10px 20px"}} onClick={handleUpdate} className="singlePostButton">Publish</button>

)}
    </div>

  </div>
  );
}
