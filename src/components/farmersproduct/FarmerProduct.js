import {Link} from 'react-router-dom';
import React, { Component } from "react";
import ProductTable from './ProductTable';
import ProductTableMobile from './ProductTableMobile';
import Navbar from "./Navbar"
import './farmerproduct.css';
import './farmerproductmobile.css';
import prevarrow from './../../images/previous arrow.svg'
import nextarrow from './../../images/next-arrow.svg'

import addproduct_icon from './../../images/add-product.svg';


 class FarmerProduct extends Component {
	state = {
    toptableProduct: [
      {
        product: "Product",
        picture: "Picture",
        stock: "Number in stock",
        details: "Details",
        price: "Price per unit(N)",
        status: "Status",
        id: 1,
      },
    ],
    tableProduct: [
      {
        product: "Apple",
        picture: "Picture",
        stock: "200",
        details: "Lorem Ipsum dolor sit amet, cetur adip",
        price: "4000",
        status: "Out of Stock",
        id: 2,
      },
      {
        product: "Potatoe",
        picture: "Picture",
        stock: "354",
        details: "Lorem Ipsum dolor sit amet, cetur adip",
        price: "2500",
        status: "In Stock",
        id: 3,
      },
      {
        product: "Yam",
        picture: "Picture",
        stock: "211",
        details: "Lorem Ipsum dolor sit amet, cetur adip",
        price: "500",
        status: "In Stock",
        id: 4,
      },
      {
        product: "Apple",
        picture: "Picture",
        stock: "311",
        details: "Lorem Ipsum dolor sit amet, cetur adip",
        price: "1000",
        status: "In Stock",
        id: 5,
      },
    ],
  };
  render(){
  return (


  		<div className="Order">
		  <div className="pushUp">
          <Navbar />
        </div>
  			
	   		<div className="product-counter" data-test='product-counter'>

				<h3 data-test='product-counter-title' className="product-counter-title">Products</h3>

			</div>

			<div className="tab" data-test='tab'>

				<h3 className="active" data-test='tab-1'> All Products</h3>
				<h3 data-test='tab-2'> In Stock </h3>
				<h3 data-test='tab-3'> Out Of Stock </h3>
				
				<Link to="/addproduct">

					<button className="add-product-btn" >
						<span className="add-icon">
							<img src={addproduct_icon} alt="" />
						</span>
						Add Product 
					</button>

				</Link>
			
			</div>


			<div className="laptop farmers-products" data-test='farmers-products'>

			   <ProductTable tableProduct={this.state.tableProduct} toptableProduct={this.state.toptableProduct} /> 
				<ProductTableMobile />


				<div className="farmer-product-pagination">
					<h4 className="pagination-info">Showing 1-4 of 4</h4>

					<div className="pagination-control"> 
          <div className="pagination">
          <div className="arrowprev">
          <img src={prevarrow} alt="" />
  </div>
  <div className="number">
  <a href="1"><b>1</b></a>
  </div>
  <div className="arrownext">
  <img src={nextarrow} alt="" />
  </div>
</div>
					</div>
				</div>




			</div>

      <div className="phone farmers-products" data-test='farmers-products'>

				<ProductTableMobile />


				<div className="farmer-product-pagination">
					<h4 className="pagination-info">Showing 1-4 of 4</h4>

					<div className="pagination-control"> 
          <div className="pagination">
          <div className="arrowprev">
          <img src={prevarrow} alt="" />
  </div>
  <div className="number">
  <a href="1"><b>1</b></a>
  </div>
  <div className="arrownext">
  <img src={nextarrow} alt="" />
  </div>
</div>
					</div>
				</div>




			</div>

    
	   	</div>

   
  );
  }
}

export default FarmerProduct;
