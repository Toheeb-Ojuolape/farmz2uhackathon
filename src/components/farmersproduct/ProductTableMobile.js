
import React , {useState,useEffect} from "react";
import {Link} from 'react-router-dom';
import cocoa from './../../images/cocoa-reduced 2.png';
import addproduct_icon from './../../images/FAB.svg';



const productList = [
							{
								productName: "Apple",
								image : cocoa,
								productPrice: "200",
								productDetails: "Lorem ipsum dolor sit amet, cetur adip.",
								productQuantity: "400",
								id:1

							},

							{
								productName: "Yam",
								image : cocoa,
								productPrice: "2,000",
								productDetails: "Lorem ipsum dolor sit amet, cetur adip.",
								productQuantity: "400",
								id:2
							},

							{
								productName: "Apple",
								image : cocoa,
								productPrice: "2,000",
								productDetails: "Lorem ipsum dolor sit amet, cetur adip.",
								productQuantity: "400",
								id:3
							}

					];


function ProductTableMobile(){


	const [products, setProducts] = useState([]);
 
    

    useEffect(() =>{
        setProducts(productList);

    },[]);



	return(


		<div>

			<div className="add-product-icon">
				<Link to="/addproduct">

					<img src={addproduct_icon} alt="" />

				</Link>

			</div>

			 {products.map(product => (

				<div className="farmers-products-info-mobile" key={product.id}>

					

					
					<img src={product.image} alt="" />

					<div className="product-details">

						<h3 className="product-name"> {product.productName} </h3>

						<h3 className="product-price"> N {product.productPrice}
							<span className="vertical-rule"> | </span> 
							{product.productQuantity}
						</h3>
						
						<h3 className="product-description"> {product.productDetails} </h3>
						
						<h3 className="instock"> Out Of Stock </h3>

					</div>

					<div className="product-options">5</div>

				</div>
			))}

		</div>




		);
}




export default ProductTableMobile;