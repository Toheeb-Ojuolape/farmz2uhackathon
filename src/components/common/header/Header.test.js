import React from 'react';
import {shallow} from 'enzyme';

import Header from './Header';

import farmz2u_logo from '../../../images/farmz2u-logo.svg';
import search from '../../../images/search.svg';
import settings from '../../../images/settings.svg';
import notification from '../../../images/notification.svg';
import profile_icon from '../../../images/logo.png';
import background_image from '../../../images/top-bg.svg';

import '@testing-library/jest-dom/extend-expect'



const setup = () => shallow( <Header />);

const findByTestAttribute = (wrapper,attribute) => wrapper.find(attribute);


function testImages(attribute,image_src,parent_attribute){ 

	let wrapper
	let image;

	beforeEach(() => {

		wrapper = setup();
		image = findByTestAttribute(wrapper,attribute);

	});

	test(parent_attribute + ' renders without crashing', () => {

		const parentContainer = findByTestAttribute(wrapper,parent_attribute);
		expect(parentContainer).toHaveLength(1);


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




test('renders without crashing', () => {

	const wrapper = setup();
	// console.log(wrapper.debug());
	const headerComponent = findByTestAttribute(wrapper,"[data-test='header-component']");
	
	expect(headerComponent).toHaveLength(1);
  
});




test('header-flex renders without crashing', () => {

	const wrapper = setup();
	// console.log(wrapper.debug());
	const headerFlexComponent = findByTestAttribute(wrapper,"[data-test='header-flex']");
	
	expect(headerFlexComponent).toHaveLength(1);
  
});

test('renders background image without crashing', () => {

	const wrapper = setup();
	// console.log(wrapper.debug());
	const headerComponent = findByTestAttribute(wrapper,"[data-test='header-component']");
	
	
	expect(headerComponent.prop('style')).toHaveProperty("background",`url(${background_image})`);
	
  
});


describe('farmz2u-logo', () => {

	testImages(
				"[data-test='farmz2u-logo']",
				farmz2u_logo,
				"[data-test='farmz2u-logo-container']"
				)

});


describe('search input renders without crashing', () => {



	test('renders input field', () => {

		const wrapper = setup();

		const inputField = findByTestAttribute(wrapper,"[data-test='search-field']");

		expect(inputField.type() ).toEqual('input');

	});

	testImages("[data-test='search-icon']",search,"[data-test='search-bar']");

});


describe('settings icon image', () => {

	testImages(
				"[data-test='settings-icon']",
				settings,
				"[data-test='settings-icon-container']"
				)

});

describe('notification icon image', () => {

	testImages(
				"[data-test='bell-icon']",
				notification,
				"[data-test='bell-icon-container']"
				)

});


describe('profile icon image', () => {

	testImages(
				"[data-test='profile-icon']",
				profile_icon,
				"[data-test='profile-icon-container']"
				)

});




