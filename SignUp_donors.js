import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getDatabase, set, ref } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDwv6TIgaYBMrgCfymW0WjwX4s0RQc2EeM",
    authDomain: "login-signup-test1.firebaseapp.com",
    databaseURL: "https://login-signup-test1-default-rtdb.firebaseio.com",
    projectId: "login-signup-test1",
    storageBucket: "login-signup-test1.appspot.com",
    messagingSenderId: "1001356586274",
    appId: "1:1001356586274:web:e699e605df8ee382a5897b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const auth = getAuth();

// Declare the signup variable

const signUp_donors = document.getElementById('signUp_donors')


//signUp_donors event listener
signUp_donors.addEventListener('click', (e) => {
    var email = document.getElementById('email_donors').value;
    var password = document.getElementById('password_donors').value;
    var username = document.getElementById('username_donors').value;

    // Check if the username starts with "admin"
    if (username.toLowerCase().startsWith('donors')) {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                set(ref(database, 'donors/' + user.uid), {
                    username: username,
                    email: email,
                    password: password
                })
                alert('Donor created!');
                 window.location.href = `donors-HomePage.html?email=${email}`;
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                alert(errorMessage);
            });
    } else {
        alert('Only users with a username starting with "donors" can sign up as donors.');
    }
});
