# Click To Book
A Book my show Clone to choose a movie, theatre and book our seats.

## Features
1. Customer Interface - It has a homepage with the upcoming movies, latest movies. after selecting a theatre, you need to login and then book the theatre name and data. The theatre seats component displays. Select your seats and payment done.
2. TheatreOwner - When you log in as a theatre owner, the admin validates and approves you. You can add your theatres and pay the subscription. he adds the movies in the theatres.
3. Features like Add Movie into the database, Add theatre (after adding and subscription, you can add movie, date, showtimes), Show list of movies, list of your theatres, unsubscribed theatres, and expired theatres.
4. Admin - List of movies, add a movie, approve theatres.

## Tech Stack
 - Reactjs for the frontend
 - Nodejs, Expressjs for Backend 
 - MongoDB for Database
 - IMDB Api for movies
 - Axios for integration
 - Heroku for deploying.

## Run

 - Extract the repository and run  `npm install`  in both the client folder as well as the server folder. This should download all the required dependencies onto your local system.
 - Go to the Server folder and create a new folder named "mongodb" and a subfolder named "data". Move to the "mongodb" folder and run the command  `mongod --dbpath=data --bind_ip 127.0.0.1`  -->
 - Go to the server folder  `cd server`  and run  `npm run dev`. This should start your server on localhost:3000.
 - Go to the client folder  `cd client`and run  `npm run dev`. If asked, Allow the application to run on another port. This should start your client side. ( Most Probably on localhost:3001) 
 
Once the server is up and running, users will be able to interact with the application via the browser.

Enter  `Cntrl+C`  in all the terminals separately to end the processes.


## Deployment

This app has been deployed here: [http://click-to-book.herokuapp.com/](http://click-to-book.herokuapp.com/)
