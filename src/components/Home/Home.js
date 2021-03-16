import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import logout from "./../../images/log-out.svg";
import SelectForm from "./SelectForm";
import Cards from "./Cards";
import cocoa from "./../../images/cocoa-reduced.png";
import trophy from "./../../images/trophy.svg";
import potatoes from "./../../images/fresh-potatoes-reduced.png";
import yam from "./../../images/yam-reduced.png";
import apple from "./../../images/fresh-ripe-apples-reduced@2x.png";
import Topselling from "./Topselling";
import CardMobile from './CardMobile'
import './homeMobile.css';
import "./Home.css"

class Home extends Component {
  state = {
    topsells: [
      {
        image: { cocoa },
        name: "Cocoa seeds",
        sales: "200",
        stock: "out of stock",
        medal: { trophy },
        id: 1,
      },
      {
        image: { potatoes },
        name: "Potatoes",
        sales: "124",
        stock: "in stock",
        medal: { trophy },
        id: 2,
      },
      {
        image: { yam },
        name: "Yam",
        sales: "130",
        stock: "in stock",
        medal: { trophy },
        id: 3,
      },
      {
        image: { apple },
        name: "Apple",
        sales: "95",
        stock: "in stock",
        medal: { trophy },
        id: 4,
      },
    ],
  };
  render() {
    return (
      <div>
      <div className="Home laptop ">
        <div className="pushUp laptop">
        
          {/* Navigation */}
          <nav className="nav-wrapper orange lighten-1">
            <div className="container">
              <ul className="center">
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
                  <NavLink to="/stock"> Stock</NavLink>
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
              </ul>
            </div>
          </nav>
        </div>
        {/* End of Navigation */}
        <div className="dashboard laptop row">
          <div className="summaryTitle">
            <p className="summary">Summary</p>
            <span className="subtitle">Last 10 days</span>
          </div>
          <div className="column6">
            <SelectForm />
          </div>
        </div>
        <div>
          <Cards />
        </div>
        <div>
          <div className="dashboard row">
            <div className="column9">
              <p className="summary">Sales Report</p>
              <span className="subtitle">Last 10 days</span>
              <div className="card grey lighten-3">Content coming from Api</div>
            </div>
            <div className="topsellingSection">
              <p className="topselling">Top selling products</p>
              <Topselling topsells={this.state.topsells} />
            </div>
          </div>
        </div>
      </div>
       <div className="Home phone">
       <div className="dashboardMobile row">
          <div className="summaryTitle">
            <p className="summary">Summary</p>
            <span className="subtitle">Last 10 days</span>
          </div>
          <div>
            <div className="carousel">
             <CardMobile />
             
             <p className="salesReport">Sales Report</p>
              <span className="salesDays">Last 10 days</span>
              <div className="card grey lighten-3">Content coming from Api</div>
            </div>
            <p className="topselling">Top selling products</p>
              <Topselling topsells={this.state.topsells} />
          </div>
        </div>
      </div>
      </div>
    );
  }
}

export default Home;
