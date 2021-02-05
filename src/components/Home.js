import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import logout from "../log-out.svg";
import SelectForm from "./SelectForm";
import Cards from "./Cards";
import cocoa from "../cocoa-reduced.png";
import trophy from "../trophy.svg";
import potatoes from "../fresh-potatoes-reduced.png";
import yam from "../yam-reduced.png";
import apple from "../fresh-ripe-apples-reduced@2x.png";
import Topselling from "../components/Topselling";

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
          <div className="column5">
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
            <div className="column10">
              <p className="topselling">Top selling products</p>
              <Topselling topsells={this.state.topsells} />
            </div>
          </div>
        </div>
      </div>
       <div className="Home phone">
       <div className="dashboardmobile row">
          <div className="column5">
            <p className="summary">Summary</p>
            <span className="subtitle">Last 10 days</span>
          </div>
          <div>
            <div className="carousel">
            <a className="cardprofit carousel-item" href="#one!">
    <p className="profit">Profit</p>
        <p className="amountProfit">₦ 1,731,782</p>
        <span className="addedProfit">+45,892 in the last 7 days</span>
    </a>
    <a className="cardprofit carousel-item" href="#two!">
    <p className="profit">Profit</p>
        <p className="amountProfit">₦ 1,731,782</p>
        <span className="addedProfit">+45,892 in the last 7 days</span>
    </a>
            </div>
          </div>
        </div>
      </div>
      </div>
    );
  }
}

export default Home;
