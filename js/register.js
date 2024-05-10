let users = [];


async function init(){
    loadUsers();
}


async function loadUsers(){                                 //die aktuellen Daten werden vom Server geladen und in das globale Array 'users' geladen
    try {
        users = await getItem('users');
        console.log(users);
    } catch(e){
        console.error('Loading error:', e);                 //Error-handler: Wenn ein Fehler auftritt, wird dieser abgefangen
    }
}


async function addUser() {                                 //Neuer User wird im Server abgespeichert
    let registerBtn = document.getElementById('register_btn');
    let userName = document.getElementById('register_name');
    let email = document.getElementById('register_email');
    let password = document.getElementById('register_password');
    registerBtn.disabled = true;                            //Button wird deaktiviert
    users.push({
            name: userName.value,
            email: email.value,
            password: password.value
    });
    await setItem('users', users);          //setItem-Funktion wird mit dem String 'users' und dem users-Array aufgerufen --> Das Array 'users' und die Datenbank müssen immer synchron sein!
    resetRegisterForm(registerBtn, userName, email, password);
    window.location.href='../index.html?msg=Du hast dich erfolgreich registriert';      //Weiterleitung zu Login-Seite (index.html) + Nachricht anzeigen: "Erfolgreiche Registrierung"
}


function resetRegisterForm(registerBtn, userName, email, password) {                  //Register-Form wird wieder geleert und der Button wieder aktiviert
    userName.value = '';
    email.value = '';
    password.value = '';
    registerBtn.disabled = false;
}