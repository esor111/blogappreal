import "./settings.css";
import {  useState } from "react";
import { useSelector } from "react-redux";
import { userRequest } from "../../requestMethod";
import Topbar from "../../components/topbar/Topbar";
export default function Settings() {
  const [file, setFile] = useState(null);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState(false);
const userr = useSelector(state=> state.user?.currentUser)
  const PF = "http://localhost:5000/images/"

  const handleSubmit = async (e) => {
    e.preventDefault();
    const updatedUser = {
      userId:userr._id,
      username,
      email,
      password,
    };

    
    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      updatedUser.profilePic = filename;
      try {
        await userRequest.post("/upload", data);
      } catch (err) {}
    }
    try {
      const res = await userRequest.put("/user/" + userr._id, updatedUser);
      
      setSuccess(true);
    } catch (err) {
    }   
  };

  return (
    <div className="settings">
    <Topbar/>

      <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="settingsUpdateTitle">Update Your Account</span>
          <span className="settingsDeleteTitle">Delete Account</span>
        </div>
        <form className="settingsForm" onSubmit={handleSubmit}>
          <label>Profile Picture</label>
          <div className="settingsPP">
            <img
              src={file ? URL.createObjectURL(file) : PF+ userr?.profilePic}
              alt=""
            />

            <label htmlFor="fileInput">
              <i className="settingsPPIcon far fa-user-circle"></i>
            </label>
            <input
              type="file"
              id="fileInput"
              style={{ display: "none" }}
              onChange={(e) => setFile(e.target.files[0])}
            />
          </div>
          <label>Username</label>
          <input
          className="settingsPPInput"
            type="text"
            placeholder={userr?.username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <label>Email</label>
          <input
            type="email"
            placeholder={userr?.email}
            onChange={(e) => setEmail(e.target.value)}
            className="settingsPPInput"

          />
          
          <button className="settingsSubmitButton" type="submit">
            Update
          </button>
          {success && (
            <span
              style={{ color: "green", textAlign: "center", marginTop: "20px" }}
            >
              Profile has been updated...
            </span>
          )}
        </form>
      </div>
    </div>
  );
}