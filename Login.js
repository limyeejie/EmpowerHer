// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getDatabase, ref, update } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

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

// Declare the login variable
const login_donors = document.getElementById('login_donors');
const login_sisters = document.getElementById('login_sisters');

login_sisters.addEventListener('click', (e) => {
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;

            const dt = new Date();
            update(ref(database, 'sisters/' + user.uid), {
                last_login: dt,
            });
            
            // Redirect to home.html
            window.location.href = `sisters-HomePage.html?email=${email}`;

        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;

            alert(errorMessage);
        });
});

login_donors.addEventListener('click', (e) => {
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;

            const dt = new Date();
            update(ref(database, 'donors/' + user.uid), {
                last_login: dt,
            });
            
            // Redirect to home_admin.html
            window.location.href = `donors-HomePage.html?email=${email}`;

        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;

            alert(errorMessage);
        });
});
