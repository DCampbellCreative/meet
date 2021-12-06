import React from 'react';
import { shallow } from 'enzyme';
import NumberOfEvents from '../NumberOfEvents';
import { mockData } from '../mock-data';
import { extractLocations } from '../api';

describe('<NumberOfEvents /> component', () => {
	let NumberOfEventsWrapper, events;
	beforeAll(() => {
		NumberOfEventsWrapper = shallow(<NumberOfEvents events={events} />);
	});

	test('render text input', () => {
		expect(NumberOfEventsWrapper.find('.number-input')).toHaveLength(1);
	});

});