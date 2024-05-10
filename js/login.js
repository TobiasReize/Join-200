//Weiterleitung von register.html + Nachricht anzeigen: "Erfolgreiche Registrierung"
const urlParams = new URLSearchParams(window.location.search);      //Query Parameter 'msg' auslesen
const msg = urlParams.get('msg');
let msgBox = document.getElementById('msg_box');

if (msg) {
    msgBox.innerHTML = msg;
}


function login() {              // Funktion zum Einloggen: Durchsucht das users-Array nach übereinstimmenden Daten und leitet dann weiter
    let loginBtn = document.getElementById('login_btn');
    let email = document.getElementById('login_email');
    let password = document.getElementById('login_password');
    loginBtn.disabled = true;   //Button wird deaktiviert
    let user = users.find(u => u.email == email.value && u.password == password.value);     //Sucht in dem (Datenbank-)Array 'users' nach übereinstimmenden Daten von Email und Passwort und gibt diese zurück!
    console.log(user);
    if (user) {
        console.log('User gefunden!');
        resetLoginForm(loginBtn, email, password);
        window.location.href='./html/summary.html';              // Weiterleitung zu Seite summary.html
    } else {
        console.warn('User nicht gefunden!');
        resetLoginForm(loginBtn, email, password);
    }
}


function redirectRegister() {                       //Weiterleitung zur Registrierungsseite bei Klick auf "Sign up"-Button
    window.location.href='./html/register.html';
}


function resetLoginForm(loginBtn, email, password) {    //Login-Form wird wieder geleert und der Button wieder aktiviert
    email.value = '';
    password.value = '';
    loginBtn.disabled = false;
}