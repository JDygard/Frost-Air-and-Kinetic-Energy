# Frost Air and Kinetic Energy HVAC (FAKE HVAC)
This is built as a portfolio piece for a React-based industrial HVAC control application. The focus is on performance, accessibility and comfort of users.

# Design Philosophy
This is designed to be a "one-stop shop" for the health and operation of the HVAC system, with three app authorization levels: 

```
Administrative: Full access to all system controls and data. This level will be capable of controlling the ranges of temperature controls for the whole building.

Maintenance: Full access to zone controls, data and maintenance information.

Supervisor: Full access to zone and subzone controls.

User/Panel: This is an authorization given to a single static control station or user to have control over a single zone or subzone.
```

***
## Dashboard
The Dashboard component is intended to be the base page, relating all information about the entire system at a glance. 

### Status Indicator
This element will evaluate and display total system health at a glance, separated into three categories: Efficiency, Temperature, and Maintenance status

### Alert Bar
Critical alerts, warnings and status advisories will be displayed in a field below the status indicator for quick information at a glance.

### Zone glance bars
Each reusable "glance bar" is hooked up to the state and will derive the overall health of each zone based on the most recent data. 

```
Bolt symbol: Indicates energy usage status in terms of how the administrator has set what constitutes efficient use of electricity for heating/cooling.

Thermostat: Indicates average zone temperature in terms of human comfort.

Water drop (contrast symbol): Indicates humidity in terms of ideal human comfort.

Wind icon: Indicates airflow in terms of maintaining appropriate backflow for efficient operation.

Maintenance icon: Indicates maintenance status in terms of impending preventive maintenance tasks.
```

The vertically oriented pips change color based on the health of the zone. They are lined up vertically, similarly to aircraft instrumentation to have outlying information stand out at a glance.

Charts will help display historical data from InfluxDB in 1hr, 8hr, 24hr, and 1wk timeframes.

The settings icon opens the zone view.
***
## Zone View
The zone view is for a single zone. It will display all information about the zone, including the status of the zone, the status of the subzones, the maintenance status information and the status of the equipment in the zone.

### Temperature
This lets an administrator or supervisor set the day- and night-time temperature ranges for subzones. User-level accounts will be able to set individual thermostats within these ranges.



# Technologies used
## Create React App
For expediency, this project was bootstrapped with Create React App. This is a great tool for getting a React application up and running quickly. It also provides a great development environment with hot reloading and a test runner.

## React-Redux
This application uses React-Redux for state management. 

This will make it easy to connect the app to a backend for disseminating live information from multiple sources to be used throughout the app.

## InfluxDB
This application will use InfluxDB as a time-series database. This is a great tool for storing and querying time-series data. It is also a great tool for storing and querying data from multiple sources.

This will enable us to use the data from multiple sources to create a single source of truth for live charts used throughout the application.

## React-Charts
This application will use React-Charts for displaying charts.

React-Charts was chosen because it's the most performant way to render simple, readable line charts for rapid understanding of historical data.
