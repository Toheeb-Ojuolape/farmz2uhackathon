import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import menu from "../menu.svg"
// import Edit from "../edit-product.png"
// import Delete from "../delete.svg"
// import Add from "../addstock.svg"

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
      <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
        <img src={menu} alt="" />
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}> Edit Product</MenuItem>
        <MenuItem onClick={handleClose}> Delete Product</MenuItem>
        <MenuItem onClick={handleClose}> Add Product</MenuItem>
      </Menu>
    </div>
  );
}