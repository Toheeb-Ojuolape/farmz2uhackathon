import React, { Component } from 'react';
import './Home.css'
import cocoa from "./../../images/cocoa-reduced.png";
import trophy from "./../../images/trophy.svg";
import potatoes from "./../../images/fresh-potatoes-reduced.png";
import yam from "./../../images/yam-reduced.png";
import apple from "./../../images/fresh-ripe-apples-reduced@2x.png";

class Cards extends Component {
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

      render(){

  return (
      <div className="cards row">
      <div className="columnCard">
      <div className="cardprofit">
    <p className="profit">Profit</p>
        <p className="amountProfit">₦ 1,731,782</p>
        <span className="addedProfit">+45,892 in the last 7 days</span>
    </div>
    </div>
    <div className="columnCard">
    <div className="cardsales">
    <p className="sale">Sales</p>
        <p className="amount">₦ 4,378,900</p>
        <span className="added">+200,000 in the last 7 days</span>
    </div>
    </div>
    <div className="columnCard">
    <div className="cardsales">
    <p className="sale">Expenses</p>
        <p className="amount">₦ 2,457,200</p>
        <span className="added">+200,000 in the last 7 days</span>
    </div>
    </div>
    <div className="columnCard">
    <div className="cardsales">
    <p className="sale">Orders</p>
        <p className="amount">200</p>
        <span className="added">+13 last 7 days</span>
    </div>
    </div>
    <div className="columnLast">
    <div className="cardlast">
    <p className="profit">Today's Income</p>
        <p className="amountIncome">₦250,000</p>
    </div>
    </div>
    </div>
  );
}
}


export default Cards