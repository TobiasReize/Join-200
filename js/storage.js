const BASE_URL = 'http://127.0.0.1:8000/api/';
// const BASE_URL = 'https://join-new-bea24-default-rtdb.europe-west1.firebasedatabase.app/';


async function setItem(path = '', data) {
    let response = await fetch(BASE_URL + path + '.json', {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
    });
    return responseToJson = await response.json();
}


async function postData(path='', data={}) {
    // let response = await fetch(BASE_URL + path + '.json', {
    let response = await fetch(BASE_URL + path, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
    });
    return responseToJson = await response.json();
}


async function patchData(path='', id='', data={}) {
    let response = await fetch(BASE_URL + path + '/' + id + '/', {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
    });
    return responseToJson = await response.json();
}


async function deleteData(path='', id='') {
    let response = await fetch(BASE_URL + path + '/' + id + '/', {
        method: "DELETE"
    });
}


async function loadTasks() {
    // let response = await fetch(BASE_URL + 'tasks' + '.json');
    let response = await fetch(BASE_URL + 'tasks/');
    // let responseToJson = await response.json();
    // console.log('responseToJson (Tasks):', responseToJson);
    let responseToText = await response.text();
    let responseJson = JSON.parse(responseToText);
    // let objectKeysArray = Object.keys(responseToJson);
    // for (let i = 0; i < objectKeysArray.length; i++) {
    //     responseToJson[objectKeysArray[i]]['id'] = objectKeysArray[i];
    //     importTasks.push(responseToJson[objectKeysArray[i]]);
    // }
    for (let i = 0; i < responseJson.length; i++) {
        importTasks.push(responseJson[i]);
    }
    console.log('importTasks:', importTasks);
}


async function loadContacts() {
    // let response = await fetch(BASE_URL + 'contacts' + '.json');
    let response = await fetch(BASE_URL + 'contacts/');
    // let responseToJson = await response.json();
    // console.log('responseToJson (Contacts):', responseToJson);
    let responseToText = await response.text();
    let responseJson = JSON.parse(responseToText);
    // let objectKeysArray = Object.keys(responseToJson);
    // for (let i = 0; i < objectKeysArray.length; i++) {
    //     responseToJson[objectKeysArray[i]]['id'] = objectKeysArray[i];
    //     importContacts.push(responseToJson[objectKeysArray[i]]);
    // }

    for (let i = 0; i < responseJson.length; i++) {
        importContacts.push(responseJson[i]);
    }
    sortContacts();
    console.log('importContacts:', importContacts);
}


async function loadUsers() {
    try {
        // let response = await fetch(BASE_URL + 'users' + '.json');
        let response = await fetch(BASE_URL + 'auth/profiles/');
        // let responseToJson = await response.json();
        // let objectKeysArray = Object.keys(responseToJson);
        let responseToText = await response.text();
        let responseJson = JSON.parse(responseToText);

        // for (let i = 0; i < objectKeysArray.length; i++) {
        //     responseToJson[objectKeysArray[i]]['id'] = objectKeysArray[i];
        //     users.push(responseToJson[objectKeysArray[i]]);
        // }
        for (let i = 0; i < responseJson.length; i++) {
            users.push(responseJson[i]);
        }
        console.log('users: ', users);
    } catch (e) {
        console.error('Loading error:', e);
    }
}


function clearStorage() {
    localStorage.clear();
}
