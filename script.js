let importContacts = [];
let importTasks = [];
let importCategories = [];


async function init() {
    includeHTML();
    await loadData('contacts', importContacts); // Kontakte von Datenbank laden
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