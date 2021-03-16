import { NavLink } from "react-router-dom";
import logout from "./../../images/log-out.svg";


export default function Navbar (){

return(
<nav className="laptop nav-wrapper orange lighten-1">
            <div className="container">
              <ul className="center">
                <li>
                  {" "}
                  <NavLink to="/">
                    <span>Home</span>
                  </NavLink>
                </li>
                <li>
                  {" "}
                  <NavLink to="/orders">
                    {" "}
                    <span>
                      Orders<span className="number">(12)</span>
                    </span>
                  </NavLink>
                </li>
                <li>
                  {" "}
                  <NavLink to="/products">
                    <span className="activeMenu">
                      {" "}
                      Products <span className="number">(52)</span>
                    </span>
                  </NavLink>
                </li>
                <li>
                  {" "}
                  <NavLink to="/stock"> Stock</NavLink>
                </li>
                <li>
                  {" "}
                  <NavLink to="/report"> Report</NavLink>
                </li>
                <li className="logOut">
                  {" "}
                  <NavLink to="/logout">
                    Logout{" "}
                    <span className="logouticon">
                      <img src={logout} alt="logout" />
                    </span>
                  </NavLink>
                </li>
              </ul>
            </div>
          </nav>
)
}
