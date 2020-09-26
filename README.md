# Employee and Departments Management Web App

## FrontEnd

The Frontend was built using React Hooks. Especifically this app use useContext and useReducer hook for global data management. Also it uses the axios module for request the data from the API, and MaterialUI Framework for website styling.

## BackEnd

The Backend was build using NodeJs, Express and MongoDB Stack, and npm for dependencies manager. Also the app uses the MVC arquitecture for a better code structure.

### App Guide

This app consists of two principal modules for manage departments and employees. the principal view shows a sidebar where a user can navigate through the different modules of the app, but also there is a theme section which allow users to change the website colors.

The first module consists of two views which are “View Departments” and “Add Department”. In the first one the users can see a table with all the departments that are created; this table has an action column with two buttons for edit and delete departments. Its good to know that users can not remove a department that has employees in there. If the user presses the Edit button, the app will redirect him to the Update Employee view, where the user can change the selected department information.

The second module is similar that the first one, it has two views which are “View Employees” and “Add Employee”, in the first and second view users can do exactly the same as in departments, the only differences are the required fields.
