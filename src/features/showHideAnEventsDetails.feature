Feature: Show/hide an event's details

	Scenario: An event element is collapsed by default
		Given An event element is collapsed.
		When The user opens the app.
		Then The user sees a preview of all events.
	Scenario: User can expand an event to see its details
		Given An event element is collapsed.
		When The user opens the app.
		Then The user can click a button to expand the events details.
	Scenario: User can collapse an event to hide its details
		Given An events details are expanded.
		When The user has clicked the button to expand its details.
		Then The user can click a button to hide the event’s details.