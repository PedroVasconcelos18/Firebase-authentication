import { initializeApp } from "firebase/app";

// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  // Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
  firebaseConfig: {
    apiKey: "AIzaSyDuYycHz70VpI38d4U1IUCI8tAC4VIBEXw",
    authDomain: "fir-auth-684b8.firebaseapp.com",
    projectId: "fir-auth-684b8",
    storageBucket: "fir-auth-684b8.appspot.com",
    messagingSenderId: "952698292429",
    appId: "1:952698292429:web:eaaae023444945f15ec184"
}

};

// Initialize Firebase
const app = initializeApp(environment.firebaseConfig);

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
