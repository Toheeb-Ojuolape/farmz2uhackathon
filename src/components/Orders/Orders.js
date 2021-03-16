import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import logout from "./../../images/log-out.svg";
import Table from "./Table";
import Fab from '@material-ui/core/Fab';
import './OrderMobile.css'
import OrderCards from './OrderCards'



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
        id: 2,
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
        id: 3,
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
        id: 4,
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
        id: 5,
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
        id: 6,
      },
      {
        order: "213AB",
        product: "Potatoe, Yam, Apple, Rice",
        name: "Tunde Okoro",
        delivery: "Lorem Ipsum dolor sit amet, cetur adip",
        phone: "08023718302",
        zone: "Lekki",
        invoice: "10,000",
        status: "Completed",
        id: 7,
      },
    ],
  };
  render() {
    return (
      <div className="Order">
        <div className="pushUp">
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
        <div className="laptop dashboard">
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
            <div className="pagination-control"> 
          <div className="pagination">
          <div className="arrowprev">
          <Fab size="small" disabled>
  <a href="#1">	&lt;</a>
  </Fab>
  </div>
  <div className="number">
  <a href="1"><b>1</b></a>
  </div>
  <div className="arrownext">
  <Fab size="small" disabled>
  <a href="#3">&gt;</a>
  </Fab>
  </div>
</div>
					</div>
            </div>
          </div>
        </div>
        <div className="OrderMobile">
        <p className="ordermobile">Orders</p>
        <p className="ordernumber"> 12 orders found</p>
        <div className="row">
            <div className="columnorder">
              <div className="allorders">All Orders</div>
            </div>
            <div className="columnpending">
              <div className="pending">Pending Orders</div>
            </div>
            <div className="columncomplete">
              <div className="completed">Completed</div>
            </div>
          </div>
          <OrderCards tableRow={this.state.tableRow} />
        </div>
        </div>
    );
  }
}

export default Order;
