import React from 'react';
import { shallow } from 'enzyme';
import Event from '../Event';
import { mockData } from '../mock-data';

describe('<Event /> component', () => {
	let EventWrapper;
	beforeAll(() => {
		EventWrapper = shallow(<Event event={mockData[1]} />);
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

	test("extra info is shown when user clicks on details button", () => {
		EventWrapper.find(".details").simulate("click");
		expect(EventWrapper.find(".description")).toHaveLength(1);
		expect(EventWrapper.find(".details").text()).toBe("Hide");
	});

});