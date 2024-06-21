let importContacts = [];
let importTasks = [];
let importCategories = [];
const initialsArray = [];


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

function addInitials(initials) {
    initialsArray.push(initials);
    document.getElementById('user-short').innerHTML = initialsArray.join(', ');
};

function logOut() {
    window.location.href = '../index.html';
};