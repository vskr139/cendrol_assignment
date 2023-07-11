Chuck Norris Jokes Web App
This is a web application that replicates the design of the Chuck Norris Jokes webpage and makes it responsive. It fetches Chuck Norris jokes from the Chuck Norris API based on different categories.

Demo
A live demo of the web app can be accessed at GitHub Pages.

Features

. Displays Chuck Norris jokes based on different categories
. Responsive design for seamless usage on different devices
. Fetches jokes from the Chuck Norris API using REST APIS
. Provides a random joke button to fetch a joke from any category
. Displays a loading spinner while fetching data
. Error handling for failed API requests

Technical Decisions

a) React.js: The web app is built using React.js to create a component-based architecture, allowing for reusability and maintainability of code.
b) REST APIS: REST APIS is used for making HTTP requests to the Chuck Norris API. It provides an easy-to-use interface for handling API requests.
c) CSS Flexbox: Flexbox is used for the responsive layout of the web app. It allows for easy positioning and alignment of elements.
d) CSS Media Queries: Media queries are used to adjust the layout and styles based on different screen sizes, ensuring responsiveness across devices.
e) GitHub Pages: The web app is hosted using GitHub Pages, allowing for easy deployment and accessibility.
  Known Issues

Project Structure

a) src/components: Contains React components used in the web app.
b) src/services: Contains API service functions for fetching Chuck Norris jokes.
c) src/App.js: The main component that renders the entire web app.
d) src/index.js: The entry point of the web app.
e) public/index.html: The HTML template for the web app.
f) Getting Started
   To run the web app locally, follow these steps:

Clone the GitHub repository: git clone https://github.com/vskr139/cendrol_assignment.git
Navigate to the project directory: cd myapp
Install dependencies: npm install
Start the development server: npm start
Access the web app in your browser at http://localhost:3000

Conclusion

This web app replicates the design of the Chuck Norris Jokes webpage and makes it responsive using React.js. It fetches Chuck Norris jokes from the Chuck Norris API based on different categories and provides a smooth user experience on various devices. The codebase follows best practices for maintainability and reusability. Feel free to explore the GitHub repository for the complete source code.
