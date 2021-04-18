# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## What is it about?

This little project is about displaying data in detail and showing the location of each record on a map.\
It explores how to decouple the basic functionality (displaying data with details & showing location on a map) from the actual data and aims at solving the following user stories:

- As a user I want to see a list of records with basic information (Name, State and some other property that is relevant). State can be one of four different states.
- As a user I want to see detailed information on a specific record. Detailed information contains additional information and could be anything, but must include geographical coordinates.
- As a user I want detailed information to show the location of the record on a map.

### Data

The current data used in the project is about restaurants. However, by using render props, it is able to handle any data. One just needs to pass in corresponding components for list items and details.

### Screen sizes

To satisfy different screen sizes, the project contains two solutions.\
On smaller screens the list-items are selfcontained accordions that expand/hide the details when clicked within the list.\
On bigger screens, the details display to the right of the list when a list item gets clicked.

### Prerequisites

This project uses Google Maps, which requires an API key.\
Just replace the placerholder text with your private API key in `/config/keys.js`
