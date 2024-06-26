let boardColumn = 'ToDo';

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
    loadBoardColumn();
}


function loadBoardColumn() {
    let columnID = localStorage.getItem('boardColumn');
    if (columnID) {
        boardColumn = columnID;
    }
}





/**
 * function to put the single contacts html in an list 
 */
function getContacts() {
    let content = document.getElementById('list_options');
    content.innerHTML = '';

    for (let i = 0; i < importContacts.length; i++) {
        content.innerHTML += renderContacts(i);
    }
    renderCheckBox()
}

/**
 * function to set the category to the input.value
 * close the category menu after choosen
 * @param {integer} i 
 */
function chooseCategory(i) {
    let inputField = document.getElementById('category_input');
    inputField.value = importCategories[i];
    categoryMenu();
}


/**
 * function to set the input type=checkbox to true or false
 * @param {integer} i 
 */
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


/**
 * filter the contacs and and render them to the menu
 */
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


/**
 * render the checked contacts html below the input search
 */
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


/**
 * function to set the color of the priority buttons and reset the others
 * @param {string} priority 
 */
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


/**
 * set and change the boolean of the priority 
 * @param {boolean} priorityLevel 
 */
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


/**
 * function to render the "close" ande "check" buttons in the subtasks
 */
function renderSubtask() {
    ['add_icon', 'close_icon', 'check_icon'].forEach(id => {
        document.getElementById(id).classList.toggle('d-none');
    });
}


/**
 * function to add the subtask to the array and render them
 */
function addSubtasks() {
    let input= document.getElementById('input_subtask');
    let subtaskList = document.getElementById('list_subtasks');
    
    if (input.value == '') {
        
    } else {
        subtasks.push({'subtaskTitle' : input.value, 'status' : 'open'});
    }

    subtaskList.innerHTML = '';

    for (let i = 0; i < subtasks.length; i++) {
        const subtask = subtasks[i];
        subtaskList.innerHTML += /* html */ `
        <div id="subtasks${i}" class="li-subtask">
            <li>${subtask.subtaskTitle}</li>
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


/**
 * open the input where the subtask can be edit to create or delete
 * @param {integer} i - choosen subtask
 */
function editSubtask(i) {
    let subtaskList = document.getElementById(`edit_container${i}`);
    document.getElementById(`subtasks${i}`).innerHTML = '';
    subtaskList.innerHTML = editSubtaskTemp(i);
    let input = document.getElementById('edit_input_subtask');
    input.value = subtasks[i]['subtaskTitle'];
}


/**
 * save the edit subtask
 * @param {integer} i - choosen subtask 
 */
function saveEditSubtask(i) {
    let input = document.getElementById('edit_input_subtask');
    subtasks[i]['subtaskTitle'] = input.value;
    addSubtasks();
}

// Hinzufügen aller Werte zum JSON "tasks"
/**
 * add all to the json "tasks"
 * check if the required inputs are not empty and colorize the input outline and add the errorElement
 */
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


/**
 * add the choosen contact to "tasks" 
 * compare "importContacts" and "importTasks"
 * filter for the checked
 * @param {string} importContacts - contacts from the database
 * @param {string} newTask - created task
 */
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


/**
 * save the task with all values to the database
 */
async function addAllToTasks() {
    let inputTitle = document.getElementById('input_title');
    let inputDescription = document.getElementById('input_description');
    let inputDate = document.getElementById('input_date');
    let inputCategory = document.getElementById('category_input');

    let newTask = {
        'columnID' : boardColumn,
        'title': inputTitle.value || '',
        'description': inputDescription.value || '',
        'contact': [] || '', 
        'date': inputDate.value || '',
        'priorities': [...priority],
        'categories': inputCategory.value || '',
        'subtasks': subtasks
    };

    // Füge die geprüften Kontakte zum neuen Task hinzu
    addCheckedContactsToTasks(importContacts, newTask); 

    // Füge den neuen Task zu importTasks hinzu
    importTasks.push(newTask);

    // Speichere die aktualisierten Tasks
    await setItem('tasks', importTasks);
}