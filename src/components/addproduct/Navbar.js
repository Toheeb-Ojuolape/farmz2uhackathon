import { NavLink } from "react-router-dom";
import logout from "./../../images/log-out.svg";


export default function Navbar (){

return(
<div>
              <ul className="center">
              <div className="container">
                <li>
                  {" "}
                  <NavLink to="/">
                    <span className="activeMenu">Home</span>
                  </NavLink>
                </li>
                <li>
                  {" "}
                  <NavLink to="/orders">
                    {" "}
                    Order <span className="number">(12)</span>
                  </NavLink>
                </li>
                <li>
                  {" "}
                  <NavLink to="/products">
                    <span>
                      {" "}
                      Products <span className="number">(52)</span>
                    </span>
                  </NavLink>
                </li>
                <li>
                  {" "}
                  <NavLink to="/report"> Report</NavLink>
                </li>
                <li className="logOut">
                  {" "}
                  <a href="/">
                    Logout{" "}
                    <span className="logouticon">
                      <img src={logout} alt="logout" />
                    </span>
                  </a>
                </li>
                </div>
              </ul>
          </div>
)
}
