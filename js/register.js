let users = [];


async function init() {
    loadUsers();
}


async function loadUsers() {                                 //die aktuellen Daten werden vom Server geladen und in das globale Array 'users' geladen
    try {
        users = await getItem('users');                     //Normalerweise erhält man nur Objekte von der Datenbank (JSON-Objekt), keine Arrays!
        console.log(users);
    } catch (e) {
        console.error('Loading error:', e);                 //Error-handler: Wenn ein Fehler auftritt, wird dieser abgefangen
    }
}


async function addUser() {                                 // Neuer User wird im Server abgespeichert
    let registerBtn = document.getElementById('register_btn');
    let userName = document.getElementById('register_name');
    let email = document.getElementById('register_email');
    let password = document.getElementById('register_password');
    let cpassword = document.getElementById('cregister_password');

    // Button wird deaktiviert
    registerBtn.disabled = true;

    // Überprüfen, ob die Passwörter übereinstimmen
    if (password.value !== cpassword.value) {
        alert('Die Passwörter stimmen nicht überein.');
        registerBtn.disabled = false;
        return;
    }

    // Überprüfen, ob alle Felder ausgefüllt sind
    if (!userName.value || !email.value || !password.value || !checkbox > 0) {
        alert('Bitte füllen Sie alle Felder aus.');        // Nachricht anzeigen, wenn ein Feld leer ist
        registerBtn.disabled = false;                     // Button wieder aktivieren
        return;                                           // Funktion beenden
    }

    // Neuer User wird dem Array hinzugefügt
    users.push({
        Name: userName.value,
        Email: email.value,
        Password: password.value
    });

    // Daten werden in der Datenbank gespeichert
    await setItem('users', users);                         // setItem-Funktion wird mit dem String 'users' und dem users-Array aufgerufen --> Das Array 'users' und die Datenbank müssen immer synchron sein!

    // Formular zurücksetzen
    resetRegisterForm(registerBtn, userName, email, password), cpassword;

    // Benachrichtigung anzeigen
    showSuccessMessage();



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



function resetRegisterForm(registerBtn, userName, email, password) {                  //Register-Form wird wieder geleert und der Button wieder aktiviert
    userName.value = '';
    email.value = '';
    password.value = '';
    registerBtn.disabled = false;
}

/* Bild von der Checkbox austauschen */

let checkbox = 0;

function checkPolicy() {
    checkbox++;
    document.getElementById('checkPolicy').innerHTML = `
    <svg onclick="ncheckPolicy()" id="checkPolicy" width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 11.9658V17.9658C20 19.6227 18.6569 20.9658 17 20.9658H7C5.34315 20.9658 4 19.6227 4 17.9658V7.96582C4 6.30897 5.34315 4.96582 7 4.96582H15" stroke="#2A3647" stroke-width="2" stroke-linecap="round"/>
        <path d="M8 12.9658L12 16.9658L20 5.46582" stroke="#2A3647" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
    I accept the <a href="./privacy_policy.html" target="_blank">Privacy policy</a>
    `;
};

function ncheckPolicy() {
    checkbox--;
    document.getElementById('checkPolicy').innerHTML = `
    <svg onclick="checkPolicy()" id="checkPolicy" width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="4.5" y="4" width="16" height="16" rx="3" stroke="#2A3647" stroke-width="2"/>
    </svg> I accept the <a href="./privacy_policy.html" target="_blank">Privacy policy</a>

    `;
};


/* Test ohne Firebase */

/* let User = [
    {
        "Name": "John Doe",
        "Email": "john.doe@example.com",
        "Password": "1234"
      },
      {
        "Name": "John Smith",
        "Email": "john.smith@example.com",
        "Password": "1234"
    }
]; */