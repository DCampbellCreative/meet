import React from 'react';
import { shallow } from 'enzyme';
import Event from '../Event';
import { mockData } from '../mock-data';

describe('<Event /> component', () => {
	let EventWrapper;
	let event = mockData;
	beforeAll(() => {
		EventWrapper = shallow(<Event event={event} />);
	})

	test('render summary', () => {
		expect(EventWrapper.find('.summary')).toHaveLength(1);
	});

	test('render start-time', () => {
		expect(EventWrapper.find('.start')).toHaveLength(1);
	});

	test('render organizer', () => {
		expect(EventWrapper.find('.organizer')).toHaveLength(1);
	});

	test('render location', () => {
		expect(EventWrapper.find('.location')).toHaveLength(1);
	});

});