import React, { Component } from "react";

class NumberOfEvents extends Component {
	state = { numberOfEvents: 16, }

	handleInputChanged = (event) => {
		const value = event.target.value;
		this.setState({
			numberOfEvents: value,
		});
	}

	render() {
		return <div>
			<input
				type="number"
				className="number-input"
				value={this.state.numberOfEvents}
				onChange={this.state.handleInputChanged}
			/>
		</div>;
	}
}
export default NumberOfEvents;