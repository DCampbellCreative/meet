import React, { Component } from "react";

class Event extends Component {
	state = { showDetails: false, }

	render() {
		const { event } = this.props;
		const details = this.state.showDetails;

		const handleChange = e => {
			this.setState({ showDetails: !this.state.showDetails });
		}
		return <div>
			<h1 className="summary">{event.summary}</h1>
			<text className="start">{event.start}</text>
			<text className="organizer">{event.organzier}</text>
			<text className="location">{event.location}</text>
			<button className="details" onClick={handleChange}>{details ? 'Hide' : 'Show Details'}</button>
			{
				details && (<text className="description">{event.description}</text>)
			}

		</div>;
	}
}
export default Event;