let users = [];
let checkboxpp = 0;


async function addUser() {
    let registerBtn = document.getElementById('register_btn');
    let userName = document.getElementById('register_name');
    let email = document.getElementById('register_email');
    const emailField = email.value;
    let password = document.getElementById('register_password');
    let cpassword = document.getElementById('cregister_password');

    // Button wird deaktiviert
    registerBtn.disabled = true;
    removeErrorMsg();

    // Überprüfen, ob das @-Zeichen im E-Mail-Feld NICHT vorhanden ist oder vor dem @ kein Zeichen steht
    const atIndex = emailField.indexOf('@');
    const dotIndex = emailField.lastIndexOf('.');
    const domainLength = emailField.length - dotIndex - 1;

    if (!userName.value && !email.value && !password.value && !cpassword.value && !checkboxpp > 0) {
        // Überprüfen, ob alle Felder ausgefüllt sind
        removeDnoneFill();
        registerBtn.disabled = false;
    } else if (atIndex <= 0) {
        // überprüft, on Email ein @-Zeichen hat
        removeDnoneMail();
        registerBtn.disabled = false;
    } else if (dotIndex === -1 || domainLength < 2 || domainLength > 3) {
        // Überprüfen, ob ein Punkt (.) vorhanden ist und mindestens zwei, aber maximal drei Zeichen danach am Ende stehen
        removeDnoneMail();
        registerBtn.disabled = false;
    } else if (password.value !== cpassword.value) {
        // Überprüfen, ob die Passwörter übereinstimmen
        removeDnoneMatch();
        registerBtn.disabled = false;
    } else {
        removeErrorMsg();
        let namesArray = userName.value.split(' ');
        let firstName = namesArray[0] ? namesArray[0] : '';
        let lastName = namesArray[1] ? namesArray[1] : '';

        let newUser = {
            'first_name': firstName,
            'last_name': lastName,
            'email': email.value,
            'password': password.value
        }
    
        // let response = await postData('users/', newUser);
        let response = await postData('auth/registration/', newUser);
        console.log('response (newUser)', response);
        // users.push(response);
    
        // Formular zurücksetzen
        resetRegisterForm(registerBtn, userName, email, password, cpassword);
    
        // Benachrichtigung anzeigen
        // showSuccessMessage();
    }
}


function removeDnoneFill() {
    document.getElementById('fillName').classList.remove('d-none');
    document.getElementById('fillMail').classList.remove('d-none');
    document.getElementById('noMatchPassword').classList.add('d-none');
    document.getElementById('noMatchCpassword').classList.add('d-none');
    document.getElementById('fillPassword').classList.remove('d-none');
    document.getElementById('fillCpassword').classList.remove('d-none');
}


function removeDnoneMatch() {
    document.getElementById('fillPassword').classList.add('d-none');
    document.getElementById('fillCpassword').classList.add('d-none');
    document.getElementById('invalidMail').classList.add('d-none');
    document.getElementById('noMatchPassword').classList.remove('d-none');
    document.getElementById('noMatchCpassword').classList.remove('d-none');
}


function removeDnoneMail() {
    document.getElementById('fillMail').classList.add('d-none');
    document.getElementById('invalidMail').classList.remove('d-none');
}


function removeErrorMsg() {
    document.getElementById('fillName').classList.add('d-none');
    document.getElementById('fillMail').classList.add('d-none');
    document.getElementById('invalidMail').classList.add('d-none');
    document.getElementById('noMatchPassword').classList.add('d-none');
    document.getElementById('noMatchCpassword').classList.add('d-none');
    document.getElementById('fillPassword').classList.add('d-none');
    document.getElementById('fillCpassword').classList.add('d-none');
}


function showSuccessMessage() {
    let overlay = document.getElementById('overlay');
    let messageDiv = document.getElementById('success-message');
    overlay.classList.add('show');
    messageDiv.classList.add('show');

    // Nachricht und Overlay nach 5 Sekunden ausblenden
    setTimeout(() => {
        overlay.classList.remove('show');
        messageDiv.classList.remove('show');
        window.location.href = '../index.html?msg=Du hast dich erfolgreich registriert';
    }, 5000);
}


function resetRegisterForm(registerBtn, userName, email, password, cpassword) {
    userName.value = '';
    email.value = '';
    password.value = '';
    cpassword.value = '';
    registerBtn.disabled = false;
}


function checkPolicy() {
    checkboxpp++;
    document.getElementById('checkPolicy').innerHTML = `
        <svg onclick="ncheckPolicy()" id="checkPolicy" width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 11.9658V17.9658C20 19.6227 18.6569 20.9658 17 20.9658H7C5.34315 20.9658 4 19.6227 4 17.9658V7.96582C4 6.30897 5.34315 4.96582 7 4.96582H15" stroke="#2A3647" stroke-width="2" stroke-linecap="round"/>
            <path d="M8 12.9658L12 16.9658L20 5.46582" stroke="#2A3647" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        I accept the <a href="./privacy_policy.html" target="_blank">Privacy policy</a>`;
}


function ncheckPolicy() {
    checkboxpp--;
    document.getElementById('checkPolicy').innerHTML = `
        <svg onclick="checkPolicy()" id="checkPolicy" width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="4.5" y="4" width="16" height="16" rx="3" stroke="#2A3647" stroke-width="2"/>
        </svg> I accept the <a href="./privacy_policy.html" target="_blank">Privacy policy</a>`;
}