# Phase-1-week-3-project
## Introduction
For this assessment, you'll be working on Flatdango.

Flatiron Movie Theater is open for business! You will be building out an
application, Flatdango, that allows a user to purchase movie tickets from the
theater.

The instructions below will walk you through the process of ideation and planning your app: deciding on your user interface, planning how the information will be laid out on the page, etc. You should work through all the planning steps before you start doing any coding.

## project Link

* live link at [click me](http://127.0.0.1:5501/index.html)
* page link at [click me](https://ngechuk.github.io/Phase-1-week-3-project/)

### Requirements

- For this project, you must:

    . Have a well-written README file.
    . Fetch data from a local server running JSON DB server.

## Project Setup & Pre-requisite Data

In order for you to use the content on this repo ensure you have the following:

## Installation

To use this repo on your machine requires some simple steps


- Open a terminal / command line interface on your computer
- Clone the repo by using the following:
 - git@github.com:Ngechuk/Phase-1-week-3-project.git

- Change directory to the repo folder:

    cd Phase-1-week-3-project

- (Optional) Open it in ``Visual Studio Code``

        code .
- Install json-server with the command npm install -g json-server
- After installation, run npm install json server, with the gotten dependancies you are all set.

- In your project directory, create a db.json file and use the data provided 
- Links to an external site. for your server DB.
- Run this command to get the backend started:json-server --watch db.json or you can still use  npm start json-server db.json
- if you get an error that the service, try killing running process (using 3000) by clicking "ctrl C" then run again. if that doesn't work, try; 


Check the PID i.e. id of process running on port 3000 with below command :

lsof -i tcp:3000

It would output something like following:

COMMAND  PID   USER   FD   TYPE  DEVICE  SIZE/OFF NODE NAME
node     5805  xyz    12u  IPv6  63135    0t0     TCP  *:3000 (LISTEN)

Now kill the process using :

kill -9 5805 That should definately kill it

## Project Guidelines
Your project should conform to the following set of guidelines:

### Core Deliverables

As a user, I can:

1. See the first movie's details, including its **poster, title, runtime,
   showtime, and available tickets** when the page loads. The number of
   available tickets will need to be derived by subtracting the number of
   `tickets_sold` from the theater's `capacity`. You will need to make a GET
   request to the following endpoint to retrieve the film data:

2. See a menu of all movies on the left side of the page in the `ul#films`
   element when the page loads. (_optional_: you can style each film in the list
   by adding the classes `film item` to each `li` element.) There is a
   placeholder `li` in the `ul#films` element that is hardcoded in the HTML —
   feel free to remove that element by editing the HTML file directly, or use
   JavaScript to remove the placeholder element before populating the list. You
   will need to make a GET request to the following endpoint to retrieve the
   film data:

3. Buy a ticket for a movie. After clicking the "Buy Ticket" button, I should
   see the number of available tickets decreasing on the frontend. I should not
   be able to buy a ticket if the showing is sold out (if there are 0 tickets
   available). **No persistence is needed for this feature**.
   
   ## Steps and procedure

- In your directory create a html file incorporating the different elements in your web app
- create a css file to style your html document
- create the index.js file using npm init -y , this also create the db.json files
- Link your files together using the correct syntax repectively.
- Assuming your server is running, start writing you code 





## License: 

ISC License.

## Author

GitHub: https://github.com/Ngechuk