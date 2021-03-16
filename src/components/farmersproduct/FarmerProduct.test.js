import React from 'react';
import {shallow} from 'enzyme';

import FarmerProduct from './FarmerProduct';



const setup = () => shallow( <FarmerProduct />);

const findByTestAttribute = (wrapper,attribute) => wrapper.find(attribute);

function testTagContent(attribute,element_tag,content){ 

	let wrapper
	let element;

	beforeEach(() => {

		wrapper = setup();
		element = findByTestAttribute(wrapper,attribute);

	});

	

	test('renders without crashing', () => {

		expect(element).toHaveLength(1);

	});

	test('renders correct tag', () => {

		expect(element.type() ).toEqual(element_tag);

	});

	test('renders content', () => {

		expect(element.text() ).toEqual(content);

	});

}





describe('Product Order Counter', () => {


	test('renders without crashing', () => {

		const wrapper = setup();
		// console.log(wrapper.debug());
		const farmerProductComponent = findByTestAttribute(
															wrapper,
															"[data-test='product-counter']"
														);
		
		expect(farmerProductComponent).toHaveLength(1);
  
	});

	testTagContent("[data-test='product-counter-title']","h3","Products");

	testTagContent("[data-test='product-counter-display']","small","12 orders found");



});


describe('Product Tab', () => {


	test('renders without crashing', () => {

		const wrapper = setup();
		// console.log(wrapper.debug());
		const tab = findByTestAttribute(
															wrapper,
															"[data-test='tab']"
														);
		
		expect(tab).toHaveLength(1);
  
	});

	testTagContent("[data-test='tab-1']","h3", " All Products");
	
	testTagContent("[data-test='tab-2']","h3"," In Stock ");

	testTagContent("[data-test='tab-3']","h3"," Out Of Stock ");




});


test('farmer product table renders without crashing', () => {

		const wrapper = setup();
		// console.log(wrapper.debug());
		const farmerProductComponent = findByTestAttribute(
															wrapper,
															"[data-test='farmers-products']"
														);
		
		expect(farmerProductComponent).toHaveLength(1);
  
	});

