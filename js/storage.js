const BASE_URL = 'https://join-new-bea24-default-rtdb.europe-west1.firebasedatabase.app/';
// const BASE_URL = 'https://join-200-default-rtdb.europe-west1.firebasedatabase.app/';
// const BASE_URL = 'http://127.0.0.1:8000/api/tasks/';

async function setItem(path = '', data) {       //--> besser postData(path = '', data = {})
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

async function patchData(path='', id='', data={}) {
    let response = await fetch(BASE_URL + path + '/' + id + '.json', {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
    });
    return responseToJson = await response.json();
}

async function deleteData(path='', id='', data={}) {
    let response = await fetch(BASE_URL + path + '/' + id + '.json', {
        method: "DELETE"
    });
    return responseToJson = await response.json();
}



// async function addEditSingleUser(id, user={}) {
//     putData(`namen/${id}`, user);
// }

// let users =[];

// async function onloadFunc() {
//     let userResponse = await getAllUsers(path="namen"); //--> z. B. {11: {"name": "Kevin"}, 22: {"name": "Albert"}, ...}
//     let userKeysArray = Object.keys(userResponse);      //--> Array aller keys (des übergebenen Objektes) --> [11, 22, 44]
//     console.log(userKeysArray);

//     for (let i = 0; i < userKeysArray.length; i++) {
//         users.push(
//             {
//                 id : userKeysArray[i],                  //--> i=0: id=11
//                 user : userResponse.userKeysArray[i]    //--> i=0: user={"name": "Kevin"}
//             }
//         )
//     }

//     await addEditSingleUser(users[2].id, users[2].user);
// }


async function loadData(path = '', importArray) {
    let response = await fetch(BASE_URL + path + '.json');
    let responseToJson = await response.json();
    let objectKeysArray = Object.keys(responseToJson);

    for (let i = 0; i < objectKeysArray.length; i++) {
        responseToJson[objectKeysArray[i]]['id'] = objectKeysArray[i];  // fügt das Feld 'id' jedem Objekt hinzu
        importArray.push(responseToJson[objectKeysArray[i]])
    }
}


async function getItem(path = '') {
    let response = await fetch(BASE_URL + path + '.json');
    let responseToJson = await response.json();
    return responseToJson;
}


async function loadContacts(path = '') {
    let response = await fetch(BASE_URL + path + '.json');
    let responseToJson = await response.json();
    let objectKeysArray = Object.keys(responseToJson);

    for (let i = 0; i < objectKeysArray.length; i++) {
        responseToJson[objectKeysArray[i]]['id'] = objectKeysArray[i];  // fügt das Feld 'id' jedem Objekt hinzu
        importContacts.push(responseToJson[objectKeysArray[i]])
    }
    sortContacts();
}