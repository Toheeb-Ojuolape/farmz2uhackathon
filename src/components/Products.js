import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import logout from "../log-out.svg";
import TableProduct from "./TableProduct"

class Products extends Component {
  state = {
    toptableProduct: [
      {
        product: "Product",
        picture: "Picture",
        stock: "Number in stock",
        details: "Details",
        price: "Price per unit(N)",
        status: "Status",
        id: 1,
      },
    ],
    tableProduct: [
      {
        product: "Apple",
        picture: "Picture",
        stock: "200",
        details: "Lorem Ipsum dolor sit amet, cetur adip",
        price: "4000",
        status: "Out of Stock",
        id: 1,
      },
      {
        product: "Potatoe",
        picture: "Picture",
        stock: "354",
        details: "Lorem Ipsum dolor sit amet, cetur adip",
        price: "2500",
        status: "In Stock",
        id: 1,
      },
      {
        product: "Yam",
        picture: "Picture",
        stock: "211",
        details: "Lorem Ipsum dolor sit amet, cetur adip",
        price: "500",
        status: "In Stock",
        id: 1,
      },
      {
        product: "Apple",
        picture: "Picture",
        stock: "311",
        details: "Lorem Ipsum dolor sit amet, cetur adip",
        price: "1000",
        status: "In Stock",
        id: 1,
      },
    ],
  };
  render() {
    return (
      <div className="Order">
        <div className="pushUp">
          <nav className="nav-wrapper orange lighten-1">
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
        </div>
        <div className="dashboard">
          <p className="summary">Products</p>
          <div className="row">
            <div className="column12">
              <div className="all">All Products</div>
            </div>
            <div className="column12">
              <div className="pending">In Stock</div>
            </div>
            <div className="column12">
              <div className="completed">Out of Stock</div>
            </div>
          </div>
           <TableProduct tableProduct={this.state.tableProduct} toptableProduct={this.state.toptableProduct} /> 
        </div>
        <div className="dashboard row">
            <div className="column14">
              <p className="showing">Showing 1-4 of 4</p>
            </div>
            <div className="column15">
            </div>
          </div>
      </div>
    );
  }
}

export default Products;
