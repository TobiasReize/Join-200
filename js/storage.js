const BASE_URL = 'https://join-200-default-rtdb.europe-west1.firebasedatabase.app/';

async function setItem(path = '', value) {          //Neuer User wird in der Datenbank, mit allen Daten, gespeichert! --> path wird vorab als String deklariert
    let response = await fetch(BASE_URL + path + '.json', {
        //POST wird zum Erstellen neuer Ressourcen verwendet
        //PUT wird verwendet, um eine Ressource vollständig zu ersetzen
        //PATCH wird verwendet, um Teile einer Ressource zu aktualisieren
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(value)      //die Daten, die wir hochladen, werden vorher in reinen Text umgewandelt
    });
    let responseToJson = await response.json();
    console.log(responseToJson);
}

async function getItem(path = '') {     //ladet die User-Daten aus der Datenbank herunter und übergibt diese
    let response = await fetch(BASE_URL + path + '.json');
    let responseToJson = await response.json();
    return responseToJson;
}

async function patchItem(path = '', value) {          //Neuer User wird in der Datenbank, mit allen Daten, gespeichert! --> path wird vorab als String deklariert
    let response = await fetch(BASE_URL + path + '.json', {
        //POST wird zum Erstellen neuer Ressourcen verwendet
        //PUT wird verwendet, um eine Ressource vollständig zu ersetzen
        //PATCH wird verwendet, um Teile einer Ressource zu aktualisieren
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(value)      //die Daten, die wir hochladen, werden vorher in reinen Text umgewandelt
    });
    let responseToJson = await response.json();
    console.log(responseToJson);
}

async function postItem(path = '', value) {          //Neuer User wird in der Datenbank, mit allen Daten, gespeichert! --> path wird vorab als String deklariert
    let response = await fetch(BASE_URL + path + '.json', {
        //POST wird zum Erstellen neuer Ressourcen verwendet
        //PUT wird verwendet, um eine Ressource vollständig zu ersetzen
        //PATCH wird verwendet, um Teile einer Ressource zu aktualisieren
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(value)      //die Daten, die wir hochladen, werden vorher in reinen Text umgewandelt
    });
    let responseToJson = await response.json();
    console.log(responseToJson);
}