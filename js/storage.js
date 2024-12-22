const BASE_URL = 'http://127.0.0.1:8000/api/';


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
    let responseToText = await response.text();
    let responseJson = JSON.parse(responseToText);
    for (let i = 0; i < responseJson.length; i++) {
        importTasks.push(responseJson[i]);
    }
    // console.log('importTasks:', importTasks);
}


async function loadContacts() {
    // let response = await fetch(BASE_URL + 'contacts' + '.json');
    let response = await fetch(BASE_URL + 'contacts/');
    let responseToText = await response.text();
    let responseJson = JSON.parse(responseToText);
    for (let i = 0; i < responseJson.length; i++) {
        importContacts.push(responseJson[i]);
    }
    sortContacts();
    // console.log('importContacts:', importContacts);
}


async function getItem(path = '') {
    let response = await fetch(BASE_URL + path + '.json');
    let responseToJson = await response.json();
    return responseToJson;
}