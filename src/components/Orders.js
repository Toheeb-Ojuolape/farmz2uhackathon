import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import logout from "../log-out.svg";
import Table from "./Table";
import BasicPagination from "./Pagination";




class Order extends Component {
  state = {
    toptableRow: [
      {
        order: "Order No.",
        product: "Product(s)",
        name: "Name",
        delivery: "Delivery Address",
        phone: "Phone Number",
        zone: "Zone",
        invoice: "Invoice Amount (N)",
        status: "Status",
        id: 1,
      },
    ],
    tableRow: [
      {
        order: "213AB",
        product: "Potatoe, Yam, Apple, Rice",
        name: "Tunde Okoro",
        delivery: "Lorem Ipsum dolor sit amet, cetur adip",
        phone: "08023718302",
        zone: "Lekki",
        invoice: "10,000",
        status: "• Pending",
        id: 1,
      },
      {
        order: "213AB",
        product: "Potatoe, Yam, Apple, Rice",
        name: "Tunde Okoro",
        delivery: "Lorem Ipsum dolor sit amet, cetur adip",
        phone: "08023718302",
        zone: "Lekki",
        invoice: "10,000",
        status: "• Completed",
        id: 1,
      },
      {
        order: "213AB",
        product: "Potatoe, Yam, Apple, Rice",
        name: "Tunde Okoro",
        delivery: "Lorem Ipsum dolor sit amet, cetur adip",
        phone: "08023718302",
        zone: "Lekki",
        invoice: "10,000",
        status: "• Pending",
        id: 1,
      },
      {
        order: "213AB",
        product: "Potatoe, Yam, Apple, Rice",
        name: "Tunde Okoro",
        delivery: "Lorem Ipsum dolor sit amet, cetur adip",
        phone: "08023718302",
        zone: "Lekki",
        invoice: "10,000",
        status: "• Completed",
        id: 1,
      },
      {
        order: "213AB",
        product: "Potatoe, Yam, Apple, Rice",
        name: "Tunde Okoro",
        delivery: "Lorem Ipsum dolor sit amet, cetur adip",
        phone: "08023718302",
        zone: "Lekki",
        invoice: "10,000",
        status: "• Pending",
        id: 1,
      },
      {
        order: "213AB",
        product: "Potatoe, Yam, Apple, Rice",
        name: "Tunde Okoro",
        delivery: "Lorem Ipsum dolor sit amet, cetur adip",
        phone: "08023718302",
        zone: "Lekki",
        invoice: "10,000",
        status: "• Completed",
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
                    <span className="activeMenu">
                      Orders<span className="number">(12)</span>
                    </span>
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
          <p className="summary">Orders</p>
          <span className="subtitle">12 orders found</span>
          <div className="row">
            <div className="column12">
              <div className="all">All Orders</div>
            </div>
            <div className="column12">
              <div className="pending">Pending Orders</div>
            </div>
            <div className="column12">
              <div className="completed">Completed</div>
            </div>
          </div>
          <Table
            tableRow={this.state.tableRow}
            toptableRow={this.state.toptableRow}
          />
          <div className="row">
            <div className="column14">
              <p className="showing">Showing 1-6 of 500</p>
            </div>
            <div className="column15">
            <BasicPagination />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Order;
