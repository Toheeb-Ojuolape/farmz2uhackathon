import React, { Component } from "react";
import Navbar from './Navbar'
import Table from "./Table";
import './OrderMobile.css'
import OrderCards from './OrderCards'
import './Order.css'
import prevarrow from './../../images/previous arrow.svg'
import nextarrow from  './../../images/next-arrow.svg'



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
        <div className="pushUp laptop">
          <Navbar />
        </div>
        <div className="laptop dashboard">
          <p className="orders">Orders</p>
          <span className="orderSubtitle">12 orders found</span>
          <ul className="ordersButton">
           <li className="all">All Orders</li>
           <li className="orderType">Pending Orders</li>
           <li className="orderType">Completed</li>
          </ul>
          <Table
            tableRow={this.state.tableRow}
            toptableRow={this.state.toptableRow}
          />
          <div className="row">
            <div className="columnPagination">
              <p className="paginationText">Showing 1-6 of 500</p>
            </div>
            <div className="columnPaginationControl">
            <div className="pagination-control"> 
          <div className="pagination">
          <div className="arrowprev">
          <img src={prevarrow} alt="" />
  </div>
  <div className="number">
  <a href="1"><b>1</b></a>
  </div>
  <div className="arrownext">
  <img src={nextarrow} alt="" />
  </div>
</div>
					</div>
            </div>
          </div>
        </div>
        <div className="phone OrderMobile">
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
