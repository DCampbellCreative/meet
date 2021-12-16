import React from 'react';
import { mount, shallow } from 'enzyme';
import App from '../App';
import { mockData } from '../mock-data';
import { loadFeature, defineFeature } from 'jest-cucumber';
import NumberOfEvents from '../NumberOfEvents';

const feature = loadFeature('./src/features/specifyNumberOfEvents.feature');

defineFeature(feature, test => {
	test('When user hasn’t specified a number, 16 is the default number', ({ given, when, then }) => {
		given('The user hasn’t changed the default number of events to be displayed.', () => {

		});

		let AppWrapper;
		when('The user opens the app.', () => {
			AppWrapper = mount(<App />);
		});

		then('The user can see previews for 16 events.', () => {
			AppWrapper.update();
			expect(AppWrapper.find('.event')).toHaveLength(mockData.length);
		});
	});

	test('User can change the number of events they want to see', ({ given, when, then }) => {
		let AppWrapper;
		given('The user changes the default amount of events displayed.', () => {
			AppWrapper = mount(<App />)
		});

		when('The user is on the main page.', () => {
			AppWrapper.find('.number-input').simulate('change', { target: { value: 2 } })
		});

		then('The user sees previews for the desired number of events.', () => {
			expect(AppWrapper.state('numberOfEvents')).toBe(2);
		});

	});

});