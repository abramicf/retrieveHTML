# Getting started

To get started:

1.  Install Node & Postgres (if not already on your machine)

2.  Clone this repo to your machine and navigate to the cloned repo in your terminal

3.  Execute the following command in your terminal: npm install

4.  In a separate terminal window, execute the following commands:

  a.  psql postgres

  b.  CREATE DATABASE retrievehtmldb;

5.  Inside the db.js file, configure the username (currently 'abramicf') to your username

6.  In a separate Terminal window, start the application with the following command:

  nodemon server/index.js

7.  In Postman, or a similar application:

  a.  APIs should be accessed on the local host at Port 3000 (127.0.0.1:3000)

  b.  Begin by accessing the '/api/sync' endpoint to initialize the 'urlToHtml' table in the database

  c.  The api will expect all POST data to be received in JSON (application/json) format.

  d.  When accessing the '/api/requestHtml' endpoint, ensure that the following is inside the body object

    {
      "url" : "http://www.google.com" (for example)
    }

  e.  When accessing the '/api/retrieveHtml' endpoint, ensure that the following is inside the body object:

    {
      "jobid" : "13" (for example)
    }

  Make sure the number is inside quotations as per JSON standards

Enjoy!