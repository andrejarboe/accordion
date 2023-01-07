# Login Questions

[View Live Site](https://www.accordion.andrejarboe.com)

This is a React application that displays a list of questions and answers about login. The questions and answers are stored in the `data` file and imported into the `App` component. The `App` component then maps over the data and renders a `SingleQuestion` component for each question in the data.

## Components

### App

The `App` component is the root component of the application. It fetches the data from the `data` file and stores it in the component's state using the `useState` hook. It then maps over the data and renders a `SingleQuestion` component for each question.

### SingleQuestion

The `SingleQuestion` component takes a single question object as a prop and renders the question and answer. It also has a toggle button that allows the user to show or hide the answer.
