import React, { Component } from "react";

class NumberOfEvents extends Component {
	render() {

		return <div>
			<input
				type="text"
				className="number-input"
				value={this.props.events}
			/>
		</div>;
	}
}
export default NumberOfEvents;