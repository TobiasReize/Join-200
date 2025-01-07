const BASE_URL = 'http://127.0.0.1:8000/api/';


/**
 * make a POST-Request with authorization token
 * @param {string} path 
 * @param {object} data 
 * @param {string} token 
 * @returns 
 */
async function postData(path='', data={}, token) {
    // let response = await fetch(BASE_URL + path + '.json', {
    let response = await fetch(BASE_URL + path, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Token ${token}`
        },
        body: JSON.stringify(data)
    });
    return responseToJson = await response.json();
}


/**
 * make a PATCH-Request with authorization token
 * @param {string} path 
 * @param {string} id 
 * @param {object} data 
 * @param {string} token 
 * @returns 
 */
async function patchData(path='', id='', data={}, token) {
    let response = await fetch(BASE_URL + path + '/' + id + '/', {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Token ${token}`
        },
        body: JSON.stringify(data)
    });
    return responseToJson = await response.json();
}


/**
 * make a DELETE-Request with authorization token
 * @param {string} path 
 * @param {string} id 
 * @param {string} token 
 */
async function deleteData(path='', id='', token) {
    let response = await fetch(BASE_URL + path + '/' + id + '/', {
        method: "DELETE",
        headers: {
            "Authorization": `Token ${token}`
        }
    });
}


/**
 * POST-Request for registration (without authorization token)
 * @param {string} path 
 * @param {object} data 
 * @returns 
 */
async function registerPostData(path='', data={}) {
    let response = await fetch(BASE_URL + path, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
    });
    return responseToJson = await response.json();
}


/**
 * load all tasks from backend
 */
async function loadTasks() {
    // let response = await fetch(BASE_URL + 'tasks' + '.json');
    let response = await fetch(BASE_URL + 'tasks/');
    let responseToText = await response.text();
    let responseJson = JSON.parse(responseToText);
    // let responseToJson = await response.json();
    // console.log('responseToJson (Tasks):', responseToJson);

    // let objectKeysArray = Object.keys(responseToJson);
    // for (let i = 0; i < objectKeysArray.length; i++) {
    //     responseToJson[objectKeysArray[i]]['id'] = objectKeysArray[i];
    //     importTasks.push(responseToJson[objectKeysArray[i]]);
    // }
    
    for (let i = 0; i < responseJson.length; i++) {
        importTasks.push(responseJson[i]);
    }
}


/**
 * load all contacts from backend
 */
async function loadContacts() {
    // let response = await fetch(BASE_URL + 'contacts' + '.json');
    let response = await fetch(BASE_URL + 'contacts/');
    let responseToText = await response.text();
    let responseJson = JSON.parse(responseToText);
    // let responseToJson = await response.json();
    // console.log('responseToJson (Contacts):', responseToJson);

    // let objectKeysArray = Object.keys(responseToJson);
    // for (let i = 0; i < objectKeysArray.length; i++) {
    //     responseToJson[objectKeysArray[i]]['id'] = objectKeysArray[i];
    //     importContacts.push(responseToJson[objectKeysArray[i]]);
    // }

    for (let i = 0; i < responseJson.length; i++) {
        importContacts.push(responseJson[i]);
    }
    sortContacts();
}


/**
 * load all users from backend
 */
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
    } catch (e) {
        console.error('Loading error:', e);
    }
}


/**
 * clear the local storage
 */
function clearStorage() {
    localStorage.clear();
}
