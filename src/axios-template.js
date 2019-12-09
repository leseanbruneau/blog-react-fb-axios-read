import axios from 'axios'

// Couple notes
//
// 1.  Axios will need a baseURL path to know where to get the data
// 2.  baseURL will be defined in src/axios-conn.js 
// 3.  For initial set up, copy this file to src directory and name axios-conn.js
// 4.  Add Firebase URL to baseURL variable in axios-conn.js 
// 5.  axios-conn.js is in .gitignore file so Firebase URL path is not checked into code repository
//

// Firebase setup 
// 
// 1. Login with gmail account to https://firebase.google.com
// 2. In Firebase, go to main console window
// 3. Create new Firebase project
// 4. In new Firebase project, create a Firebase Realtime Database
// 5. In new Firebase Realtime Database, click "Rules" tab and change ".read" permission to true
// 6. In new Firebase Realtime Database, click "Data" tab and create a calendarExample object
// 7. In calendarExample object, upload JSON file with 2020 schedule  

const instance = axios.create({
  baseURL: ''
});

export default instance;