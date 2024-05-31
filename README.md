# iShop-backend

## Description
This application has been developed as a back end for e-commerce websites. This framework maintains API's for CRUD operations for managing e commerce data.

## Table of Contents
- [Installation Instructions](#Installation-Instructions)
- [Usage Information](#Usage-Information)
- [License](#License)
- [Contributions](#Contributions)
- [Test Instructions](#Test-Instructions)
- [Additional Questions](#additional-questions-send-an-email-or-follow-the-link-to-my-github-profile)

## Installation Instructions
This application utilizes node package manager (npm). Inorder to run this application clone the repository and then enter "npm install" in the terminal. The database is required  for this app to function. In order to configure the database supply the following values to a .env file: DB_USERNAME='ecommerce_db', DB_USER='YOUR-POSTGRES-USER', DB_PASSWORD='YOUR-DB-Password'. Once the .env file is created in the root directory and configured with the previously listed necessary data, create the databse using the schema.sql file. The schema.sql file can be executed by creating a connection to your postgres instance in the terminal by entering \i db/schema.sql. The database can be seeded with data after it has been created by running the seed script by entering the following command in the terminal: npm run seed. After npm is installed, the database is created and seeded the application can be started by entering the following command: npm start.

## Usage Information
The intended usage for this application is to manage e commerce data for tag, category, and product. 

## License
![MIT License](https://img.shields.io/badge/License-MIT-yellow.svg)

## Contributions
there are no additional contributors listed.

## Test Instructions
This application can be tested manually using postman or insomnia. Please see the demo video for additional details on how to evaluate the api's using those tools.

## Additional Questions? Send an email or follow the link to my github profile:
Email - peter.appliedanalyticalsciences@gmail.com 
Github profile link - https://github.com/peteCodes4u
