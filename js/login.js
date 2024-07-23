
async function login() {
    let loginBtn = document.getElementById('login_btn');
    let email = document.getElementById('login_email');
    let password = document.getElementById('login_password');
    loginBtn.disabled = true;   // Button wird deaktiviert

    let user = await users.find(u => u.Email == email.value && u.Password == password.value);     // Sucht im (Datenbank-)Array 'users' nach übereinstimmenden Daten von Email und Passwort und gibt diese zurück!
    console.log(user);

    if (user) {
        console.log('User gefunden!');
        resetLoginForm(loginBtn, email, password);

        // Name des Benutzers aus dem user-Objekt extrahieren
        let userName = user.Name; // Anpassen, falls der Schlüssel anders heißt

        // URL mit dem Namen als Query-Parameter erstellen
        let url = './html/summary.html?name=' + encodeURIComponent(userName);

        // Weiterleitung zur Seite summary.html mit dem Namen als Query-Parameter
        window.location.href = url;
    } else {
        document.getElementById('userNotFoundMail').classList.remove('d-none');
        document.getElementById('userNotFoundPassword').classList.remove('d-none');
        resetLoginForm(loginBtn, email, password);
        return;
    }
}



function resetLoginForm(loginBtn, email, password) {    //Login-Form wird wieder geleert und der Button wieder aktiviert
    email.value = '';
    password.value = '';
    loginBtn.disabled = false;
}

window.addEventListener('load', () => {
    const logo = document.getElementById('logo');
    const body = document.getElementById('body');
    const loginContent = document.getElementById('login-content');

    setTimeout(() => {
        logo.classList.add('shrink-and-move');
        body.classList.add('change-background');
    }, 200);

    setTimeout(() => {
        logo.classList.remove('shrink-and-move');
        logo.classList.add('logo-final');
        body.classList.remove('change-background');
    }, 2500);  // Zeit anpassen, je nachdem wie lange die Effekte dauern sollen

    setTimeout(() => {
        loginContent.style.display = 'block';
    }, 2500);
});


function addGuestName() {
    location.href = './html/summary.html?name=guest';
}

let checkbox = 0;

function remenberMe() {
    checkbox++;
    document.getElementById('remenberMe').innerHTML = `
<svg onclick="nremenberMe()" width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20 11.9658V17.9658C20 19.6227 18.6569 20.9658 17 20.9658H7C5.34315 20.9658 4 19.6227 4 17.9658V7.96582C4 6.30897 5.34315 4.96582 7 4.96582H15" stroke="#2A3647" stroke-width="2" stroke-linecap="round"/>
<path d="M8 12.9658L12 16.9658L20 5.46582" stroke="#2A3647" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
Remenber me
`;
};

function nremenberMe() {
    checkbox--;
    document.getElementById('remenberMe').innerHTML = `
<svg onclick="remenberMe()" width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="4.5" y="4" width="16" height="16" rx="3" stroke="#2A3647" stroke-width="2"/>
</svg>
Remenber me

`;
};