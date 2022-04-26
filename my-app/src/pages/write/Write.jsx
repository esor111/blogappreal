

import { useState } from "react";
import Topbar from "../../components/topbar/Topbar";
import "./write.css";
import { userRequest } from "../../requestMethod";
import { useSelector } from "react-redux";

export default function Write() {
  const [title, setTitle] = useState("");
  const [decs, setDesc] = useState("");
  const [file, setFile] = useState(null);
const username = useSelector(state=> state.user.currentUser?.username)
  const handleSubmit = async (e) => {

    e.preventDefault();
    const newPost = {
      username,
      title,
      decs,
    };
    if (file) {
      const data =new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      newPost.photo = filename;
      try {
        await userRequest.post("/upload", data);
      } catch (err) {}
    }
    try {
      const res = await userRequest.post("/posts", newPost);
      window.location.replace("/post/" + res.data._id);
    } catch (err) {}
  };
  return (
    <div className="write">
    <Topbar/>
      {file ? (
        <img className="writeImg" src={URL.createObjectURL(file)} alt="" />
      ): <img className="writeImg" src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="img"/>}
      <form className="writeForm" onSubmit={handleSubmit}>
        <div className="writeFormGroup">
          <label htmlFor="fileInput">
            <i className="writeIcon fas fa-plus"></i>
          </label>
          <input
            type="file"
            id="fileInput"
            style={{ display: "none" }}
            onChange={(e) => setFile(e.target.files[0])}
          />
          <input
            type="text"
            placeholder="Title"
            className="writeInput"
            autoFocus={true}
            onChange={e=>setTitle(e.target.value)}
          />
        </div>
        <div className="writeFormGroup">
          <textarea
            placeholder="Tell your story..."
            type="text"
            className="writeInput writeText"
            onChange={e=>setDesc(e.target.value)}
          ></textarea>
        </div>


        
        <button className="writeSubmit" type="submit">
          Publish
        </button>
      </form>
    </div>
  );
}
