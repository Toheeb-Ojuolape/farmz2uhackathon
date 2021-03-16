import React from "react"


function CardMobile() {
        return(
            <div>
              <div className="scrollmenu">
              <a  href="#profit">
              <div className="cardprofitMobile">
    <p className="profit">Profit</p>
        <p className="amountProfit">₦ 1,731,782</p>
        <span className="addedProfit">+45,892 in the last 7 days</span>
        </div>
    </a>

    <a href="#sales">
    <div className="cardsalesMobile">
    <p className="sale">Sales</p>
        <p className="amount">₦ 4,378,900</p>
        <span className="added">+200,000 in the last 7 days</span>
        </div>
    </a>

    <a href="#sales">
    <div className="cardsalesMobile">
    <p className="sale">Expenses</p>
        <p className="amount">₦ 1,731,782</p>
        <span className="added">+45,892 in the last 7 days</span>
        </div>
    </a>
    
    <a href="#sales">
    <div className="cardsalesMobile">
    <p className="sale">Orders</p>
        <p className="amount">₦ 1,731,782</p>
        <span className="added">+45,892 in the last 7 days</span>
        </div>
    </a>
              </div>
              <div className="cardlastMobile">
    <p className="profit">Today's Income</p>
        <p className="amountIncome">₦ 250,000</p>
    </div>
            </div>
        )
} 

export default CardMobile