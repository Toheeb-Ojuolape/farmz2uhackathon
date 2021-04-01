import MobileNav from '../nav/MobileNav';
import './header.css';
import './mobileheader.css';
import './filter.css';
import './../fonts.css';
import farmz2u_logo from '../../../images/farmz2u-logo.svg';
import settings from '../../../images/settings.svg';
import notification from '../../../images/notification.svg';
import profile_icon from '../../../images/logo.png';
import search from '../../../images/search.svg';
import background_image from './../../../images/top-bg.png';




function Header() {

	const style = {
				      "background": `url(${background_image})`
				    };
    

  return (

		    <div className="header-bottom">
		    	<header className="laptop" data-test="header-component" style={style}>

					<div className="header-flex" data-test="header-flex">
					  	<div className="farmz2u-logo" data-test="farmz2u-logo-container">
                            <a href="/">
					  		<img src={farmz2u_logo} alt="logo" data-test="farmz2u-logo"/>
							  </a>
					  	</div>

					  	<div className="search-bar" data-test="search-bar">

					  		<input type="text" 
					  			   placeholder="Enter Search" 
					  			   data-test="search-field"

					  			/>  
					  		<img src={search}  alt="" data-test="search-icon"/>
							  
					  	</div>

					  <div className="settings-icon" data-test="settings-icon-container">
					  		<img src={settings} alt="" data-test="settings-icon"/>
					  </div>

					  <div className="bell-icon" data-test="bell-icon-container">
					  	<img src={notification} alt="" data-test="bell-icon"/>
					  </div>

					  <div className="profile-icon" data-test="profile-icon-container">
					  	<img src={profile_icon} alt="" data-test="profile-icon" />
					  </div>
					</div>
				</header>
				<div className="phoneVisible">
				<MobileNav />
				</div>
		    </div>
    
  );
}

export default Header;
