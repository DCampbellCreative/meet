import React from 'react';
import { shallow } from 'enzyme';
import NumberOfEvents from '../NumberOfEvents';
import { mockData } from '../mock-data';

describe('<NumberOfEvents /> component', () => {
	let NumberOfEventsWrapper;
	beforeAll(() => {
		NumberOfEventsWrapper = shallow(<NumberOfEvents events={mockData[1]} />);
	});

	test('render text input', () => {
		expect(NumberOfEventsWrapper.find('.number-input')).toHaveLength(1);
	});

	test("number of events is changed in input", () => {
		NumberOfEventsWrapper.setState({ numberOfEvents: [], });
		NumberOfEventsWrapper.find(".number-input").simulate("change");
		expect(NumberOfEventsWrapper.state("numberOfEvents")).toEqual([]);
	})

});