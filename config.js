const { initializeApp } = require("firebase/app");
require("dotenv").config();
const { getAuth } = require("firebase/auth");

console.log(process.env.API_KEY)

const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTHDOMAIN,
  projectId: process.env.PROJECTID,
  storageBucket: process.env.STORAGEBUCKET,
  messagingSenderId: process.env.MESSAGINGSENDERID,
  appId: process.env.APPID,
  measurementId: process.env.MEASUREMENTID,
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

module.exports = {
    auth
}
