let users = [];
let privacyPolicy = false;


/**
 * checks the form validation for register new user
 */
function checkFormValidation() {
    let form = document.getElementById('signup_form');
    let username = document.getElementById('register_name');
    let email = document.getElementById('register_email');
    let password = document.getElementById('register_password');
    let checkPassword = document.getElementById('register_check_password');
    let infoText = document.getElementById('info_text');

    infoText.innerHTML = 'Please fill in all fields.'
    infoText.style.visibility = 'hidden';

    if (!username.value || !email.value || !password.value || !checkPassword.value) {
        infoText.style.visibility = 'visible';
    } else if (password.value !== checkPassword.value) {
        infoText.innerHTML = 'Your passwords don\'t match. Please try again.'
        infoText.style.visibility = 'visible';
    } else if (!privacyPolicy) {
        infoText.innerHTML = 'Please accept the privacy policy.'
        infoText.style.visibility = 'visible';
    } else if (form.checkValidity()) {
        infoText.style.visibility = 'hidden';
        addUser(username.value, email.value, password.value);
    }
}


/**
 * adds the new user to backend
 * @param {string} username 
 * @param {string} email 
 * @param {string} password 
 */
async function addUser(username, email, password) {
    let namesArray = username.split(' ');
    let firstName = namesArray[0] ? namesArray[0] : '';
    let lastName = namesArray[1] ? namesArray[1] : '';

    let newUser = {
        'first_name': firstName,
        'last_name': lastName,
        'email': email,
        'password': password
    }
    // let response = await postData('users/', newUser);
    // users.push(response);

    let response = await registerPostData('auth/registration/', newUser);
    showSuccessMessage();
}


/**
 * displays the success message overlay after registration
 */
function showSuccessMessage() {
    let overlay = document.getElementById('overlay');
    let message = document.getElementById('success_message');
    
    overlay.style.transform = 'translateY(0)';
    message.style.transform = 'translateY(0)';

    setTimeout(() => {
        window.location.href = '../index.html?msg=Du hast dich erfolgreich registriert';
    }, 3000);
}


/**
 * check the privacy policy checkbox
 */
function checkPolicy() {
    privacyPolicy = true;
    document.getElementById('check_policy').innerHTML = `
        <svg class="checkbox" onclick="ncheckPolicy()" width="24" height="24" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 11.9658V17.9658C20 19.6227 18.6569 20.9658 17 20.9658H7C5.34315 20.9658 4 19.6227 4 17.9658V7.96582C4 6.30897 5.34315 4.96582 7 4.96582H15" stroke="#2A3647" stroke-width="2" stroke-linecap="round"/>
            <path d="M8 12.9658L12 16.9658L20 5.46582" stroke="#2A3647" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        <p class="i-accept">
            I accept the <a class="privacy-policy-link" href="./privacy_policy.html" target="_blank">Privacy policy</a>
        </p>`;
}


/**
 * uncheck the privacy policy checkbox
 */
function ncheckPolicy() {
    privacyPolicy = false;
    document.getElementById('check_policy').innerHTML = `
        <svg class="checkbox" onclick="checkPolicy()" width="24" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="4.5" y="4" width="16" height="16" rx="3" stroke="#2A3647" stroke-width="2"/>
        </svg>
        <p class="i-accept">
            I accept the <a class="privacy-policy-link" href="./privacy_policy.html" target="_blank">Privacy policy</a>
        </p>`;
}
