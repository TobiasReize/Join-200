let users = [];


async function initRegister() {
    loadUsers();
}


async function loadUsers() {
    try {
        users = await getItem('users', users);
    } catch (e) {
        console.error('Loading error:', e);
    }
}


async function addUser() {
    let registerBtn = document.getElementById('register_btn');
    let userName = document.getElementById('register_name');
    let email = document.getElementById('register_email');
    const emailField = email.value;
    let password = document.getElementById('register_password');
    let cpassword = document.getElementById('cregister_password');

    // Button wird deaktiviert
    registerBtn.disabled = true;

    // Überprüfen, ob das @-Zeichen im E-Mail-Feld NICHT vorhanden ist oder vor dem @ kein Zeichen steht
    const atIndex = emailField.indexOf('@');
    if (atIndex <= 0) {
        await removeDnoneMail();
        registerBtn.disabled = false;
        return;
    };

    // Überprüfen, ob ein Punkt (.) vorhanden ist und mindestens zwei, aber maximal drei Zeichen danach am Ende stehen
    const dotIndex = emailField.lastIndexOf('.');
    const domainLength = emailField.length - dotIndex - 1;
    if (dotIndex === -1 || domainLength < 2 || domainLength > 3) {
        await removeDnoneMail();
        registerBtn.disabled = false;
        return;
    };

    // Überprüfen, ob die Passwörter übereinstimmen
    if (password.value !== cpassword.value) {
        await removeDnoneMatch();
        registerBtn.disabled = false;
        return;
    }

    // Überprüfen, ob alle Felder ausgefüllt sind
    if (!userName.value || !email.value || !password.value || !checkboxpp > 0) {
        await removeDnoneFill();
        registerBtn.disabled = false;
    }

    // Neuer User wird dem Array hinzugefügt
    users.push({
        Name: userName.value,
        Email: email.value,
        Password: password.value
    });

    // Daten werden in der Datenbank gespeichert
    await setItem('users', users);

    // Formular zurücksetzen
    resetRegisterForm(registerBtn, userName, email, password), cpassword;

    // Benachrichtigung anzeigen
    showSuccessMessage();
}


async function removeDnoneFill() {
    document.getElementById('fillName').classList.remove('d-none');
    document.getElementById('fillMail').classList.remove('d-none');
    document.getElementById('noMatchPassword').classList.add('d-none');
    document.getElementById('noMatchCpassword').classList.add('d-none');
    document.getElementById('fillPassword').classList.remove('d-none');
    document.getElementById('fillCpassword').classList.remove('d-none');
}


async function removeDnoneMatch() {
    document.getElementById('fillPassword').classList.add('d-none');
    document.getElementById('fillCpassword').classList.add('d-none');
    document.getElementById('invalidMail').classList.add('d-none');
    document.getElementById('noMatchPassword').classList.remove('d-none');
    document.getElementById('noMatchCpassword').classList.remove('d-none');
}


async function removeDnoneMail() {
    document.getElementById('fillMail').classList.add('d-none');
    document.getElementById('invalidMail').classList.remove('d-none');
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


function resetRegisterForm(registerBtn, userName, email, password) {
    userName.value = '';
    email.value = '';
    password.value = '';
    registerBtn.disabled = false;
}

/* Bild von der Checkbox austauschen */
let checkboxpp = 0;


function checkPolicy() {
    checkboxpp++;
    document.getElementById('checkPolicy').innerHTML = `
    <svg onclick="ncheckPolicy()" id="checkPolicy" width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 11.9658V17.9658C20 19.6227 18.6569 20.9658 17 20.9658H7C5.34315 20.9658 4 19.6227 4 17.9658V7.96582C4 6.30897 5.34315 4.96582 7 4.96582H15" stroke="#2A3647" stroke-width="2" stroke-linecap="round"/>
        <path d="M8 12.9658L12 16.9658L20 5.46582" stroke="#2A3647" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
    I accept the <a href="./privacy_policy.html" target="_blank">Privacy policy</a>
    `;
}


function ncheckPolicy() {
    checkboxpp--;
    document.getElementById('checkPolicy').innerHTML = `
    <svg onclick="checkPolicy()" id="checkPolicy" width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="4.5" y="4" width="16" height="16" rx="3" stroke="#2A3647" stroke-width="2"/>
    </svg> I accept the <a href="./privacy_policy.html" target="_blank">Privacy policy</a>
    `;
}