/**
 * Edit the corresponding task in the big view
 * @param {string} columnID 
 * @param {integer} taskID 
 */
function editTask(columnID, taskID) {
    let currentArrayIndex = renderedBoardArrays.findIndex(element => element['id'] == columnID['id']);
    let currentTask = renderedBoardArrays[currentArrayIndex]['array'][taskID];
    let currentTaskPriority = getPriority(currentTask['priorities']);
    let bigViewContainer = document.getElementById('big_view_container');

    bigViewContainer.innerHTML = editTaskHTML(columnID, taskID, currentTask);

    highlightCurrentPriority(currentTaskPriority);

    if (currentTask['contact']) { //prüft zuerst ob die aktuelle Task Kontakte enthält
        addContactsToEditView(currentTask);
    }

    if (currentTask['subtasks']) { //prüft zuerst ob die aktuelle Task Subtask enthält
        addSubtasksToEditView(currentTask);
    }
    showSubtasksInEditView();
}


/**
 * Highlights the current priority of the task in the edit task view
 * @param {string} currentTaskPriority 
 */
function highlightCurrentPriority(currentTaskPriority) {
    let priorityButton = document.getElementById(`priority_${currentTaskPriority}`);
    let priorityIcon = document.getElementsByClassName(`priority-path-${currentTaskPriority}`);
    priorityButton.classList.add(`priority-${currentTaskPriority}-highlight`);
    priorityButton.children[0].classList.add('fs21-fw700');
    for (let i = 0; i < priorityIcon.length; i++) {
        priorityIcon[i].classList.add('fill-white');
    }
    currentEditedTaskPriority[0][currentTaskPriority] = true;
}


/**
 * Adds the contacts to the editing view and sets the status of the contacts
 * @param {JSON} currentTask 
 */
function addContactsToEditView(currentTask) {
    for (let j = 0; j < currentTask['contact'].length; j++) {
        const person = currentTask['contact'][j];
        const initials = `${oneLetterUppercase(person['firstName'])}${oneLetterUppercase(person['lastName'])}`;
        let currentContactIndex = importContacts.findIndex(element => element['firstName'] == person['firstName'] && element['lastName'] == person['lastName']);
        importContacts[currentContactIndex]['checked'] = true;

        if (j < 4) {
            document.getElementById('checked_contacts_edit_task').innerHTML += /*html*/ `<div class="big-view-initials" style="background-color: ${person['color']}">${initials}</div>`;
        } else if (j == 4) {
            document.getElementById('checked_contacts_edit_task').innerHTML += /*html*/ `<div class="big-view-initials" style="background-color: lightgrey">+ ${currentTask['contact'].length - 4}</div>`;
        }
    }
}


/**
 * Adds the subtasks to the editing view
 * @param {JSON} currentTask 
 */
function addSubtasksToEditView(currentTask) {
    for (let k = 0; k < currentTask['subtasks'].length; k++) {
        const subtask = currentTask['subtasks'][k];
        subtasks.push({'subtaskTitle': subtask['subtaskTitle'], 'status': subtask['status']});
    }
}


/**
 * Changes the priority of the task in the editing view
 * @param {string} selectedPriority 
 */
function changePriority(selectedPriority) {
    resetPriorityButtons();
    highlightSelectedPriority(selectedPriority);
    resetCurrentEditedTaskPriority();
    currentEditedTaskPriority[0][selectedPriority] = true;
}


/**
 * Resets all priority buttons in the editing view
 */
function resetPriorityButtons() {
    document.getElementById('priority_urgent').classList.remove('priority-urgent-highlight');
    document.getElementById('priority_urgent').children[0].classList.remove('fs21-fw700');
    document.getElementsByClassName('priority-path-urgent')[0].classList.remove('fill-white');
    document.getElementsByClassName('priority-path-urgent')[1].classList.remove('fill-white');

    document.getElementById('priority_medium').classList.remove('priority-medium-highlight');
    document.getElementById('priority_medium').children[0].classList.remove('fs21-fw700');
    document.getElementsByClassName('priority-path-medium')[0].classList.remove('fill-white');
    document.getElementsByClassName('priority-path-medium')[1].classList.remove('fill-white');

    document.getElementById('priority_low').classList.remove('priority-low-highlight');
    document.getElementById('priority_low').children[0].classList.remove('fs21-fw700');
    document.getElementsByClassName('priority-path-low')[0].classList.remove('fill-white');
    document.getElementsByClassName('priority-path-low')[1].classList.remove('fill-white');
}


/**
 * Highlights the selected priority button in the editing view
 * @param {string} selectedPriority 
 */
function highlightSelectedPriority(selectedPriority) {
    let selectedPriorityButton = document.getElementById(`priority_${selectedPriority}`);
    let selectedPriorityIcon = document.getElementsByClassName(`priority-path-${selectedPriority}`);
    selectedPriorityButton.classList.add(`priority-${selectedPriority}-highlight`);
    selectedPriorityButton.children[0].classList.add('fs21-fw700');
    for (let i = 0; i < selectedPriorityIcon.length; i++) {
        selectedPriorityIcon[i].classList.add('fill-white');
    }
}


/**
 * Resets the priority of the current task
 */
function resetCurrentEditedTaskPriority() {
    currentEditedTaskPriority = [{
        'urgent' : false,
        'medium' : false,
        'low' : false
    }];
}


/**
 * Saves the current data of the task
 * @param {string} columnID 
 * @param {integer} taskID 
 */
function saveCurrentTask(columnID, taskID) {
    let currentArrayIndex = renderedBoardArrays.findIndex(element => element['id'] == columnID['id']);
    let currentTask = renderedBoardArrays[currentArrayIndex]['array'][taskID];
    let editTaskTitel = document.getElementById('edit_task_title').value;
    let editTaskDescription = document.getElementById('edit_task_description').value;
    let editTaskDate = document.getElementById('edit_task_date').value;
    let editTaskContacts = importContacts.filter(contact => contact.checked);
    
    currentTask['contact'] = editTaskContacts;
    currentTask['date'] = editTaskDate;
    currentTask['description'] = editTaskDescription;
    currentTask['priorities'] = currentEditedTaskPriority;
    currentTask['subtasks'] = subtasks;
    currentTask['title'] = editTaskTitel;

    renderAll();
    saveAllTasksToDatabase();
    closeBigView(1);
}


/**
 * Saves all tasks to the Database
 */
function saveAllTasksToDatabase() {
    importTasks = [];       //zuerst muss das Array geleert werden, damit keine doppelten Tasks darin gespeichert werden!
    for (let i = 0; i < renderedBoardArrays.length; i++) {
        const boardArray = renderedBoardArrays[i]['array'];
        
        for (let j = 0; j < boardArray.length; j++) {
            const singleTask = boardArray[j];
            importTasks.push(singleTask);
        }
    }
    setItem('tasks', importTasks);
}


// Additional Edit Task functions (copies of add_task.js):
/**
 * Shows the contact dropdown list in the editing view
 */
function showContactList() {
    document.getElementById('contact_container_edit_task').classList.remove('d-none');
    document.getElementById('arrow_drop_down_contact_edit_task').classList.add('arrow-drop-down');
    
    let contactList = document.getElementById('list_options_edit_task');
    contactList.innerHTML = '';

    for (let i = 0; i < importContacts.length; i++) {
        contactList.innerHTML += editTaskContactsHTML(i);
    }
    showCheckBox();
}


/**
 * Closes the contact dropdown list in the editing view
 */
function editTaskCloseAssignMenu() {
    document.getElementById('contact_container_edit_task').classList.add('d-none');
    document.getElementById('arrow_drop_down_contact_edit_task').classList.remove('arrow-drop-down');
}


/**
 * Shows the correct checkbox of the contact in the dropdown list in the editing view
 */
function showCheckBox() {
    for (let i = 0; i < importContacts.length; i++) {
        let imgUnchecked = document.getElementById(`img_checkbox_contacts_edit_task${i}`);
        let imgChecked = document.getElementById(`img_checkbox_checked_contacts_edit_task${i}`);
        let checkbox = document.getElementById(`checkbox_contacts_edit_task${i}`);
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


/**
 * Changes the checkbox icon of the corresponding contact
 * @param {integer} i 
 */
function changeContactsCheckbox (i) {
    let checkbox = document.getElementById(`checkbox_contacts_edit_task${i}`);
    let input = document.getElementById('input_search_contact_edit_task');
    // toggle der Checkbox zwischen true and false
    checkbox.checked = !checkbox.checked;

    if (checkbox.checked) {
        importContacts[i]['checked'] = true;
        
    } else {
        importContacts[i]['checked'] = false;
    }
    showCheckBox();
    showCheckedContacts();
    input.value = '';
}


/**
 * Shows the selected contacts
 */
function showCheckedContacts() {
    let content = document.getElementById('checked_contacts_edit_task');
    content.innerHTML = '';
    let amountCheckedContacts = importContacts.filter(contact => contact.checked).length;
    countCheckedContacts = 0;
    for (let i = 0; i < importContacts.length; i++) {
        const contact = importContacts[i];
        if (contact['checked'] == true) {
            countCheckedContacts++;
            checkAmountOfContacts(amountCheckedContacts, contact, i);
        }
    }
}


/**
 * Checks the number of contacts and renders the initials
 * @param {integer} amountCheckedContacts 
 * @param {JSON} contact 
 * @param {integer} i 
 */
function checkAmountOfContacts(amountCheckedContacts, contact, i) {
    let name = contact['lastName'];
    let firstName = contact['firstName'];

    if (countCheckedContacts < 5) {
        document.getElementById('checked_contacts_edit_task').innerHTML += /* html */ `
            <div class="big-view-initials" style="background-color: ${importContacts[i]['color']}">${firstName.charAt(0) + name.charAt(0)}</div>
        `;
    } else if (countCheckedContacts == 5) {
        document.getElementById('checked_contacts_edit_task').innerHTML += /* html */ `
            <div class="big-view-initials" style="background-color: lightgrey">+ ${amountCheckedContacts - 4}</div>
        `;
    }
}


/**
 * Shows the add- and the cancel-icon for the subtasks in the editing view
 */
function showSubtaskIcons() {
    document.getElementById('add_icon_edit_task').classList.toggle('d-none');
    document.getElementById('close_icon_edit_task').classList.toggle('d-none');
    document.getElementById('check_icon_edit_task').classList.toggle('d-none');
}


/**
 * Clears the input of the subtask field in the editing view
 */
function clearSubtaskField() {
    document.getElementById('input_subtask_edit_task').value = '';
}


/**
 * Shows the subtasks of the current task in the editing view
 */
function showSubtasksInEditView() {
    let input = document.getElementById('input_subtask_edit_task');
    let subtaskList = document.getElementById('list_subtasks_edit_task');
    
    if (input.value == '') {
        
    } else {
        subtasks.push({'subtaskTitle': input.value, 'status': 'open'});
    }
    subtaskList.innerHTML = '';
    for (let i = 0; i < subtasks.length; i++) {
        const subtask = subtasks[i];
        subtaskList.innerHTML += subtaskHTML(i, subtask);
    }
    input.value = '';
}


/**
 * Removes the subtask of the current task in the editing view
 * @param {integer} i 
 */
function removeSubtask(i) {
    subtasks.splice(i, 1);
    showSubtasksInEditView();
}


/**
 * Edit current subtask in the editing view
 * @param {integer} i 
 */
function changeSubtask(i) {
    let subtaskList = document.getElementById(`edit_container_edit_task${i}`);
    document.getElementById(`subtasks_edit_task${i}`).innerHTML = '';
    subtaskList.innerHTML = changeSubtaskHTML(i);
    let input = document.getElementById('edit_input_subtask_edit_task');
    input.value = subtasks[i]['subtaskTitle'];
}


/**
 * Saves the edited subtask
 * @param {integer} i 
 */
function saveChangedSubtask(i) {
    let input = document.getElementById('edit_input_subtask_edit_task');
    subtasks[i]['subtaskTitle'] = input.value;
    showSubtasksInEditView();
}