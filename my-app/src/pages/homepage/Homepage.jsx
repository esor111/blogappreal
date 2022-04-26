import { useEffect } from "react";
import Header from "../../components/header/Header";
import Posts from "../../components/posts/Posts";
import Sidebar from "../../components/sidebar/Sidebar";
import Topbar from "../../components/topbar/Topbar";
import {useDispatch} from "react-redux"
import { useLocation } from "react-router-dom";

import {getblogStart, getblogSuccess, getblogFaliure} from "../../redux/blogRedux"

import "./homepage.css";
import { publicRequest } from "../../requestMethod";

export default function Homepage() {
const dispatch = useDispatch()
const {search} = useLocation()
useEffect(()=>{
  const Blog = async()=>{
    dispatch(getblogStart())
        try{
    const res = await publicRequest.get("/posts"+ search)
    dispatch(getblogSuccess(res.data))
    
        }catch(err){
    dispatch(getblogFaliure())
        }
    }
    Blog()
    
})


  return (
    <>
    <Topbar/>
      <Header/>
      <div className="home">
      <Sidebar />

        <Posts />
      </div>
    </>
  );
}
