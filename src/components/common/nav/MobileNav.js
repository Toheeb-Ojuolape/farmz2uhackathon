import React , {useState} from "react";

import './navmobile.css';

import farmz2u_logo from '../../../images/farmz2u-logo.svg';
import log_out_icon from '../../../images/log-out.svg';
import search from '../../../images/search.svg';
import hamburger from '../../../images/hamburger.svg'



function MobileNav(){

	const [navWidth, setNavWidth] = useState("0%");




	/* Open when someone clicks on the span element */
	function openNav() {
		
	    setNavWidth("100%");
	}

	/* Close when someone clicks on the "x" symbol inside the overlay */
	function closeNav() {
	  setNavWidth("0%");
	}

	return(

		<div className="phone menu">
         <div className="row">
		 <div className="columnmobileNav">
		 <a href="/">
		 <img src={farmz2u_logo} alt="" data-test="farmz2u-logo" />
		 </a>
		 </div>
		 <div className="column20">
		 <img className="search" alt="" src={search} data-test="search-icon" />
		 </div>

				<div className="menu-toggle column21" data-test='nav-component'>

					  		<div id="myNav" className="overlay" 
					  				style={{ width: navWidth }}>

					  		<div className="farmz2u-logo">
						  		<img src={farmz2u_logo} alt="" data-test="farmz2u-logo" />
						  	</div>

						  	<img className="search" alt="" src={search} data-test="search-icon" />

							 
							  <a href="/" 
							  	 className="closebtn"
							  	 data-test='close-menu'
							  	 onClick={closeNav}
							  	>
							  	 &times;
							  	</a>

							 
							  <div className="overlay-content">
							    <a href="/" className="active" data-test='home-menu' >
							    	Home
							    </a>

							    <a href="/orders" data-test='order-menu'>
							    	Order 
							    	<small>(12)</small>
							    </a>

							    <a href="/products" data-test='product-menu'>
							    	Products 
							    	<small>(52)</small>
							    </a>

							    <a href="/stock" data-test='stock-menu'>
							    	Stock
							    </a>

							    <a href="report" data-test='report-menu'>
							    	Report
							    </a>

							    <a href="/settings" data-test='settings-menu'>Settings</a>
							    <a href="/notifications" data-test='notification-menu'>Notifications</a>


								<h3 className="logout"> Log out 
									<span className="logout-icon">
										<img src={log_out_icon} alt="" />
									</span>
								</h3>
							  </div>

							</div>

							
							<span className="openMenu" onClick={openNav} data-test='open-menu'><img src={hamburger} alt="" /></span>
			    </div>

		</div>
</div>

		)
}


export default MobileNav;


