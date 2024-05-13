// Code oder Funktionen, die nur für die Add Task Seite relevant sind!

let contacts = [
    {
        'first-name' : 'Thomas',
        'name' : 'Mueller'
    },
    {
        'first-name' : 'Bernd',
        'name' : 'Schneider'
    },
    {
        'first-name' : 'Michael',
        'name' : 'Ballack'
    },
]


function assignMenu() {
    let content = document.getElementById('contactContainer');
    content.classList.toggle('d-none');
}

function categoryMenu() {
    let content = document.getElementById('categoryContainer');
    content.classList.toggle('d-none');
}

function getContacts() {
    let fullName = document.getElementById('fullName');
    fullName.innerHTML = '';
    
    for (let i = 0; i < contacts.length; i++) {
        const names = contacts[i];
        
        let name = names['name'];
        let firstName = names['first-name'];
        return firstName + name
    }
}

function renderContacts() {
    let content = document.getElementById('listedNames');
    content.innerHTML = '';
}