# E-commerce Back End

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Description
    
The E-commerce Back End project is meant to serve as the back-end functionality for an e-commerce website. It uses Sequelize to connect the Express.js API to a MySQL database containing data about various products sold on the site. This connection allows a back-end user to 1) view all categories, products, or tags in the database, 2) view an individual category, product, or tag, 3) create a new category, product, or tag, 4) update an existing category, product, or tag, and 5) delete an existing category, product, or tag.

I was motivated to create this application because it is important to be able to connect data stored in a database with the front end of a website, while organizing the data using object-relational mapping. One does this to make the data easily interpreted and utilized by the front end so it can be displayed for the end user (consumer).

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
   DB_NAME='ecommerce_db'
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
    
The E-commerce Back End project functions as a command-line application. After following the installation instructions above, the server will be running and users can test the API endpoints via Insomnia to see the JSON responses they generate. These responses will either contain formatted JSON objects of all the data associated with the call that is stored in the MySQL database (GET requests), or confirmation messages of the completed POST, PUT, or DELETE actions. 

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