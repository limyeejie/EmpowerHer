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

const signUp_sisters = document.getElementById('signUp_sisters')


//signUp_sisters event listener
signUp_sisters.addEventListener('click', (e) => {
    var email = document.getElementById('email_sisters').value;
    var password = document.getElementById('password_sisters').value;
    var username = document.getElementById('username_sisters').value;

    // Check if the username starts with "admin"
    if (username.toLowerCase().startsWith('sisters')) {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                set(ref(database, 'sisters/' + user.uid), {
                    username: username,
                    email: email,
                    password: password
                })
                alert('Sister created!');
                 window.location.href = `sisters-HomePage.html?email=${email}`;
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                alert(errorMessage);
            });
    } else {
        alert('Only users with a username starting with "sisters" can sign up as sisters.'); 
    }
});
