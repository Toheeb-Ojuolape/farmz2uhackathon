import React from 'react';
import './Home.css'

export default function SimpleCard() {

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
        <p className="amount">₦ 1,731,782</p>
        <span className="added">+45,892 in the last 7 days</span>
    </div>
    </div>
    <div className="columnCard">
    <div className="cardsales">
    <p className="sale">Orders</p>
        <p className="amount">₦ 1,731,782</p>
        <span className="added">+45,892 in the last 7 days</span>
    </div>
    </div>
    <div className="columnLast">
    <div className="cardlast">
    <p className="profit">Today's Income</p>
        <p className="amountIncome">₦ 250,000</p>
    </div>
    </div>
    </div>
  );
}
