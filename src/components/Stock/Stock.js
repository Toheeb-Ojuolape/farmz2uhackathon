import React from "react"
import { NavLink } from "react-router-dom"
import logout from "./../../images/log-out.svg"




const Stock = () => {
    return(
        <div className="Home">
        <div className="pushUp">
          <nav className="laptop nav-wrapper orange lighten-1">
        <div className="container">
         <ul className="center">
            <li> <NavLink to="/"><span>Home</span></NavLink></li>
            <li> <NavLink to="/orders"> Order <span className="number">(12)</span></NavLink></li>
            <li> <NavLink to="/products"><span> Products <span className="number">(52)</span></span></NavLink></li>
            <li> <NavLink to="/stock" ><span className="activeMenu">Stock</span></NavLink></li>
            <li> <NavLink to="/report"> Report</NavLink></li>
            <li className="logOut"> <NavLink to="/logout">Logout <span className="logouticon"><img src={logout} alt="logout" /></span></NavLink></li>
         </ul>


        </div>


        </nav>
        </div>
        </div>
    )
}

export default Stock