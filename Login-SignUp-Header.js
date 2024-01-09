//login/sign up
/*const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const signUpLink = document.querySelector('.signUp-link');
const btnPopUp = document.querySelector('.btnLogin');
const iconClose = document.querySelector('.icon-close');

if (signUpLink && loginLink && btnPopUp && iconClose) {
    signUpLink.addEventListener('click', ()=> {
        wrapper.classList.add('active');
    });
    loginLink.addEventListener('click', ()=> {
        wrapper.classList.remove('active');
    });
    btnPopUp.addEventListener('click', ()=> {
        wrapper.classList.add('active-popup');
        //centerPopup();
    });
    iconClose.addEventListener('click', ()=> {
        wrapper.classList.remove('active-popup');
    });
}*/

//login/sign up
const wrapper = document.querySelector('.wrapper');
const signUpLink = document.querySelector('.signUp-link');
const loginLink = document.querySelector('.login-link');

if (signUpLink && loginLink && wrapper) {
    signUpLink.addEventListener('click', () => {
        wrapper.classList.add('active');
    });

    loginLink.addEventListener('click', () => {
        wrapper.classList.remove('active');
    });

    wrapper.addEventListener('transitionend', () => {
        const signUpForm = wrapper.querySelector('.form-box.signUp');
        if (wrapper.classList.contains('active')) {
            signUpForm.style.transition = 'transform 0.18s ease';
            signUpForm.style.transform = 'translateX(0)';
        } else {
            signUpForm.style.transition = 'none';
            signUpForm.style.transform = 'translateX(400px)';
        }
    });
}

//validation for confirm password
function validatePassword() {
    var password = document.getElementById("password2");
    var confirmPassword = document.getElementById("confirmpassword2");

    if (password.value != confirmPassword.value) {
        confirmPassword.setCustomValidity("Passwords do not match");
    } else {
        confirmPassword.setCustomValidity("");
    }
}

document.getElementById("password2").addEventListener("change", validatePassword);
document.getElementById("confirmpassword2").addEventListener("keyup", validatePassword);

// JavaScript to handle radio button behavior
const radioOptionsSignUp = document.querySelectorAll('.radio-option');

radioOptionsSignUp.forEach(option => {
    option.addEventListener('click', () => {
        const radioInput = option.querySelector('input[type="radio"]');
        radioInput.checked = true;

        // Uncheck other radio options
        radioOptionsSignUp.forEach(otherOption => {
            if (otherOption !== option) {
                const otherRadioInput = otherOption.querySelector('input[type="radio"]');
                otherRadioInput.checked = false;
            }
        });
    });
});

//validation for donor or sister button
function validateRadio() {
    var signUpRadios = document.getElementsByName("userTypeSignUp");
    var loginRadios = document.getElementsByName("userTypeLogin");
    var formValid = false;

    var i = 0;
    while (!formValid && i < signUpRadios.length) {
        if (signUpRadios[i].checked) formValid = true;
        i++;        
    }

    i = 0;
    while (!formValid && i < loginRadios.length) {
        if (loginRadios[i].checked) formValid = true;
        i++;        
    }

    if (!formValid) {
        alert("Please select one of the options.");
        return false; // Prevent form submission if validation fails
    }
    return true; // Allow form submission if validation passes
}

document.getElementById("form-signUp").addEventListener("submit", validateRadio);
document.getElementById("form-login").addEventListener("submit", validateRadio);

//when login, user select what option, and redirect to that page
function handleLogin() {
    var userType = document.querySelector('input[name="userTypeLogin"]:checked').value;
    if (userType == 'donor') {
        window.location.href = 'donors-Homepage.html';
    } else if(userType == 'sistersCommunity') {
        window.location.href = 'sisters-Home-SistersCommunity.html';
    }

    // Prevent the form from submitting (for demonstration purposes)
    return false;
}

//this is the same for sign up
function handleSignUp() {
    var userType = document.querySelector('input[name="userTypeSignUp"]:checked').value;
    if (userType == 'donor') {
        window.location.href = 'donors-Homepage.html';
    } else if(userType == 'sistersCommunity') {
        window.location.href = 'sisters-Home-SistersCommunity.html';
    }

    // Prevent the form from submitting (for demonstration purposes)
    return false;
}
