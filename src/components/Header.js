import {LOGO_URL} from "../utils/constants";
import {useState} from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [btnNameReact,setBtnNameReact]=useState("Login");
  const onlineStatus=useOnlineStatus();
  return (
    <div className="flex justify-between bg-orange-200 shadow-lg ">
      <div className="logocontainer">
        <img
          className="w-20"
          src={LOGO_URL}
        />
      </div>
      <div className="flex items-center">
        <ul className="flex  m-4 p-4" >
          <li className="px-4">Online Status:{onlineStatus?"🟢":"🔴"}</li>
          <li className="px-4"><Link to="/">Home</Link></li>
          <li className="px-4"><Link to="/about">About</Link></li>
          <li className="px-4"><Link to="/contact">Contact Us</Link></li>
          <li className="px-4"><Link to="/cart">Cart</Link></li>
          <button className="px-4  bg-blue-500 rounded-md" onClick={()=>{
            btnNameReact==="Login"
            ?setBtnNameReact("Logout"):setBtnNameReact("Login");
          }}>{btnNameReact}</button>
        </ul> 
      </div>
    </div>
  );
};

export default Header;