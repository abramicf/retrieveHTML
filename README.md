# Getting started

To get started:

1.  Clone this repo to your machine

2.  Install postgres (if not already on your machine)
  a.  In terminal window, type 'psql postgres'
  b.  Execute following command: CREATE SCHEMA createhtmldb;

3.  Inside the db.js file, configure the username (currently 'abramicf') to your username

4.  In Postman, or a similar application:

  a.  Begin by hitting the 'sync' endpoint to initialize the 'urlToHtml' table in the database

  b.  When hitting the 'requestHtml' endpoint, ensure that the following is inside the body object

    {
      "url" : "http://www.google.com" (for example)
    }

  c.  When hitting the 'retrieveHtml' endpoint, ensure that the following is inside the body object:

    {
      "jobid" : "13" (for example)
    }

  Make sure the number is inside quotations as per JSON standards

Enjoy!