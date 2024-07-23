const BASE_URL = 'https://join-15736-default-rtdb.europe-west1.firebasedatabase.app/';

async function setItem(path = '', value) {          //Neuer User wird in der Datenbank, mit allen Daten, gespeichert! --> path wird vorab als String deklariert
    let response = await fetch(BASE_URL + path + '.json', {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(value)      //die Daten, die wir hochladen, werden vorher in reinen Text umgewandelt
    });
    let responseToJson = await response.json();
}


async function loadData(path = '', importArray) {
    let response = await fetch(BASE_URL + path + '.json');
    let responseToJson = await response.json();
    importArray =  importArray.push(...responseToJson); // Daten aus der Datenbank werden in Array gespeichert
}


async function getItem(path = '') {
    let response = await fetch(BASE_URL + path + '.json');
    let responseToJson = await response.json();
    return responseToJson;
}


async function loadContacts(path = '') {
    let response = await fetch(BASE_URL + path + '.json');
    let responseToJson = await response.json();

    // Daten aus der Datenbank werden in Array gespeichert, null-Werte werden durch leere Strings ersetzt
    importContacts = responseToJson.map(contact => ({
        firstName: contact.firstName || '',
        lastName: contact.lastName || '',
        checked: contact.checked || false,
        color: contact.color || '',
        mail: contact.mail || '',
        tel: contact.tel || ''
    })); 
    sortContacts();
    return responseToJson;
}