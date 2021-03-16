import React from 'react';
import {shallow} from 'enzyme';

import Nav from './Nav';

import log_out_icon from '../../../images/log-out.svg';



const setup = () => shallow( <Nav />);

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



test('renders without crashing', () => {

	const wrapper = setup();
	// console.log(wrapper.debug());
	const navComponent = findByTestAttribute(wrapper,"[data-test='nav-component']");
	
	expect(navComponent).toHaveLength(1);
  
});


describe('Home menu content', () => {

	testTagContent("[data-test='home-menu']","h3"," Home ");

});

describe('Order menu content', () => {

	testTagContent("[data-test='order-menu']","h3"," Order (12) ");

});

describe('Product menu content', () => {

	testTagContent("[data-test='product-menu']","h3"," Products (52) ");

});

describe('Product menu content', () => {

	testTagContent("[data-test='product-menu']","h3"," Products (52) ");

});

describe('Stock menu content', () => {

	testTagContent("[data-test='stock-menu']","h3"," Stock");

});

describe('Report menu content', () => {

	testTagContent("[data-test='report-menu']","h3"," Report");

});

describe('Logout menu content', () => {

	testTagContent("[data-test='log-out']","h3","Log out");

	test('log-out icon image', () => {

		const wrapper = setup();
		// console.log(wrapper.debug());
		const image = findByTestAttribute(wrapper,"[data-test='log-out-icon']");
		
		expect(image.type() ).toEqual('img');
  
	});

	test('log-out icon image from right source', () => {

		const wrapper = setup();
		// console.log(wrapper.debug());
		const image = findByTestAttribute(wrapper,"[data-test='log-out-icon']");
		
		expect(image.prop("src") ).toEqual(log_out_icon);

  
	});

});
