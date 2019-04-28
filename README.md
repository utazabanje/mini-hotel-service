## Mini Hotel Service

This is Mini Hotel Service where new guest can check in and staff members can log in and manage all the guests (filter them by date or delete them).

### Technologies used
##### For development:
* [React](https://reactjs.org/)
* [Firebase](https://firebase.google.com/)  - (for storing data and simple staff member log in)
* [React-Bootstrap](https://react-bootstrap.github.io/)
* [SASS](https://sass-lang.com/)

##### For testing:
* [Jest](https://jestjs.io/)
* [Enzyme](https://airbnb.io/enzyme/)

### Setup
To setup this project you will have to do the following:

```
$ git clone https://github.com/utazabanje/mini-hotel-service.git
$ cd mini-hotel-service
$ npm install
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

If you end up using my firebase config, on staff member login page, you can use this credentials to log in and list all checked in guests:
```
email: staff@hotel.com
password: staff123
```
### Run project:
To run project after inserting .env file run this command:
```
$ npm start
```


### Test application
Example tests are located in `App.test.js` file.
To run it just type:
```
$ npm test
```

### Buld project
To build mini-hotel-service simply write:
```
$ npm run build
```


