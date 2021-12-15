import React, { Component } from "react";

class Event extends Component {
	state = { showDetails: false, }

	handleChange = (e) => {
		this.setState({ showDetails: !this.state.showDetails });
	}

	render() {
		const { event } = this.props;
		const details = this.state.showDetails;


		return (
			<div className="event">
				<h1 className="summary">{event.summary}</h1>
				<p className="start">{event.start.dateTime}</p>
				<p className="organizer">{event.organizer.email}</p>
				<p className="location">{event.location}</p>
				<button className="details" onClick={this.handleChange}>{details ? 'Hide' : 'Show Details'}</button>
				{
					details && (<p className="description">{event.description}</p>)
				}
			</div>
		);
	}
}
export default Event;