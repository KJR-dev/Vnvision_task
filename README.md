# Todo Project

A TODO management system built with Node.js, Express, and MySQL.

## Description

This project provides an API for managing TODO. Users can create, update, delete, and filter tasks based on their status (e.g., completed, pending). The project is structured with Sequelize as the ORM for managing MySQL database operations.

## Prerequisites

Before running this project, ensure you have the following installed on your machine:

- [Node.js](https://nodejs.org/)
- [MySQL](https://www.mysql.com/)
- [npm](https://www.npmjs.com/)

## Setup Guide

### Step 1: Create a MySQL Database

1. Open MySQL.
2. Create a new database called `todo` by running the following SQL command:

   ```sql
   CREATE DATABASE todo;
   ```

### Step 2: Configure Database Details

1.  Navigate to the project directory.
2.  Open the config.json file located in /src/config/.
3.  Add the necessary database details (host, username, password, and database name) under the development object. Example:

         
            "development": {
                        "username":"your_db_username",
                        "password": "your_db_password",
                        "database": "todo",
                        "host": "localhost",
                        "dialect": "mysql"
                        }
         

### Step 3: Refresh Database

1. Open a terminal in the project root directory.
2. Run the following command to sync the database and create all necessary tables:

   npm run refresh-db

### Step 4: Start the Application

1. In the same terminal, run the following command to start the application:
   npm run start

2. The server will start on the defined port, typically http://localhost:5000.

### Available Scripts

1. npm run refresh-db: Syncs the database and applies any migrations.
2. npm run start: Starts the server.

### Usage

Once the server is running, you can interact with the API using any API client (e.g., Postman or curl). Here are some sample endpoints:

GET [Get All todos](http://localhost:5000/api/todos)

GET [Get all only completed tasks.](http://localhost:5000/api/todos?status=completed)

POST [Create a new todo.](http://localhost:5000/api/todos)

GET [Get perticular todo by todoId](http://localhost:5000/api/todos/:todosId)

DELETE [Delete perticular todo by todoId](http://localhost:5000/api/todos/:todosId)

POST [Update perticular todo by todoId.](http://localhost:5000/api/todos/:todosId)




This `README.md` file provides a clear and structured guide to help users set up, configure, and run the project. You can modify or expand it as needed.


## Authors

- [@Jitendra Sahoo](https://github.com/KJR-dev)