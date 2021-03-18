import React from 'react';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import menu from "./../../images/menu.svg"
import Edit from "./../../images/editproduct.svg"
import Delete from "./../../images/delete.svg"
import Add from "./../../images/addstock.svg"

export default function SimpleMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <p className="laptop" onClick={handleClick}>
        <img src={menu} alt="" />
      </p>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}> <img src={Edit} alt=""/> Edit Product</MenuItem>
        <MenuItem onClick={handleClose}> <img src={Delete} alt=""/> Delete Product</MenuItem>
        <MenuItem onClick={handleClose}> <img src={Add} alt=""/> Add Product</MenuItem>
      </Menu>
    </div>
  );
}