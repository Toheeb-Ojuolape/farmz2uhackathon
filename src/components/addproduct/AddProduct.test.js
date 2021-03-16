import React from 'react';
import {shallow} from 'enzyme';

import AddProduct from './AddProduct';



const setup = () => shallow( <AddProduct />);

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


function testInputField(attribute,element_tag){ 

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

	// test('renders type', () => {

	// 	expect(element.prop().text() ).toEqual(type);

	// });

}


test('renders without crashing', () => {

	const wrapper = setup();
	// console.log(wrapper.debug());
	const addProductComponent = findByTestAttribute(
														wrapper,
														"[data-test='addproduct-component']"
													);
	
	expect(addProductComponent).toHaveLength(1);
  
});



describe('Form Title', () => {

	testTagContent("[data-test='form-name']","h3","Add Products");

});

describe('Go back text', () => {

	testTagContent("[data-test='goback']","h3","Go back");

});


describe('Go back text', () => {

	testTagContent("[data-test='goback-mobile']","h3","  Go back");

});



test('Image input renders without crashing', () => {

	const wrapper = setup();
	// console.log(wrapper.debug());
	const imageInput = findByTestAttribute(
														wrapper,
														"[data-test='image-input']"
													);
	
	expect(imageInput).toHaveLength(1);
  
});


describe('Add product button', () => {

	testTagContent("[data-test='add-product-btn']","button","Add Product");

});

describe('Product Name Input Field', () => {

	testInputField("[data-test='product-name']","input");

	testTagContent("[data-test='product-name-label']","label","Product Name");

	test('Field type', () => {

		const wrapper = setup();
		// console.log(wrapper.debug());
		const inputType = findByTestAttribute(wrapper,"[data-test='product-name']");
		
		
		expect(inputType.prop('type')).toEqual("text")
	  
	});



});

describe('About Product Input Field', () => {

	testInputField("[data-test='about-product']","textarea");

	testTagContent("[data-test='about-product-label']","label","About Product");


});


describe('Product Stock Input Field', () => {

	testInputField("[data-test='number-in-stock']","input");

	testTagContent("[data-test='number-in-stock-label']","label","Number In Stock");

	test('Field type', () => {

		const wrapper = setup();
		// console.log(wrapper.debug());
		const inputType = findByTestAttribute(wrapper,"[data-test='number-in-stock']");
		
		
		expect(inputType.prop('type')).toEqual("number")
	  
	});


});


