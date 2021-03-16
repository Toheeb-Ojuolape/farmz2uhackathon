import './nav.css';

import log_out_icon from '../../../images/log-out.svg';



function Nav(){

	return(

				<div>

						<nav data-test='nav-component'>

							<h3 data-test='home-menu'> Home </h3>
							<h3 data-test='order-menu'> Order <small>(12)</small> </h3>
							<h3 class="active" data-test='product-menu'> Products <small>(52)</small> </h3>
							<h3 data-test='stock-menu'> Stock</h3>
							<h3 data-test='report-menu'> Report</h3>

							<h3 class="logout" data-test='log-out'> 
								Log out 
								<span class="logout-icon">
									<img src={log_out_icon} alt="" data-test='log-out-icon'/>
								</span>
							</h3>
							
						</nav>

				</div>


		)

}

export default Nav;