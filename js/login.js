
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
        console.warn('User nicht gefunden!');
        resetLoginForm(loginBtn, email, password);
    }
}



function resetLoginForm(loginBtn, email, password) {    //Login-Form wird wieder geleert und der Button wieder aktiviert
    email.value = '';
    password.value = '';
    loginBtn.disabled = false;
}