import React,{Component} from "react"
import Fab from '@material-ui/core/Fab'
import TextField from '@material-ui/core/TextField';
import farmz2u from "./farmz2u-logo.svg"
// import Search from "./search.svg"
import settings from "./settings.svg"
import notification from "./notification.svg"
import logo from "./logo.png"
// import Hamburger from "./hamburger.svg"


class Header extends Component{
    render(){
        return(
            <div>
            <div className="header laptop">  
            <div className='row'>
             <div className="column1">
                 <img src={farmz2u} width="70%" alt="logo" />
             </div>
             <div className="column2">
             <TextField
    id="filled-secondary"
    label="Filled secondary"
    variant="filled"
    color="secondary"
  />
             </div>
             <div className="column3">
             <Fab className="circle" color="secondary" >
              <img src={settings} alt="settings" style={{opacity:1}}/>
                 </Fab>
             </div>
             <div className="column3">
             <Fab className="circle" color="secondary">
              <img src={notification} alt="notification"/>
                 </Fab>
             </div>
             <div className="column4">
              <img src={logo} alt="logo"/>
             </div>
            
            </div>
             </div>
             <div className="phone">
             <div className='row'>
             <div className="phoneheader">
                 <img src={farmz2u} width="20%" alt="logo" />
                 {/* <Search /> */}
                 {/* <Hamburger /> */}
             </div>
             </div>
             </div>
             </div>

            
        )
    }
}


export default Header