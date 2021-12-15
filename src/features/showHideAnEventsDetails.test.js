import React from 'react';
import { mount, shallow } from 'enzyme';
import App from '../App';
import { mockData } from '../mock-data';
import { loadFeature, defineFeature } from 'jest-cucumber';
import Event from '../Event';
import EventList from '../EventList';
import { extractLocations } from '../api';

const feature = loadFeature('./src/features/showHideAnEventsDetails.feature');

defineFeature(feature, test => {
	test('An event element is collapsed by default', ({ given, when, then }) => {
		given('An event element is collapsed.', () => {

		});

		let AppWrapper;
		when('The user opens the app.', () => {
			AppWrapper = mount(<App />)
		});

		then('The user sees a preview of all events.', () => {
			AppWrapper.update();
			expect(AppWrapper.find('.event')).toHaveLength(mockData.length);
		});
	});

	test('User can expand an event to see its details', ({ given, when, then }) => {
		let EventWrapper;
		given('An event element is collapsed.', () => {
			EventWrapper = shallow(<Event event={mockData[0]} />);
			expect(EventWrapper.state('showDetails')).toEqual(false);
		});

		let AppWrapper;
		when('The user opens the app.', () => {
			AppWrapper = mount(<App />)
		});

		then('The user can click a button to expand the events details.', () => {
			EventWrapper = shallow(<Event event={mockData[0]} />);
			const details = EventWrapper.find('.details');
			details.simulate('click');
			expect(EventWrapper.state('showDetails')).toEqual(true);
		});
	});

	test('User can collapse an event to hide its details', ({ given, when, then }) => {
		let EventWrapper;
		given('An events details are expanded.', () => {
			EventWrapper = shallow(<Event event={mockData[0]} />);
			EventWrapper.setState({ 'showDetails': true });
		});

		when('The user has clicked the button to expand its details.', () => {
			const details = EventWrapper.find('.details');
			details.simulate('click');
		});

		then('The user can click a button to hide the event’s details.', () => {
			expect(EventWrapper.state('showDetails')).toBe(false);
		});
	});

});