import React, {useEffect, useState } from "react";
import SelectForm from "./SelectForm";
import Cards from "./Cards";
import cocoa from "./../../images/cocoa-reduced.png";
import trophy from "./../../images/trophy.svg";
import silver from "./../../images/trophy (1).svg"
import medal from "./../../images/medal.svg"
import bronze from "./../../images/bronze.svg"
import potatoes from "./../../images/fresh-potatoes-reduced.png";
import yam from "./../../images/yam-reduced.png";
import apple from "./../../images/fresh-ripe-apples-reduced.png";
import Topselling from "./Topselling";
import CardMobile from './CardMobile'
import Navbar from './Navbar'
import './homeMobile.css';
import "./Home.css"

const Home = () => {
 const [topsells] = useState([
      {
        image: cocoa,
        name: "Cocoa seeds",
        sales: "200",
        stock: "out of stock",
        medal: trophy ,
        id: 1,
      },
      {
        image: potatoes,
        name: "Potatoes",
        sales: "124",
        stock: "in stock",
        medal: silver,
        id: 2,
      },
      {
        image: yam,
        name: "Yam",
        sales: "130",
        stock: "in stock",
        medal: bronze,
        id: 3,
      },
      {
        image: apple,
        name: "Apple",
        sales: "95",
        stock: "in stock",
        medal: medal,
        id: 4,
      },
    ])
    const [isPending,setIsPending] = useState(true)

    useEffect(() =>{
      fetch('https://api.farmz2u.co/v1/products/?format=json')
      .then(res => {
        return res.json()
      })
      .then(data =>{
          console.log(data)
          setIsPending(false)
      })
      .catch(err =>{
           console.log(err.message)
      })
    },[]);

    return (
      <div>
      <div className="Home laptop ">
        <div className="pushUplaptop">
          <Navbar />
        </div>
        <div className="dashboard laptop row">
          <div className="summaryTitle">
            <p className="summary">Summary</p>
            <span className="subtitle">Last 10 days</span>
          </div>
          <div className="selectForm">
            <SelectForm />
          </div>
        </div>
        <div class="laptop">
          <Cards />
        </div>
         <div className="dashboard laptop row">
         <div className="summarySection">
            <p className="summary">Sales Report</p>
            <span className="subtitle">Last 10 days</span>
            <p className="graph">Graph will show here</p>
          </div>
          <div className="columnTopselling">
          <p className="topselling">Top selling products</p>
          {topsells && <Topselling topsells={topsells} />}
          </div>
        </div>
     </div>
       <div className="Home phone">
       <div className="dashboardMobile">
          <div className="summaryTitle">
            <p className="salesReport">Summary</p>
            <span className="salesDays">Last 10 days</span>
          <div>
            <div className="carousel">
             <CardMobile />
             <p className="salesReport">Sales Report</p>
              <span className="salesDays">Last 10 days</span>
              <div className="card grey lighten-3">Content coming from Api</div>
            </div>
            {isPending && <p>Loading...</p>}
            <p className="topselling phone">Top selling products</p>
              {topsells && <Topselling topsells={topsells} />}
          </div>
          </div>
        </div> 
      </div>
      </div>
    );
  }

export default Home;
