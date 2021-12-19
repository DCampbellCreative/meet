import React, { Component } from "react";
import { ErrorAlert } from './Alert';

class NumberOfEvents extends Component {
	state = { numberOfEvents: 16, }

	handleInputChanged = (event) => {
		const value = event.target.value;
		if (value > 32 || value < 1) {
			this.setState({
				warningText: 'Please select a number between 1 and 32'
			});
		} else {
			this.setState({ numberOfEvents: value, warningText: '' });
			this.props.updateEvents(null, value);
		}
	};

	render() {
		return <div>
			<input
				type="number"
				className="number-input"
				value={this.state.numberOfEvents}
				onChange={this.handleInputChanged}
			/>
			<ErrorAlert text={this.state.warningText} />
		</div>;
	}
}
export default NumberOfEvents;