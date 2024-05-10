const BASE_URL = 'Firebase-URL';


async function setItem(path = '', value) {          //Neuer User wird in der Datenbank, mit allen Daten, gespeichert! --> path wird vorab als String deklariert
    let response = await fetch(BASE_URL + path + '.json', {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(value)      //die Daten, die wir hochladen, werden vorher in reinen Text umgewandelt
    });
    let responseToJson = await response.json();
    console.log(responseToJson);
}


async function getItem(path = '') {
    let response = await fetch(BASE_URL + path + '.json');
    let responseToJson = await response.json();
    return responseToJson;
}