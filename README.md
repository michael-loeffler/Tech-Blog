# E-commerce Back End

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Description
    
The E-commerce Back End project is a command-line application that allows a user to  This application serves as a 

I was motivated to create this application because  Additionally, building this application was interesting for me because 

Through working on this project, I have learned how to use Sequelize and dotenv to connect an Express API to a MySQL database and create Models for SQL tables within JavaScript. Some of the biggest points of learning include:

* Using Sequelize to setup a connection between an Express API and a MySQL database
* Storing sensitive login information in a .env file via environment variables
* Setting up Models with Sequelize in order to create columns and data validation for each MySQL Table
* Leveraging Model methods to perform CRUD actions on tables (Create, Read, Update, Delete)
* Async/Await structure to allow functions/queries to run asynchronously
* Establishing One-to-One, One-to-Many, and Many-to-Many relationships between Models using foreign keys
* Performing a JOIN to include associated relational data when executing a GET request

## Table of Contents
        
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)
 
## Installation
            
1. Install Node.js
    - [Download Version 16 of Node.js](https://nodejs.org/download/release/v16.18.0/node-v16.18.0-x64.msi)
2. Clone this repo
   ```sh
   git clone https://github.com/michael-loeffler/E-commerce-Back-End.git
   ```
3. Install the dependencies included in the package.json
   ```sh
   npm i
   ```
4. Create a .env file with the following information
   ```sh
   DB_NAME='company_db'
   DB_USER='root'
   DB_PASSWORD='your MySQL password here'
   ```
5. Open MySQL, and run the following commands 
   ```sh
   source db\schema.sql;
   quit;
   ```
6. Seed the database in the command-line using the following command
   ```sh
   npm run seed
   ```
7. Start the server by using the following command in the command-line
   ```sh
   npm start
   ```
    
## Usage
    
The E-commerce Back End project functions as a command-line application. After following the installation instructions above, whenever users want to view or edit company data stored in the database, they simply invoke the application using the command "node index.js". The index.js file contains only one function declaration, the displayMenuOptions function, which will run immediately when the application is invoked. The Inquirer package will prompt the user with the various action options available to them, and when one is selected, the associated method stored in the Query class will be called, followed by another call of the displayMenuOptions function to provide the user with an opportunity to perform another action. All query methods are stored in the Query class and imported as a module in order to keep the index.js file brief and organized. If the action selected by the user requires input, the Inquirer package will gather all pertinent information from the user for that action, and then asynchronous queries will use the information collected to perform the associated action in MySQL. This is done using prepared statements to secure the database against SQL injection attacks. Sometimes, the Inquirer questions need information stored in the database to populate options for a particular question. When this is the case, asynchronous queries are run before the Inquirer package in order to provide choices for a list inquiry. For actions that simply pull and display data from the database, the console.table package is used to display the data in a visually friendly format. All queries are called asynchronously to prevent multiple queries from running simultaneously. It was necessary to prevent them from running simultaneously because often queries relied on the results of a previous query in order to run properly. Finally, when they are ready to exit, the user can select the "Quit Application" menu option and the application is closed. 

### --- Video demonstration of application's functionality ---

Please review the [demonstration video](https://drive.google.com/file/d/1mgfDLoTw5uz2s_H8bSDM-OJbfhZ0wfSA/view) to see how the app functions and experience the user perspective.
    
## Credits

- Node Packages:
    - express.js
    - mysql2
    - sequelize
    - dotenv
- [Professional README Guide, The Full-Stack Blog](https://coding-boot-camp.github.io/full-stack/github/professional-readme-guide)
- [Best-README-Template, GitHub Repo](https://github.com/othneildrew/Best-README-Template/blob/master/BLANK_README.md)

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