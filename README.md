[![Continuous Integration (CI)](https://github.com/Chandan9898Kumar/State_Manage/actions/workflows/Continuous_Integration.yml/badge.svg)](https://github.com/Chandan9898Kumar/State_Manage/actions/workflows/Continuous_Integration.yml)



# Getting Started with Create React App
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
## Available Scripts

In the project directory, you can run:
### `npm start`
Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `Code-Splitting`

Code-splitting your app can help you “lazy-load” just the things that are currently needed by the user, which can dramatically improve the performance of your app. While you haven’t reduced the overall amount of code in your app, you’ve avoided loading code that the user may never need, and reduced the amount of code needed during the initial load.

`Bundling `:

Bundling is the process of following imported files and merging them into a single file: a “bundle”. This bundle can then be included on a webpage to load an entire app at once.

### `React.lazy :`

### Before:
`import OtherComponent from './OtherComponent'`;

### After:
`const OtherComponent = React.lazy(() => import('./OtherComponent'))`

This will automatically load the bundle containing the OtherComponent when this component is first rendered.

`React.lazy takes a function that must call a dynamic import(). This must return a Promise which resolves to a module with a default export containing a React component.`

### Suspense
`The lazy component should then be rendered inside a Suspense component, which allows us to show some fallback content (such as a loading indicator) while we’re waiting for the lazy component to load.`

