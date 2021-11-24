A meet up app created in React.

User Stories

FEATURE 2: SHOW/HIDE AN EVENT'S DETAILS
    Scenario 1: An event element is collapsed by default
        Given: An event element is collapsed.
        When: The user opens the app.
        Then: The user sees a preview of all events.
    Scenario 2: User can expand an event to see its details
        Given: An event element is collapsed.
        When: The user opens the app.
        Then: The user can click a button to expand the events details.
    Scenario 3: User can collapse an event to hide its details
        Given: An events details are expanded.
        When: The user has clicked the button to expand its details.
        Then: The user can click a button to hide the event’s details.
FEATURE 3: SPECIFY NUMBER OF EVENTS
    Scenario 1: When user hasn’t specified a number, 32 is the default number
        Given: The user hasn’t changed the default number of events to be displayed.
        When: The user opens the app.
        Then: The user can see previews for 32 events.
    Scenario 2: User can change the number of events they want to see
        Given: The user changes the default amount of events displayed.
        When: The user is on the main page.
        Then: The user sees previews for the desired number of events.
FEATURE 4: USE THE APP WHEN OFFLINE
    Scenario 1: Show cached data when there’s no internet connection
        Given: The user is offline.
        When: The user opens the app.
        Then: The user sees events that were previously cached within the app.
    Scenario 2: Show error when user changes the settings (city, time range)
        Given: The user is offline.
        When: The user tries to change their display settings.
        Then: The app will return an error stating the user is offline.
FEATURE 5: DATA VISUALIZATION
    Scenario 1: Show a chart with the number of upcoming events in each city
        Given: The user clicks on the chart tab.
        When: The user is online of the main page.
        Then: The app will return a chart showing the number of upcoming events by city.