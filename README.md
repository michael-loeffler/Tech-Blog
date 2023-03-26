# Tech Blog

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Description
    
This Tech Blog is a full-stack web application allowing users to create blog posts about topics of interest, as well as comment on others' posts. Users can browse titles of current blog posts (as well as see who wrote them), and after clicking on one, can view the full blog and any comments made on the post. Once a user creates an account and logs in, they will have the ability to write their own posts, as well as comment on the blogs of other users. At any time, logged in users can update or delete any posts or comments they have written. Whenever a change is made, the page will respond dynamically to reflect the change. 

I was motivated to create this application because it is a great way to put all my learning up to this point into action on something that is ubiquitous in internet life: posting and commenting. This functionality is the throughline of all social media sites, as well as other sectors such as travel, dining, and commerce. Anywhere where people are sharing their opinions about something publicly (e.g., reviews, blogs, etc.) and commenting on the thoughts of others, this functionality is required to allow for that discourse. With how common this type of web application is in our society, it is very likely that I will work on something similar in my career as a web developer. Therefore this project was a great way to put my skills to the test and add a highly relevant project to my portfolio.


Through working on this project, I learned a lot about utilizing the MVP framework to build a robust and dynamic full-stack application with a polished front end and comprehensive back end. Some of the biggest points of learning include:
* Authentication, sessions, and cookies
* Adding a date_created column to models by setting the default value to be the current date/time
* Creating custom helper functions to format dates and names as desired
* Establishing relationships between models using foreign keys to bring in pertinent related information through nested 'include' calls in a given query
* Utilizing POST, PUT, and DELETE routes to edit the data stored in the database
* Using a GET fetch prior to a PUT fetch, in order to display for the user what they currently have saved, making the process of updating data easier and smoother
* Leveraging the ability to store information about the user in the session data
* Taking advantage of the flexibility of handlebars to serve up different HTML templates with variable data depending on the situation
* Strategically toggling CSS display: none; rule on HTML elements at certain times to hide or unhide features, making the interface easier for users to navigate

## Table of Contents
        
- [Installation](#installation-if-you-would-like-to-clone-the-repo-and-work-from-the-backend-otherwise-simply-visit-the-deployed-application)
- [Usage](#usage)
- [Link to Deployed Application](#link-to-deployed-application)
- [Credits](#credits)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)
 
## Installation (if you would like to clone the repo and work from the backend; otherwise simply [visit the deployed application](https://shrouded-gorge-55801.herokuapp.com/)) 
            
1. Install Node.js
    - [Download Version 16 of Node.js](https://nodejs.org/download/release/v16.18.0/node-v16.18.0-x64.msi)
2. Clone this repo
   ```sh
   git clone https://github.com/michael-loeffler/Tech-Blog.git
   ```
3. Install the dependencies included in the package.json
   ```sh
   npm i
   ```
4. Create a .env file with the following information
   ```sh
   DB_NAME='blog_db'
   DB_USER='root'
   DB_PASSWORD='your MySQL password here'
   ```
5. Open MySQL, and run the following commands 
   ```sh
   source db\schema.sql
   quit
   ```
6. Seed the database in the command-line using the following command
   ```sh
   npm run seed
   ```
7. Start the server by using the following command in the command-line
   ```sh
   npm start
   ```
8. Open the site on your local host (e.g., http://localhost:3001/)
    
## Usage
    
The Tech Blog project functions in two primary modes: browsing for the general user, and then a more interactive experience for users who have created an account and logged in. Without logging in, a user can see all the blogs currently posted, or see an individual blog page with associated comments. Each page/view sends a specific query to a MySQL database through sequelize and serves the results to the corresponding handlebars view for that page. A logged in user has the ability to create their own blog posts or comment on others' posts. New posts and comments are stored in the database via POST routes, and will therefore persist across multiple sessions. The user also has the ability to edit or remove their data stored in the database through PUT and DELETE routes, respectively. For an individual blog page will render the buttons to edit or remove a comment only for comments that the logged in user has made. This prevents users from editing the comments of other users. On a user's Dashboard, all posts that the user has written are displayed, and there is a button to create a new post. When that button is clicked on, the form to create a new post is un-hidden from view so that the user can input the required information. Finally, when a user wants to edit a post or comment and clicks on the Update button, the text they have currently saved for that post/comment is rendered in the textbox(es) so that a user can more easily see what they already have written before editing. 

## Link to deployed application
[https://shrouded-gorge-55801.herokuapp.com/](https://shrouded-gorge-55801.herokuapp.com/)
    
## Credits

Node packages used:
  - bcrypt
  - connect-session-sequelize
  - dotenv
  - express
  - express-handlebars
  - express-session
  - mysql2
  - sequelize

## License
    
Covered under the MIT License. For more details and to view the license in full, please visit the [MIT License Webpage](https://choosealicense.com/licenses/mit/).

## Contributing
    
If you have a suggestion for improvement, please fork the repo and create a pull request. You can also open an issue and tag it for "enhancement".
1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/featureName`)
3. Commit your Changes (`git commit -m 'adds featureName'`)
4. Push to the Branch (`git push origin feature/featureName`)
5. Open a Pull Request
    
## Tests

N/A

## Questions

Please visit my [GitHub profile](https://github.com/michael-loeffler) or [send me an email with any additional questions.](mailto:michaelloeffler23@gmail.com)