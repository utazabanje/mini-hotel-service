## Mini Hotel Service

This is Mini Hotel Service where new guest can check in and staff members can log in and manage all the guests.

### Technologies
##### For development:
* React
* Firebase (for storing data and staff member log in)
* React-Bootstrap

##### For testing:
* Jest
* Enzyme

### Setup
To run this project you will have to do the following:

```
$ git clone https://github.com/utazabanje/mini-hotel-service.git
$ cd mini-hotel-service
$ npm install
```
To run the project:
```
$ npm start
```
If you want to run tests:
```
$ npm test
```
Because I use Firebase in this project, config file will look like this
```
apiKey: process.env.REACT_APP_API_KEY,
authDomain: process.env.REACT_APP_AUTH_DOMAIN,
databaseURL: process.env.REACT_APP_DATABASE_URL,
projectId: process.env.REACT_APP_PROJECT_ID,
storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
```
so be sure to include .env file I have sent you if you don't want to create your own firebase project.

The credentials for staff members to log in are:
```
email: staff@hotel.com
password: staff123
```
