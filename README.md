# PostCraft

## Table of Contents

- [Description](#description)
- [Heroku Link](#heroku-link)
- [Screenshots](#screenshots)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
  - [Database Setup](#database-setup)
  - [Seeding](#seeding)
  - [Starting the server](#starting-the-server)
  - [Testing](#testing)
- [Features](#features)
- [Usage](#usage)
- [Contribution Guidelines](#contribution-guidelines)
- [License](#license)

## Description

The E-commerce Back-End application provides internet retail companies with a MySQL database to manage categories, products, and tags related to their e-commerce business.
Built with Sequelize, an ORM (Object-Relational Mapping) dependency, this project enhances code readability, reusability, and maintainability by organizing larger files into manageable pieces.
Users can test API routes using tools like Insomnia to view, post, update, and delete data from the database.

## Heroku Link

Heroku Link [here](https://secret-caverns-70181-54b0d21b6c15.herokuapp.com).

## Screenshots

![Screenshot 1](./images/Screenshot.jpg)


## Technologies Used

![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![MySQL](https://img.shields.io/badge/mysql-%2300f.svg?style=for-the-badge&logo=mysql&logoColor=white)
![Sequelize](https://img.shields.io/badge/Sequelize-52B0E7?style=for-the-badge&logo=Sequelize&logoColor=white)
![Nodemon](https://img.shields.io/badge/NODEMON-%23323330.svg?style=for-the-badge&logo=nodemon&logoColor=%BBDEAD)
![Heroku](https://img.shields.io/badge/Heroku-Deployed-brightgreen?style=for-the-badge&logo=heroku)


- Dependencies: sequelize (v5.22.5), mysql2 (v2.3.3), express (v4.17.1), dotenv (v8.6.0), nodemon (v2.0.3)
- Testing: Insomnia

## Installation

[![npm](https://badgen.net/badge/bcrypt/v5.0.0/)](https://www.npmjs.com/package/bcrypt/v/5.0.0)
[![connect session sequelize](https://img.shields.io/badge/connect_session_sequelize-v7.0.4-green)](https://www.npmjs.com/package/connect-session-sequelize/v/7.0.4)
[![dotenv](https://img.shields.io/badge/dotenv-v8.2.0-red)](https://www.npmjs.com/package/dotenv/v/8.2.0)
[![express](https://img.shields.io/badge/express-v4.17.1-yellow)](https://www.npmjs.com/package/express/v/4.17.1)
[![express handlebars](https://img.shields.io/badge/express_handlebars-v5.2.0-seafoam)](https://www.npmjs.com/package/express-handlebars/v/5.2.0)
[![express sessions](https://img.shields.io/badge/express_sessions-v1.17.1-cyan)](https://www.npmjs.com/package/express-session/v/1.17.1)
[![mysql2](https://img.shields.io/badge/mysql2-v2.2.5-purple)](https://www.npmjs.com/package/mysql2/v/2.2.5)
[![sequelize](https://img.shields.io/badge/sequelize-v6.3.5-indigo)](https://www.npmjs.com/package/sequelize/v/6.3.5)


1. Clone the repository: `git clone https://github.com/MwangiR/CommerceSync.git`
2. Open in VS Code. If not installed, [install VS Code](https://code.visualstudio.com/).
3. Install Node.js v16 (e.g., using npm: `npm i node@16`).
4. Install from package.json: `npm i`
5. To install dependencies independently:
    - **bcrypt**: `npm i bcrypt@5.0.0`
    - **connect-session-sequelize**: `npm i connect-session-sequelize@7.0.4`
    - **dotenv**: `npm i dotenv@8.2.0`
    - **express**: `npm i express@4.17.1`
    - **express-handlebars**: `npm i express-handlebars@5.2.0`
    - **express-session**: `npm i express-session@1.17.1`
    - **mysql2**: `npm i mysql2@2.2.5`
    - **sequelize**: `npm i sequelize@6.3.5`
6. Create a `.env` file in the root directory with your database credentials and session secret.

### Database Setup

If you don't have a MySQL account, [create one](https://dev.mysql.com/doc/mysql-installation-excerpt/5.7/en/).

1. Navigate to the `db` directory containing the `schema.sql` file.
2. Open a MySQL shell: `mysql -u root -p` (enter your password when prompted).
3. Inside the MySQL shell, run: `source schema.sql` to create the database.

### Seeding

1. Navigate to the root directory of the repository.
2. Run: `npm run seeds` to seed the database and create table structures.

Now your database is populated with initial data and ready for testing.

### Starting the Server

1. With the terminal open in the root directory, run: `npm start` to start the server.
2. The server will start, and you'll see a message indicating that it's running.

### Testing

Navigate [here](https://secret-caverns-70181-54b0d21b6c15.herokuapp.com).

## Features

- Manage e-commerce backend with Express routing.
- GET, POST, PUT, and DELETE routes for categories, products, and tags.

## Usage

Interact with the database through API endpoints using tools like Insomnia or MySQL shell.

## Contribution Guidelines

- Open an issue for proposed changes.
- Create a feature branch for changes and wait for approval before merging.

## License

This project is licensed under the MIT License.
