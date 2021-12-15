Feature: Specify number of events

	Scenario: When user hasn’t specified a number, 16 is the default number
		Given The user hasn’t changed the default number of events to be displayed.
		When The user opens the app.
		Then The user can see previews for 16 events.
	Scenario: User can change the number of events they want to see
		Given The user changes the default amount of events displayed.
		When The user is on the main page.
		Then The user sees previews for the desired number of events.