import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import axios from "axios";


const Menu = () => {
  const [selectedMenu, setSelectedMenu] = useState(0);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] =  useState(false);
  const [username, setUsername] = useState("");
  
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const { data } = await axios.post("https://zerodha-clone-server.onrender.com/", {}, { withCredentials: true });
        if (data.status) {
          setUsername(data.username); // backend returns { status: true, user: username }
        }
      } catch (err) {
        console.error("User fetch failed:", err);
      }
    };
    fetchUser();
  }, []);

  const handleLogout = async () => {
    try {
      await axios.post("https://zerodha-clone-server.onrender.com/logout", {}, { withCredentials: true });
      window.location.href = "https://zerodha-clone-7k6t.onrender.com/";
    } catch (err) {
      console.error("Logout failed:", err);
    }
  };

  const handleMenuClick = (index) => {
    setSelectedMenu(index);
  };

  const handleProfileClick = (index) => {
    setIsProfileDropdownOpen(!isProfileDropdownOpen);
  };

  const menuClass = "menu";
  const activeMenuClass = "menu selected";
  const avatarText = username ? username.slice(0, 1).toUpperCase() : "ZU";

  return (
    <div className="menu-container">
      <img src="logo.png" style={{ width: "50px" }} />
      <div className="menus">
        <ul>
          <li>
            <Link style={{ textDecoration: "none" }} to="/" onClick={() => handleMenuClick(0)}>
              <p className={selectedMenu===0 ? activeMenuClass : menuClass}>Dashboard</p>
            </Link>
          </li>
          <li>
            <Link style={{ textDecoration: "none" }} to="/orders" onClick={() => handleMenuClick(1)}>
              <p className={selectedMenu===1 ? activeMenuClass : menuClass}>Orders</p>
            </Link>
          </li>
          <li>
            <Link style={{ textDecoration: "none" }} to="/holdings" onClick={() => handleMenuClick(2)}>
              <p className={selectedMenu===2 ? activeMenuClass : menuClass}>Holdings</p>
            </Link>
          </li>
          <li>
            <Link style={{ textDecoration: "none" }} to="/positions" onClick={() => handleMenuClick(3)}>
              <p className={selectedMenu===3 ? activeMenuClass : menuClass}>Positions</p>
            </Link>
          </li>
          <li>
            <Link style={{ textDecoration: "none" }} to="/funds" onClick={() => handleMenuClick(4)}>
              <p className={selectedMenu===4 ? activeMenuClass : menuClass}>Funds</p>
            </Link>
          </li>
          <li>
            <Link style={{ textDecoration: "none" }} to="/apps" onClick={() => handleMenuClick(5)}>
              <p className={selectedMenu===5 ? activeMenuClass : menuClass}>Apps</p>
            </Link>
          </li>
        </ul>
        <hr />
        <div className="profile" >
          <p className="username">{username || "User"}</p> &nbsp;&nbsp;&nbsp;&nbsp;
          <div className="avatar" onClick={handleProfileClick}>
            {avatarText}
          </div>
          {isProfileDropdownOpen && (
            <div className="profile-dropdown">
              <ul>
                 <li><button onClick={handleLogout}>Logout</button></li>
              </ul>
              
            </div>
          )}
        </div>
      </div>
    </div>
  );
};


export default Menu;

