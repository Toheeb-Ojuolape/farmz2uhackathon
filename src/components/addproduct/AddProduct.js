import './addproduct.css';
import './addproductmobile.css';
import Navbar from "./Navbar"


function AddProduct() {

	function goBack(){
		window.history.back();
	}

  return (


  		<div className="Order">
		  <Navbar />
	   		<main>
				<div className="addproduct-form" data-test='addproduct-component'>

					<h3 className="form-name" data-test='form-name'>Add Products</h3>

					<label for="product-name" data-test='product-name-label'>
						Product Name
					</label>
					<input type="text" id="product-name" data-test='product-name'/>


					<label for="about-product" data-test='about-product-label'>
						About Product
					</label>
					<textarea id="about-product" data-test='about-product'>
						
					</textarea>  

					<label for="number-in-stock" data-test='number-in-stock-label'>
						Number In Stock
					</label>
					<input type="number" id="number-in-stock" data-test='number-in-stock'/>

					<label for="upload-image">
						Upload image

						<small>Click to add or edit photo</small>

					</label>

					<div className="image-input" data-test='image-input'>

						<div className="image-handle">
						</div>

						<div className="image-handle">
						</div>

						<div className="image-handle">
						</div>

					</div>

					<button type="submit" 
					 className="add-product-btn" 
					 data-test='add-product-btn'
					>
						Add Product
					</button>
					
				</div>

				<div className="back-btn">

					<h3 data-test='goback' onClick={goBack}> 
						<span className="back-arrow"></span>  
						&lt; Go back
					</h3>
					
				</div>
			</main>
			<div class="mobileback-btn" >

				<p data-test='goback-mobile' onClick={goBack}> <span class="back-arrow"></span>&lt; Go back</p>
				
			</div>
		   		
	   	</div>
    
  );
}

export default AddProduct;
