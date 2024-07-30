document.addEventListener('DOMContentLoaded', function () {
    // Smooth scrolling for internal links
    document.querySelectorAll('a.nav-link').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
        });
      });
    });
  
    // Contact form submission
    document.getElementById('contact-form').addEventListener('submit', function (e) {
      e.preventDefault();
      // Implement email sending via EmailJS or another service
      alert('Your message has been sent!');
    });
  });
 // Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDMFeB5SX_5fn2wrQjfX9J-Jp48tv3WrBs",
  authDomain: "datax-87c9e.firebaseapp.com",
  projectId: "datax-87c9e",
  storageBucket: "datax-87c9e.appspot.com",
  messagingSenderId: "622141312131",
  appId: "1:622141312131:web:1446a6defac5db03331fb6",
  measurementId: "G-BQNC73PV9W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app); 