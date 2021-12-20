import React, { Component } from 'react';
import './App.css';
import './nprogress.css';

import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import { InfoAlert } from './Alert';
import { extractLocations, getEvents } from './api';

class App extends Component {
  state = {
    events: [],
    locations: [],
    numberOfEvents: 16,
    currentLocation: "all",
    infoText: '',
  }

  componentDidMount() {
    this.mounted = true;
    getEvents().then((events) => {
      if (this.mounted) {
        this.setState({ events: events.slice(0, this.state.numberOfEvents), locations: extractLocations(events), });
      }
    });
    this.showOnlineStatus();
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  updateEvents = (location, eventCount) => {
    const { currentLocation, numberOfEvents } = this.state;
    if (location) {
      getEvents().then((events) => {
        const locationEvents = location === "all" ? events : events.filter((event) => event.location === location);
        const filteredEvents = locationEvents.slice(0, numberOfEvents);
        this.setState({
          events: filteredEvents, currentLocation: location,
        });
      });
    } else {
      getEvents().then((events) => {
        const locationEvents = currentLocation === "all" ? events : events.filter((event) => event.location === currentLocation);
        const filteredEvents = locationEvents.slice(0, eventCount);
        this.setState({
          events: filteredEvents, numberOfEvents: eventCount,
        });
      });
    }
  };

  showOnlineStatus = (event) => {
    if (!navigator.onLine) {
      this.setState({
        infoText: 'You are offline'
      });
    } else {
      this.setState({
        infoText: ''
      });
    }
  }

  render() {
    return (
      <div className="App">
        <InfoAlert text={this.state.infoText} />
        <h1 className='title'>Meet</h1>
        <CitySearch locations={this.state.locations} updateEvents={this.updateEvents} />
        <NumberOfEvents numberOfEvents={this.state.numberOfEvents} updateEvents={this.updateEvents} />
        <EventList events={this.state.events} />
      </div>
    );
  }
}

export default App;
