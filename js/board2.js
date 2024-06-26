/**
 * Shows the Add Task overlay
 * @param {string} columnID 
 */
function showAddTaskOverlay(columnID) {
    boardColumn = columnID;     //globale Variable in add_task.js
    document.getElementById('overlay_add_task').classList.remove('d-none');
    setTimeout(() => document.getElementById('add_task_overlay_card').classList.add('translateX-0'), 100);  //Verzögerung damit die Karte erst außerhalb des Bildschirms dargestellt wird und dann reinfliegt!
}


/**
 * Saves the column ID in the local storage and redirects to the Add Task site
 * @param {string} columnID 
 */
function addTaskMobile(columnID) {
    localStorage.setItem('boardColumn', columnID);
    window.location.href = "./add_task.html";
}


/**
 * Closes the Add Task overlay
 */
function closeAddTaskOverlay() {
    resetInputOfAddTaskOverlay();
    subtasks = [];
    uncheckContacts();
    document.getElementById('add_task_overlay_card').classList.remove('translateX-0');
    setTimeout(() => document.getElementById('overlay_add_task').classList.add('d-none'),300);    //zur Verzögerung für die Animation
}


/**
 * Resets the input fields of the Add Task overlay
 */
function resetInputOfAddTaskOverlay() {
    document.getElementById('input_title').value = '';
    document.getElementById('input_title').classList.remove('outline-red');
    document.getElementById('input_description').value = '';
    document.getElementById('checked_contacts').innerHTML = '';
    document.getElementById('input_date').value = '';
    document.getElementById('input_date').classList.remove('outline-red');
    document.getElementById('category_input').value = '';
    document.getElementById('input_category').classList.remove('outline-red');
    document.getElementById('list_subtasks').innerHTML = '';
    
    document.getElementById('required_title').innerHTML = '';
    document.getElementById('required_date').innerHTML = '';
    document.getElementById('required_category').innerHTML = '';
}


// Auxiliary functions:
/**
 * Prevents event bubbling when closing the big view
 * @param {event} event 
 */
function stopPropagation(event) {
    event.stopPropagation();
}


/**
 * Function that allows dropping elements into other elements (is not allowed by default!)
 * @param {event} event 
 */
function allowDrop(event) {
    event.preventDefault();
}


/**
 * Returns only the first letter of the word capitalized
 * @param {string} word 
 * @returns 
 */
function oneLetterUppercase(word) {
    return word.charAt(0).toUpperCase();
}


/**
 * Returns the whole word with the first letter capitalized
 * @param {string} word 
 * @returns 
 */
function firstLetterUppercase(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
}


/**
 * Returns the priority of the current task
 * @param {JSON} taskPriorities 
 * @returns 
 */
function getPriority(taskPriorities) {
    for (let key in taskPriorities[0]) {
        if (taskPriorities[0][key]) {
            return key;
        }
    }
}


/**
 * Resets all contacts to the "unchecked" status
 */
function uncheckContacts() {
    for (let i = 0; i < importContacts.length; i++) {
        const contact = importContacts[i];
        contact['checked'] = false;
    }
}