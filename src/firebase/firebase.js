import * as firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyCvkSDM66obMSLp8J1LlI6hUVHimRmMzoA',
  authDomain: 'create-your-pizza.firebaseapp.com',
  databaseURL: 'https://create-your-pizza.firebaseio.com',
  projectId: 'create-your-pizza',
  storageBucket: 'create-your-pizza.appspot.com',
  messagingSenderId: '571840151772',
};

firebase.initializeApp(config);

const database = firebase.database();

export { firebase, database as default };
