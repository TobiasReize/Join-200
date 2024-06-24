let importContacts = [];
let importTasks = [];
let importCategories = [];
let initialsArray = [];



async function init() {
    includeHTML();
    await loadContacts('contacts', importContacts); // Kontakte von Datenbank laden
    await loadData('tasks', importTasks); // Tasks von Datenbank laden
    await loadData('categories', importCategories); // Tasks von Datenbank laden
}


async function includeHTML() {
    let includeElements = document.querySelectorAll('[w3-include-html]');
    for (let i = 0; i < includeElements.length; i++) {
        const element = includeElements[i];
        file = element.getAttribute("w3-include-html");
        let resp = await fetch(file);
        if (resp.ok) {
            element.innerHTML = await resp.text();
        } else {
            element.innerHTML = 'Page not found';
        }
    }
    displayInitials();
  }

// Sortiert die Kontakte nach dem Vornamen
function sortContacts() {
    importContacts.sort((a, b) => {
        if (a.firstName.toLowerCase() < b.firstName.toLowerCase()) {
            return -1;
        }
        if (a.firstName.toLowerCase() > b.firstName.toLowerCase()) {
            return 1;
        }
        return 0;
    });
}

var storedInitials = localStorage.getItem('initialsArray');
initialsArray = storedInitials ? JSON.parse(storedInitials) : [];

function addInitials(initials) {
    initialsArray = [];
    initialsArray.push(initials);
    document.getElementById('user-short').innerHTML = initialsArray.join('');

    // Speichern im Local Storage
    localStorage.setItem('initialsArray', JSON.stringify(initialsArray));
};

function displayInitials() {
    document.getElementById('user-short').innerHTML = initialsArray.join('');
};

function logOut() {
    localStorage.removeItem('initialsArray');
    window.location.href = '../index.html';
};