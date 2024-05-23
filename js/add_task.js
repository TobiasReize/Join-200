// Code oder Funktionen, die nur für die Add Task Seite relevant sind!

let contacts = [
    {
        'first-name' : 'Thomas',
        'name' : 'Mueller',
        'checked' : false
    },
    {
        'first-name' : 'Bernd',
        'name' : 'Schneider',
        'checked' : false
    },
    {
        'first-name' : 'Michael',
        'name' : 'Ballack',
        'checked' : false
    }
]

let colors = ['#9747FF', '#FF5EB3', '#6E52FF', '#9327FF', '#00BEE8', '#1FD7C1', '#FF745E', '#FF745E', '#FC71FF', '#FFC701', '#0038FF', '#C3FF2B', '#FFE62B', '#FF4646', '#FF4646'];

let = categories = ['Einkaufen', 'Arbeit', 'Privat'];

let priority = [
    {
        'urgent' : false,
        'medium' : true,
        'low' : false
    }
]

let subtasks = [];

let tasks = [
    {
        'title' : '',
        'description' : '',
        'contact' : [],
        'date' : '',
        'priorities' : [
            {
                'urgent' : false,
                'medium' : false,
                'low' : false
            }
        ],
        'categories' : '',
        'subtasks' : [...subtasks]
    }
]

// Aufklappen des Assignet Menu
function assignMenu() {
    let content = document.getElementById('contact_container');
    let arrow = document.getElementById('arrow_drop_down_contact');
    content.classList.toggle('d-none');
    arrow.classList.toggle('arrow-drop-down')
}

/* function closeMenus() {
    let contacts = document.getElementById('contact_container');
    let category = document.getElementById('category_container');
    if (!contacts.classList.contains('d-none')) {
        contacts.classList.add('d-none')
    }
} */

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

    for (let i = 0; i < contacts.length; i++) {
        content.innerHTML += renderContacts(i);
    }
    renderCheckBox()
    colorizeDropDownContacts(); 
}

function renderContacts(i) {
    return /* html */ `
        <li id="listed_names${i}" class="option" onclick="changeCheckboxContacts(${i})">
            <div class="short-and-fullname">
                <div id="short_name${i}" class="short-name">${contacts[i]['first-name'].charAt(0) + contacts[i]['name'].charAt(0)}</div>
                <span id="full_name">${contacts[i]['first-name'] + ' ' + contacts[i]['name']}</span>
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
    for (let i = 0; i < contacts.length; i++) {
        let imgUnchecked = document.getElementById(`img_checkbox_contacts${i}`);
        let imgChecked = document.getElementById(`img_checkbox_checked_contacts${i}`);
        let checkbox = document.getElementById(`checkbox_contacts${i}`);
        const contact = contacts[i];

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

    for (let i = 0; i < categories.length; i++) {
        const category = categories[i];
        content.innerHTML += /* html */ `
        <li class="categories-list" id="category_list${i}" onclick="chooseCategory(${i})">${category}</li>
        `; 
    }
}

// Setzt die gewählt Kategorie in das Input Feld
function chooseCategory(i) {
    let inputField = document.getElementById('category_input');
    let categoryContainer = document.getElementById('category_container');
    inputField.value = categories[i];
    categoryMenu();
}

// Färbt die kurzen Namen (z.B. TM) ein
function colorizeDropDownContacts() {
    // Farben sind in einem Array colors definiert
    let elements = document.getElementsByClassName('short-name');
    for (let i = 0; i < elements.length; i++) {
        elements[i].style.backgroundColor = colors[i % colors.length];
    }
}

// Färbt die ausgeählten Kontakte unterhalb des Menus ein
function colorizeCheckedContacts() {
    for (let i = 0; i < colors.length; i++) {
        let content = document.getElementById(`checked_contact${i}`);
        const color = colors[i];
        if (content == null) {
            continue
        } else {
            content.style.backgroundColor += color;
        }
    }
}

// Setzt beim Klicken auf den Kontakt die input type=checkbox auf true bzw. false
function changeCheckboxContacts (i) {
    let checkbox = document.getElementById(`checkbox_contacts${i}`);
    // toggle der Checkbox zwischen true and false
    checkbox.checked = !checkbox.checked;

    if (checkbox.checked) {
        contacts[i]['checked'] = true;
        
    } else {
        contacts[i]['checked'] = false;
    }
    renderCheckBox()
    renderCheckedContacts()
}

// Suchen der Kontakte im Menu
function searchContact() {
    let input = document.getElementById('input_search_contact').value.toLowerCase();
    let content = document.getElementById('list_options');
    
    content.innerHTML = '';
    for (let i = 0; i < contacts.length; i++) {
        if (contacts[i]['first-name'].toLowerCase().includes(input) || contacts[i]['name'].toLowerCase().includes(input)) {
            content.innerHTML += renderContacts(i);
        }
    }
    renderCheckBox()
    colorizeDropDownContacts();
    renderCheckedContacts();
}

// Rendert die Auswählten Kontakte unterhalb des Input Feldes
function renderCheckedContacts() {
    let content = document.getElementById(`checked_contacts`);
    content.innerHTML = '';
    for (let i = 0; i < contacts.length; i++) {
        const contact = contacts[i];
        if (contact['checked'] == true) {
            let name = contact['name'];
            let firstName = contact['first-name'];
            content.innerHTML += /* html */ `
                <div id="checked_contact${i}" class="short-name checked-contact">${firstName.charAt(0) + name.charAt(0)}</div>
            `;
        }
    }
    colorizeCheckedContacts();
}   

// Färbt den gewählten Prio Btn ein und setzt alle anderen wieder auf die Standart Farbe
function colorChangeUrgent() {
    document.getElementById('urgent_btn').classList.toggle('urgent-btn-change');
    document.getElementById('img_urgent').classList.toggle('d-none');
    document.getElementById('img_urgent_white').classList.toggle('d-none');
    document.getElementById('medium_btn').classList.remove('medium-btn-change');
    document.getElementById('img_medium').classList.remove('d-none');
    document.getElementById('img_medium_white').classList.add('d-none');
    document.getElementById('low_btn').classList.remove('low-btn-change');
    document.getElementById('img_low').classList.remove('d-none');
    document.getElementById('img_low_white').classList.add('d-none');
}
 
function colorChangeMedium() {
    document.getElementById('medium_btn').classList.toggle('medium-btn-change');
    document.getElementById('img_medium').classList.toggle('d-none');
    document.getElementById('img_medium_white').classList.toggle('d-none');
    document.getElementById('urgent_btn').classList.remove('urgent-btn-change');
    document.getElementById('img_urgent').classList.remove('d-none');
    document.getElementById('img_urgent_white').classList.add('d-none');
    document.getElementById('low_btn').classList.remove('low-btn-change');
    document.getElementById('img_low').classList.remove('d-none');
    document.getElementById('img_low_white').classList.add('d-none');
}

function colorChangeLow() {
    document.getElementById('low_btn').classList.toggle('low-btn-change');
    document.getElementById('img_low').classList.toggle('d-none');
    document.getElementById('img_low_white').classList.toggle('d-none');
    document.getElementById('urgent_btn').classList.remove('urgent-btn-change');
    document.getElementById('img_urgent').classList.remove('d-none');
    document.getElementById('img_urgent_white').classList.add('d-none');
    document.getElementById('medium_btn').classList.remove('medium-btn-change');
    document.getElementById('img_medium').classList.remove('d-none');
    document.getElementById('img_medium_white').classList.add('d-none');
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
function createNewTask() {
    let inputs = [
        {element: document.getElementById('input_title'), errorElement: document.getElementById('required_title')},
        {element: document.getElementById('input_date'), errorElement: document.getElementById('required_date')},
        {element: document.getElementById('category_input'), errorElement: document.getElementById('required_category')}
    ];

    let allFilled = true;

    inputs.forEach(input => {
        if (input.element.value === '') {
            input.element.classList.add('outline-red');
            input.errorElement.innerHTML = 'This field is required';
            allFilled = false;
        } else {
            input.element.classList.remove('outline-red');
            input.errorElement.innerHTML = '';
        }
    });

    if (allFilled) {
        addAllToTasks();
    }
}

// Fügt die ausgeäwhlten Kontakte zum JSON "tasks['contact']" hinzu
function addCheckedContactsToTasks(contacts, tasks) {
    const checkedContacts = contacts.filter(contact => contact.checked)
                                    .map(contact => ({
                                        'first-name': contact['first-name'],
                                        'name': contact['name']
                                    }));
    tasks[0].contact = checkedContacts;
}

function addAllToTasks() {
    let inputTitle = document.getElementById('input_title');
    let inputDescription = document.getElementById('input_description');
    let inputDate = document.getElementById('input_date');
    let inputCategory = document.getElementById('category_input');

    for (let i = 0; i < tasks.length; i++) {
        const task = tasks[i];
        task['title'] = inputTitle.value;
        task['description'] = inputDescription.value;
        task['date'] = inputDate.value;
        task['priorities'] = [...priority];
        task['categories'] = inputCategory.value;
        task['subtasks'] = [...subtasks];
    }
    addCheckedContactsToTasks(contacts, tasks) 
    location.reload();
}