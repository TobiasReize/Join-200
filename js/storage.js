// const BASE_URL = 'https://join-200-default-rtdb.europe-west1.firebasedatabase.app/';
const BASE_URL = 'https://join-new-bea24-default-rtdb.europe-west1.firebasedatabase.app/';

async function setItem(path = '', data) {
    let response = await fetch(BASE_URL + path + '.json', {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
    });
    // let responseToJson = await response.json();
}

// Neu:
async function postData(path='', data={}) {     // z. B. path='users'
    let response = await fetch(BASE_URL + path + '.json', {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
    });
    return responseToJson = await response.json();    
}

async function putData(path='', id='', data={}) {  // z. B. path='users/{id}' & data= vollständiges Objekt
    let response = await fetch(BASE_URL + path + '/' + id + '.json', {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
    });
    return responseToJson = await response.json();
}

// async function patchData(path='', id='', data={}) {
//     let response = await fetch(BASE_URL + path + '/' + id + '.json', {
//         method: "PATCH",
//         headers: {
//             "Content-Type": "application/json",
//         },
//         body: JSON.stringify(data)
//     });
//     return responseToJson = await response.json();
// }

async function deleteData(path='', id='') {
    let response = await fetch(BASE_URL + path + '/' + id + '.json', {
        method: "DELETE"
    });
    return responseToJson = await response.json();
}


async function loadTasks() {
    let response = await fetch(BASE_URL + 'tasks' + '.json');
    let responseToJson = await response.json();
    let objectKeysArray = Object.keys(responseToJson);
    console.log('importTasks:', responseToJson);

    for (let i = 0; i < objectKeysArray.length; i++) {
        responseToJson[objectKeysArray[i]]['id'] = objectKeysArray[i];  // fügt das Feld 'id' jedem Objekt hinzu
        importTasks.push(responseToJson[objectKeysArray[i]]);
    }
}


async function getItem(path = '') {
    let response = await fetch(BASE_URL + path + '.json');
    let responseToJson = await response.json();
    return responseToJson;
}


async function loadContacts() {
    let response = await fetch(BASE_URL + 'contacts' + '.json');
    let responseToJson = await response.json();
    let objectKeysArray = Object.keys(responseToJson);
    console.log('importContacts:', responseToJson);

    for (let i = 0; i < objectKeysArray.length; i++) {
        responseToJson[objectKeysArray[i]]['id'] = objectKeysArray[i];  // fügt das Feld 'id' jedem Objekt hinzu
        importContacts.push(responseToJson[objectKeysArray[i]]);
    }
    sortContacts();
}