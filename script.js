// Vorschlag:
// async function init() {
//     await getUsers();   //Zuerst müssen die Users/ Kontakte aus der Datenbank runtergeladen werden
//     await includeHTML();    //Dann muss das Template/ Layout der Seite erstellt werden
//     await getTasks();       //Dann können die Aufgaben geladen werden
// }


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