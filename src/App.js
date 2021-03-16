import React, {Component} from 'react'
import { BrowserRouter,Route } from "react-router-dom"
import Home from "./components/Home/Home"
import  Orders from "./components/Orders/Orders"
import Stock from "./components/Stock/Stock"
import Report from "./components/Report/Report"
import Header from "./components/common/header/Header.js"
import AddProduct from "./components/addproduct/AddProduct"
import FarmerProduct from "./components/farmersproduct/FarmerProduct"


class App extends Component {
  render(){
    return (
      <BrowserRouter>
      <Header />
           <div className="App">
        <Route exact path='/' component={Home} />
        <Route path='/orders' component={Orders} />
        <Route path="/products" component={FarmerProduct} />
        <Route path="/stock" component={Stock} />
        <Route path="/report" component={Report} />
        <Route path="/addproduct" component={AddProduct} />
      </div>

      </BrowserRouter>
    );



  }
  
}

export default App;
