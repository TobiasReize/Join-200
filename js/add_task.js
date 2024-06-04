// Code oder Funktionen, die nur für die Add Task Seite relevant sind!

let priority = [
    {
        'urgent' : false,
        'medium' : true,
        'low' : false
    }
]

let subtasks = [];

let tasks = [ {
    'columnID' : 'ToDo', // Standartmäßig in ToDo 
    'title' : '',
    'description' : '',
    'contact' : [
        {
            'firstName' : '',
            'lastName' : '',
            'color' : '',
            'tel' : '',
            'mail' : '',
            'checked' : false
        }
    ],

    'date' : '',
    'priorities' : [
        {
            'urgent' : false,
            'medium' : false,
            'low' : false
        }
    ],
    
    'categories' : '',
    'subtasks' : [
        {
            'subtaskTitle' : '',
            'status' : 'open'
        }
    ],
    
}];

async function initAddtask() {
    await init();
}

async function loadData(path = '', importArray) {
    let response = await fetch(BASE_URL + path + '.json');
    let responseToJson = await response.json();
    importArray =  importArray.push(...responseToJson); // Daten aus der Datenbank werden in Array gespeichert
    return responseToJson;
}

// Aufklappen des Assignet Menu
function assignMenu() {
    let content = document.getElementById('contact_container');
    let arrow = document.getElementById('arrow_drop_down_contact');
    content.classList.toggle('d-none');
    arrow.classList.toggle('arrow-drop-down')
}

// Aufklappen des Category Menu
function categoryMenu() {
    let content = document.getElementById('category_container');
    let arrow = document.getElementById('arrow_drop_down_category');
    content.classList.toggle('d-none');
    arrow.classList.toggle('arrow-drop-down')
}

// Rendern der Kontakte in das aufgeklappte Assignet Menu
function getContacts() {
    let content = document.getElementById('list_options');
    content.innerHTML = '';

    for (let i = 0; i < importContacts.length; i++) {
        content.innerHTML += renderContacts(i);
    }
    renderCheckBox()
}

function renderContacts(i) {
    return /* html */ `
        <li id="listed_names${i}" class="option" onclick="changeCheckboxContacts(${i})">
            <div class="short-and-fullname">
                <div id="short_name${i}" class="short-name" style="background-color: ${importContacts[i]['color']}">${importContacts[i]['firstName'].charAt(0) + importContacts[i]['lastName'].charAt(0)}</div>
                <span id="full_name">${importContacts[i]['firstName'] + ' ' + importContacts[i]['lastName']}</span>
            </div>
            <input class="d-none" id="checkbox_contacts${i}" type="checkbox">
            <svg class="d-none" id="img_checkbox_contacts${i}" width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="4" y="4.96582" width="16" height="16" rx="3" stroke="#2A3647" stroke-width="2"/>
            </svg>
            <svg class="d-none white-checkbox" id="img_checkbox_checked_contacts${i}" width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 11.9658V17.9658C20 19.6227 18.6569 20.9658 17 20.9658H7C5.34315 20.9658 4 19.6227 4 17.9658V7.96582C4 6.30897 5.34315 4.96582 7 4.96582H15" stroke="#2A3647" stroke-width="2" stroke-linecap="round"/>
                <path d="M8 12.9658L12 16.9658L20 5.46582" stroke="#2A3647" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </li>
    `;
}

// Erstellen IMG Checkbox
// richtige input type=checkbox ist ausgeblendet und überprüft ob true oder false und setzt so das IMG
function renderCheckBox() {
    for (let i = 0; i < importContacts.length; i++) {
        let imgUnchecked = document.getElementById(`img_checkbox_contacts${i}`);
        let imgChecked = document.getElementById(`img_checkbox_checked_contacts${i}`);
        let checkbox = document.getElementById(`checkbox_contacts${i}`);
        const contact = importContacts[i];

        // Wenn bei der Suche "imgUnchecked", ... gerendert sind = null und es verlässte das Statement, SONST setze true oder false und render Ausgewählten Kontakt
        if (imgUnchecked === null ) {
            break
        } else {
            if (contact['checked'] == true) {
                checkbox.checked = true;
                imgChecked.classList.remove('d-none')
                imgUnchecked.classList.add('d-none')
            } else {
                checkbox.checked = false;
                imgChecked.classList.add('d-none')
                imgUnchecked.classList.remove('d-none')
            } 
        }
    }
}

// Rendert Kategorien in das Category Menu
function renderCategories() {
    let content = document.getElementById('list_options_category');
    content.innerHTML = '';

    for (let i = 0; i < importCategories.length; i++) {
        const category = importCategories[i];
        content.innerHTML += /* html */ `
        <li class="categories-list" id="category_list${i}" onclick="chooseCategory(${i})">${category}</li>
        `; 
    }
}

// Setzt die gewählt Kategorie in das Input Feld
function chooseCategory(i) {
    let inputField = document.getElementById('category_input');
    let categoryContainer = document.getElementById('category_container');
    inputField.value = importCategories[i];
    categoryMenu();
}

// Setzt beim Klicken auf den Kontakt die input type=checkbox auf true bzw. false
function changeCheckboxContacts (i) {
    let checkbox = document.getElementById(`checkbox_contacts${i}`);
    let input = document.getElementById(`input_search_contact`);
    // toggle der Checkbox zwischen true and false
    checkbox.checked = !checkbox.checked;

    if (checkbox.checked) {
        importContacts[i]['checked'] = true;
        
    } else {
        importContacts[i]['checked'] = false;
    }
    renderCheckBox()
    renderCheckedContacts()
    input.value = '';
}

// Suchen der Kontakte im Menu
function searchContact() {
    let input = document.getElementById('input_search_contact').value.toLowerCase();
    let content = document.getElementById('list_options');
    
    content.innerHTML = '';
    for (let i = 0; i < importContacts.length; i++) {
        if (importContacts[i]['firstName'].toLowerCase().includes(input) || importContacts[i]['lastName'].toLowerCase().includes(input)) {
            content.innerHTML += renderContacts(i);
        }
    }
    renderCheckBox()
    renderCheckedContacts();
}

// Rendert die Auswählten Kontakte unterhalb des Input Feldes
function renderCheckedContacts() {
    let content = document.getElementById(`checked_contacts`);
    content.innerHTML = '';
    for (let i = 0; i < importContacts.length; i++) {
        const contact = importContacts[i];
        if (contact['checked'] == true) {
            let name = contact['lastName'];
            let firstName = contact['firstName'];
            content.innerHTML += /* html */ `
                <div id="checked_contact${i}" class="short-name checked-contact" style="background-color: ${importContacts[i]['color']}">${firstName.charAt(0) + name.charAt(0)}</div>
            `;
        }
    }
}   

// Färbt den gewählten Prio Btn ein und setzt alle anderen wieder auf die Standart Farbe
function colorChange(priority) {
    let priorities = ['urgent', 'medium', 'low'];
    priorities.forEach(pri => {
        let isActive = pri === priority;
        document.getElementById(`${pri}_btn`).classList.toggle(`${pri}-btn-change`, isActive);
        document.getElementById(`img_${pri}`).classList.toggle('d-none', isActive);
        document.getElementById(`img_${pri}_white`).classList.toggle('d-none', !isActive);
    });
}

function colorChangeUrgent() {
    colorChange('urgent');
}

function colorChangeMedium() {
    colorChange('medium');
}

function colorChangeLow() {
    colorChange('low');
}


// Änderung der Prio Boolean
function changePrio(priorityLevel) {
    // Setze alle Werte auf false
    priority[0].urgent = false;
    priority[0].medium = false;
    priority[0].low = false;

    // Setze den gewünschten Wert auf true basierend auf dem übergebenen Namen
    if (priorityLevel in priority[0]) {
        priority[0][priorityLevel] = true;
    }
}

// Rendert die Icons "close" und "check" im Subtask Feld
function renderSubtask() {
    let addIcon = document.getElementById('add_icon');
    let closeIcon = document.getElementById('close_icon');
    let checkIcon = document.getElementById('check_icon');

    addIcon.classList.toggle('d-none');
    closeIcon.classList.toggle('d-none');
    checkIcon.classList.toggle('d-none');
}

// Fügt die eingegeben Subtask zu dem Array "subtasks" hinzu und rendert diese 
function addSubtasks() {
    let input= document.getElementById('input_subtask');
    let subtaskList = document.getElementById('list_subtasks');
    
    if (input.value == '') {
        
    } else {
        subtasks.push(input.value);
    }

    subtaskList.innerHTML = '';

    for (let i = 0; i < subtasks.length; i++) {
        const subtask = subtasks[i];
        subtaskList.innerHTML += /* html */ `
        <div id="subtasks${i}" class="li-subtask">
            <li>${subtask}</li>
            <div class="edit-icons-subtasks">
                <div class="icon-box b-right"><img  class="add-icon" src="../assets/img/03_add-task/pencil.svg" onclick="editSubtask(${i})"></div>
                <div class="icon-box" onclick=""><img  class="add-icon" src="../assets/img/03_add-task/delete.svg" onclick="deleteSubtask(${i})"></div> 
            </div>
        </div>
        <div id="edit_container${i}" class="edit-subtask-container"></div>
    `;
    }
    input.value = '';
    
}

// Löscht die Eingabe im Input Feld bei Subtask
function clearInputField() {
    let input= document.getElementById('input_subtask');
    input.value = '';
}

// Löscht die erstellte Subtask
function deleteSubtask(i) {
    subtasks.splice(i, 1)
    addSubtasks();
}

// Öffnet ein Input Feld in das der Subtask geladen wird und bearbeitet und gespeichert/gelöscht werden kann
function editSubtask(i) {
    let subtaskList = document.getElementById(`edit_container${i}`);
    document.getElementById(`subtasks${i}`).innerHTML = '';
    subtaskList.innerHTML = /* html */ `
        <div class="edit-subtask-div">
            <input id="edit_input_subtask" class="edit-input-subtask" type="text">
            <div>
                <div class="icons-subtask">
                    <div class="icon-box b-right"><img  class="add-icon" src="../assets/img/03_add-task/delete.svg" onclick="deleteSubtask(${i})"></div>
                    <div class="icon-box" onclick=""><img  class="add-icon" src="../assets/img/03_add-task/check.svg" onclick="saveEditSubtask(${i})"></div> 
                </div>
            </div>
        </div>
    `;
    let input = document.getElementById('edit_input_subtask');
    input.value = subtasks[i];
}

// Speichern des edititerten Subtask
function saveEditSubtask(i) {
    let input = document.getElementById('edit_input_subtask');
    subtasks[i] = input.value;
    addSubtasks();
}

// Hinzufügen aller Werte zum JSON "tasks"
async function createNewTask() {
    let inputs = [
        {element: document.getElementById('input_title'), errorElement: document.getElementById('required_title')},
        {element: document.getElementById('input_date'), errorElement: document.getElementById('required_date')},
        {element: document.getElementById('category_input'), parentElement: document.getElementById('input_category'), errorElement: document.getElementById('required_category')}
    ];

    let allFilled = true;

    inputs.forEach(input => {
        if (input.element.value === '') {
            if (input.parentElement) {
                input.parentElement.classList.add('outline-red'); // Hinzufügen der Klasse zum übergeordneten Div
            } else {
                input.element.classList.add('outline-red'); // Hinzufügen der Klasse zum Input-Feld
            }
            input.errorElement.innerHTML = 'This field is required';
            allFilled = false;
        } else {
            if (input.parentElement) {
                input.parentElement.classList.remove('outline-red'); // Entfernen der Klasse vom übergeordneten Div
            } else {
                input.element.classList.remove('outline-red'); // Entfernen der Klasse vom Input-Feld
            }
            input.errorElement.innerHTML = '';
        }
    });

    if (allFilled) {
        addAllToTasks();
        addtaskAnimation();
    }
}

// Fügt die ausgeäwhlten Kontakte zum JSON "tasks['contact']" hinzu
// vergleicht die Arrays "importContacts" und "importTasks"
// Filtert nach checked Parameter 
function addCheckedContactsToTasks(importContacts, newTask) {
    let checkedContacts = importContacts.filter(contact => contact.checked)
        .map(contact => ({
            firstName: contact.firstName,
            lastName: contact.lastName,
            checked: contact.checked,
            color: contact.color,
            mail: contact.mail,
            tel: contact.tel
        }));
    newTask.contact = checkedContacts;
}

// Fügt den beschrieben Task zur Datenbank hinzu
async function addAllToTasks() {
    let inputTitle = document.getElementById('input_title');
    let inputDescription = document.getElementById('input_description');
    let inputDate = document.getElementById('input_date');
    let inputCategory = document.getElementById('category_input');

    let newTask = {
        'columnID' : 'ToDo',
        'title': inputTitle.value || '',
        'description': inputDescription.value || '',
        'contact': [] || '', 
        'date': inputDate.value || '',
        'priorities': [...priority],
        'categories': inputCategory.value || '',
        'subtasks': [
            {
                'subtaskTitle' : [...subtasks] || '',
                'status' : 'open'
            }
        ]
    };

    // Füge die geprüften Kontakte zum neuen Task hinzu
    addCheckedContactsToTasks(importContacts, newTask); 

    // Füge den neuen Task zu importTasks hinzu
    importTasks.push(newTask);

    // Speichere die aktualisierten Tasks
    await setItem('tasks', importTasks);
}

function addtaskAnimation() {
    document.getElementById('animate_btn').classList.add('animate'); 
    document.getElementById('animate_btn').classList.remove('d-none'); 
    setTimeout(function() {
        window.location.href = "./board.html"; // Ziel URL Weiterleitung - board.html
    }, 1600 );
}