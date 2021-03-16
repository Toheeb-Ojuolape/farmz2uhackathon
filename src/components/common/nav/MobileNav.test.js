import React from 'react';
import {shallow} from 'enzyme';

import MobileNav from './MobileNav';

import log_out_icon from '../../../images/log-out.svg';
import farmz2u_logo from '../../../images/farmz2u-logo.svg';
import search from '../../../images/search.svg';



const setup = () => shallow( <MobileNav />);

const findByTestAttribute = (wrapper,attribute) => wrapper.find(attribute);


function testImages(attribute,image_src){ 

	let wrapper
	let image;

	beforeEach(() => {

		wrapper = setup();
		image = findByTestAttribute(wrapper,attribute);

	});



	test('renders without crashing', () => {

		expect(image).toHaveLength(1);

	});

	test('renders img tag', () => {

		expect(image.type() ).toEqual('img');

	});

	test('renders src', () => {

		expect(image.prop("src") ).toEqual(image_src);

	});


}

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


describe('farmz2u-logo', () => {

	testImages(
				"[data-test='farmz2u-logo']",
				farmz2u_logo
				)

});

describe('settings icon image', () => {

	testImages("[data-test='search-icon']",search);

});

describe('Home menu content', () => {

	testTagContent("[data-test='home-menu']","a","Home");

});

describe('Order menu content', () => {

	testTagContent("[data-test='order-menu']","a", "Order(12)");

});

describe('Product menu content', () => {

	testTagContent("[data-test='product-menu']","a","Products(52)");

});



describe('Stock menu content', () => {

	testTagContent("[data-test='stock-menu']","a","Stock");

});

describe('Report menu content', () => {

	testTagContent("[data-test='report-menu']","a","Report");

});

describe('Settings menu content', () => {

	testTagContent("[data-test='settings-menu']","a","Settings");

});

describe('Notification menu content', () => {

	testTagContent("[data-test='notification-menu']","a","Notifications");

});

describe('Open menu', () => {

	let wrapper
	let menu;

	beforeEach(() => {

		wrapper = setup();
		menu = findByTestAttribute(wrapper,"[data-test='open-menu']");

	});

	test('renders without crashing', () => {

		
		expect(menu).toHaveLength(1);
	});

	test('when click opens menu', () => {

		menu.simulate('click');
		let menuDiv = wrapper.find('#myNav');
		expect(menuDiv.prop('style')).toHaveProperty('width','100%');
	});
  
});


describe('Close menu', () => {

	let wrapper
	let menu;

	beforeEach(() => {

		wrapper = setup();
		menu = findByTestAttribute(wrapper,"[data-test='close-menu']");

	});

	test('renders without crashing', () => {
		expect(menu).toHaveLength(1);
	});

	test('when click closes menu', () => {

		menu.simulate('click');
		let menuDiv = wrapper.find('#myNav');
		expect(menuDiv.prop('style')).toHaveProperty('width','0%')
	});
  
});


