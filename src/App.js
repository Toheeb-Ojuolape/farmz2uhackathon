import React, {Component} from 'react'
import Header from "./Header"
import { BrowserRouter,Route } from "react-router-dom"
import Home from "./components/Home"
import  Orders from "./components/Orders"
import Products from "./components/Products"
import Stock from "./components/Stock"
import Report from "./components/Report"

class App extends Component {
  render(){
    return (
      <BrowserRouter>
           <div className="App">
        <Header />
        <Route exact path='/' component={Home} />
        <Route path='/orders' component={Orders} />
        <Route path="/products" component={Products} />
        <Route path="/stock" component={Stock} />
        <Route path="/report" component={Report} />
      </div>

      </BrowserRouter>
    );



  }
  
}

export default App;
