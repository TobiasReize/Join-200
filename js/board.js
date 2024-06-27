/**
 * Initial function to display the content
 */
async function initBoard() {
    await init();
    sortTasks();
    renderedBoardArrays = allBoardArrays;
    renderAll();
}


/**
 * Sorts all tasks according to the columns and pushes them into the corresponding array
 */
function sortTasks() {
    for (let i = 0; i < importTasks.length; i++) {
        const singleTask = importTasks[i];
        switch (singleTask.columnID) {
            case 'ToDo':
                toDoTasks.push(singleTask);
                break;
            case 'InProgress':
                inProgressTasks.push(singleTask);
                break;
            case 'AwaitFeedback':
                awaitFeedbackTasks.push(singleTask);
                break;
            case 'Done':
                doneTasks.push(singleTask);        
        }
    }
}


/**
 * Renders all 4 columns with their tasks
 */
function renderAll() {
    for (let i = 0; i < renderedBoardArrays.length; i++) {
        const boardArray = renderedBoardArrays[i];
        renderColumn(boardArray['title'], boardArray['id'], boardArray['array']);
    }
}


/**
 * Renders the corresponding column with its tasks
 * @param {string} columnTitle 
 * @param {string} columnID 
 * @param {array} columnArray 
 */
function renderColumn(columnTitle, columnID, columnArray) {
    let columnContainer = document.getElementById(columnID);
    columnContainer.innerHTML = '';

    //Prüft ob die einzelnen Spalten leer oder voll sind:
    if (columnArray.length == 0) {  //für leere Spalten
        columnContainer.innerHTML = /*html*/ `
            <div class="empty-card">No tasks ${columnTitle}</div>
            <div id="rectangle_${columnID}" class="dashed-rectangle d-none"></div>
        `;
    } else {
        renderTasks(columnID, columnArray);
    }
}


/**
 * Renders the tasks in the corresponding column
 * @param {string} columnID 
 * @param {array} columnArray 
 */
function renderTasks(columnID, columnArray) {
    let columnContainer = document.getElementById(columnID);
    for (let i = 0; i < columnArray.length; i++) {
        const task = columnArray[i];
        columnContainer.innerHTML += taskCardHTML(columnID, i, task);
        if (task['subtasks']) {     //prüft ob die aktuelle Task Subtasks enthält, wenn ja wird die Progress-bar ergänzt sonst nicht
            checkProgressBar(columnID, i, task);
        }
        if (task['contact']) {       //prüft zuerst ob die aktuelle Task Kontakte enthält
            //fügt die Kontakte hinzu:
            addContactsToCard(columnID, i, task);
        }
    }
    columnContainer.innerHTML += /*html*/ `<div id="rectangle_${columnID}" class="dashed-rectangle d-none"></div>`;     //fügt am Ende ein gestricheltes Rechteck hinzu
}


/**
 * Checks the number of subtasks and inserts the progress bar
 * @param {string} columnID 
 * @param {integer} i 
 * @param {JSON} task 
 */
function checkProgressBar(columnID, i, task) {
    if (task['subtasks'].length > 0) {
        //Zählen der erledigten Subtasks:
        let doneSubtasks = 0;
        for (let j = 0; j < task['subtasks'].length; j++) {
            const singleSubtask = task['subtasks'][j];
            if (singleSubtask['status'] == 'done') {
                doneSubtasks++;
            }
        }
        //Einfügen der Progress-bar und Text:
        document.getElementById(`${columnID}_subtasks_container_${i}`).innerHTML = progressBarHTML(task, doneSubtasks);
    }
}


/**
 * Adds the contacts to the tasks
 * @param {string} columnID 
 * @param {integer} i 
 * @param {JSON} task 
 */
function addContactsToCard(columnID, i, task) {
    for (let k = 0; k < task['contact'].length; k++) {
        const person = task['contact'][k];
        const personFirstName = person['firstName'];
        const personLastName = person['lastName'];
        const initials = `${oneLetterUppercase(personFirstName)}${oneLetterUppercase(personLastName)}`;

        if (k > 3) {
            document.getElementById(`${columnID}_contacts_container_${i}`).innerHTML += /*html*/ `<div class="initials" style="background-color: lightgrey">+ ${task['contact'].length - 4}</div>`;
            break;
        } else {
            document.getElementById(`${columnID}_contacts_container_${i}`).innerHTML += /*html*/ `<div class="initials" style="background-color: ${person['color']}">${initials}</div>`;
        }
    }
}


/**
 * Search function, shows only the matching tasks
 */
function showSearchedTasks() {
    let searchField = document.getElementById('search_field');
    let searchFieldInput = searchField.value.trim().toLowerCase();
    renderedBoardArrays = allBoardArrays;   //wenn man seine Eingabe wieder löscht, sollen wieder alle Tasks angezeigt werden (zurücksetzen)!

    if (searchFieldInput.length > 2) {
        searchTasks(searchFieldInput);
        renderedBoardArrays = filteredBoardArrays;
        renderAll();
    } else if (searchFieldInput.length == 0) {      //falls die Eingabe wieder gelöscht wird
        renderAll();
    }
}


/**
 * Searches all tasks and pushes the matching tasks into an array
 * @param {string} searchFieldInput 
 */
function searchTasks(searchFieldInput) {
    for (let i = 0; i < renderedBoardArrays.length; i++) {
        const searchedArray = renderedBoardArrays[i]['array'];
        filteredBoardArrays[i]['array'] = [];   //Bevor in das filteredBoardArrays die Tasks reingepusht werden, muss es zurückgesetzt werden, damit nur die aktuell gefilterten Tasks angezeigt werden! (und keine früheren, gefilterten Tasks!)
        
        for (let j = 0; j < searchedArray.length; j++) {    //Durchsucht jeweils den Titel und die Beschreibung der Aufgabe
            const singleTask = searchedArray[j];
            const singleTaskTitle = singleTask['title'].trim().toLowerCase();
            const singleTaskDescription = singleTask['description'].trim().toLowerCase();
            if (singleTaskTitle.includes(searchFieldInput) || singleTaskDescription.includes(searchFieldInput)) {
                filteredBoardArrays[i]['array'].push(singleTask);   //Die gefilterten Arrays werden in einem extra-Array gespeichert
            }
        }
    }
}


/**
 * Rotate card on mouse click
 * @param {string} columnID 
 * @param {integer} taskID 
 */
function rotateCard(columnID, taskID) {
    document.getElementById(`card_${columnID['id']}_${taskID}`).classList.add('rotate-card');
}


/**
 * Saves the data of the current drag element in a global variable
 * @param {string} columnID 
 * @param {integer} taskID 
 */
function startDragging(columnID, taskID) {
    currentDraggedElement = {
        'columnTitle': columnID['id'],  //Hier muss nochmal extra die 'id' angesprochen werden?
        'taskNumber': taskID
    }
    //In der Spalte vor und nach dem aktuellen Drag-Elements soll ein gestricheltes Rechteck (Platzhalter) angezeigt werden:
    // let startArrayIndex = renderedBoardArrays.findIndex(element => element['id'] == currentDraggedElement['columnTitle']);
    // renderedBoardArrays[startArrayIndex + 1]['array'].push();
    // renderedBoardArrays[startArrayIndex - 1]['array'].push();
}


/**
 * End rotate card
 * @param {string} columnID 
 * @param {integer} taskID 
 */
function endRotateCard(columnID, taskID) {      //Karte wird wieder in den Ausgangszustand zurückversetzt, wenn die Maustaste losgelassen wird
    document.getElementById(`card_${columnID['id']}_${taskID}`).classList.remove('rotate-card');
}


/**
 * Highlights the dragover-column
 * @param {string} idColumn 
 */
function highlightColumn(idColumn) {
    document.getElementById(`${idColumn}`).classList.add('highlight-column');
    // document.getElementById(`rectangle_${idColumn}`).classList.remove('d-none');
}


/**
 * Removes the column highlight
 * @param {string} idColumn 
 */
function removeHighlight(idColumn) {
    document.getElementById(`${idColumn}`).classList.remove('highlight-column');
    // document.getElementById(`rectangle_${idColumn}`).classList.add('d-none');
}


/**
 * Moves the current task to the corresponding column
 * @param {string} targetColumn 
 */
function moveTo(targetColumn) {
    let targetArrayIndex = renderedBoardArrays.findIndex(element => element['id'] == targetColumn);
    let targetArray = renderedBoardArrays[targetArrayIndex]['array'];
    let startArrayIndex = renderedBoardArrays.findIndex(element => element['id'] == currentDraggedElement['columnTitle']);
    let startArray = renderedBoardArrays[startArrayIndex]['array'];
    let task = renderedBoardArrays[startArrayIndex]['array'][currentDraggedElement.taskNumber];

    targetArray.push(renderedBoardArrays[startArrayIndex]['array'][currentDraggedElement['taskNumber']]);
    startArray.splice(currentDraggedElement.taskNumber, 1);
    task['columnID'] = renderedBoardArrays[targetArrayIndex]['title'].replace(/ /g,'');
    document.getElementById(`${targetColumn}`).classList.remove('highlight-column');
    
    // allBoardArrays = renderedBoardArrays; --> darf ich nicht machen, da vorher renderedBoardArrays = filteredBoardArrays gemacht wird!
    // renderedBoardArrays = allBoardArrays; --> sobald man eine Task verschiebt, werden wieder alle Tasks angezeigt!
    renderAll();
    saveAllTasksToDatabase();
}


/**
 * Big view of the corresponding task as an overlay
 * @param {string} columnID 
 * @param {integer} taskID 
 */
function showBigView(columnID, taskID) {
    let bigViewContainer = document.getElementById('big_view_container');
    let currentArrayIndex = renderedBoardArrays.findIndex(element => element['id'] == columnID['id']);
    let currentTask = renderedBoardArrays[currentArrayIndex]['array'][taskID];
    
    bigViewContainer.classList.remove('d-none');
    bigViewContainer.innerHTML = bigViewHTML(columnID, taskID, currentTask);

    if (currentTask['contact']) { //prüft zuerst ob die aktuelle Task Kontakte enthält
        addContactsToBigView(currentTask);
    }

    if (currentTask['subtasks']) { //prüft zuerst ob die aktuelle Task Subtask enthält
        addSubtasksToBigView(columnID, taskID, currentTask);
    }
    //lässt die Karte von rechts reinfliegen:
    setTimeout(() => document.getElementById('big_view_card').classList.add('translateX-0'), 100);  //Verzögerung damit die Karte erst außerhalb des Bildschirms dargestellt wird und dann reinfliegt!
}


/**
 * Adds the contacts to the big view
 * @param {JSON} currentTask 
 */
function addContactsToBigView(currentTask) {
    for (let i = 0; i < currentTask['contact'].length; i++) {
            const person = currentTask['contact'][i];
            const initials = `${oneLetterUppercase(person['firstName'])}${oneLetterUppercase(person['lastName'])}`;
            document.getElementById('big_view_contacts_container').innerHTML += /*html*/ `
                <div class="big-view-contacts df-ai-ctr">
                    <div class="big-view-initials" style="background-color: ${person['color']}">${initials}</div>
                    <div class="big-view-contacts-name fs16-fw400">${person['firstName']} ${person['lastName']}</div>
                </div>
            `;
        }
}


/**
 * Adds the subtasks to the big view
 * @param {string} columnID 
 * @param {integer} taskID 
 * @param {JSON} currentTask 
 */
function addSubtasksToBigView(columnID, taskID, currentTask) {
    for (let j = 0; j < currentTask['subtasks'].length; j++) {
            const singleSubtask = currentTask['subtasks'][j];
            document.getElementById('big_view_subtasks_container').innerHTML += /*html*/ `
                <div class="big-view-subtask df-ai-ctr">
                    <div onclick="changeSubtaskStatus(${columnID['id']}, ${taskID}, ${j})" id="subtask_checkbox_${columnID['id']}_t${taskID}_st${j}" class="big-view-checkbox df-ai-ctr">${subtaskCheckbox[singleSubtask['status']]}</div>
                    <div class="big-view-subtask-text fs16-fw400">${singleSubtask['subtaskTitle']}</div>
                </div>
            `;
        }
}


/**
 * Changes the status of the subtask to "open" or "done" and then re-renders the columns
 * @param {string} columnID 
 * @param {integer} taskID 
 * @param {integer} subtaskID 
 */
function changeSubtaskStatus(columnID, taskID, subtaskID) {
    let currentArrayIndex = renderedBoardArrays.findIndex(element => element['id'] == columnID['id']);
    let currentSubtask = renderedBoardArrays[currentArrayIndex]['array'][taskID]['subtasks'][subtaskID];
    let currentSubtaskContainer = document.getElementById(`subtask_checkbox_${columnID['id']}_t${taskID}_st${subtaskID}`);

    if (currentSubtask['status'] == 'open') {
        currentSubtask['status'] = 'done';
    } else {
        currentSubtask['status'] = 'open';
    }
    currentSubtaskContainer.innerHTML = `${subtaskCheckbox[currentSubtask['status']]}`;
    renderAll();
    saveAllTasksToDatabase();
}


/**
 * Closes the big view either with animation or without
 * @param {integer} id 
 */
function closeBigView(id) {
    if (id == 0) {      //zur Fall-Unterscheidung: Kenner "0" kommt vom Schließen der Großansicht (Animation wird ausgeführt)
        document.getElementById('big_view_card').classList.remove('translateX-0');
        setTimeout(() => document.getElementById('big_view_container').classList.add('d-none'),300);    //das Overlay soll erst verschwinden, wenn die Karte rausgeflogen ist!
    } else {    //Kenner "1" kommt vom Löschen oder Editieren der Aufgabe (Animation wird nicht ausgeführt)
        document.getElementById('big_view_container').classList.add('d-none');
        document.getElementById('big_view_card').classList.remove('translateX-0');
    }
    uncheckContacts();
    subtasks = [];
    resetCurrentEditedTaskPriority();
}


/**
 * Delets the current task
 * @param {string} columnID 
 * @param {integer} taskID 
 */
function deleteTask(columnID, taskID) {
    let currentArrayIndex = renderedBoardArrays.findIndex(element => element['id'] == columnID['id']);
    let currentArray = renderedBoardArrays[currentArrayIndex]['array'];
    currentArray.splice(taskID, 1);
    closeBigView(1);
    renderAll();
    saveAllTasksToDatabase();
}


/**
 * Moves the task to the previous column in the mobile view
 * @param {string} columnID 
 * @param {integer} taskID 
 */
function moveUp(columnID, taskID) {
    let currentArrayIndex = renderedBoardArrays.findIndex(element => element['id'] == columnID['id']);

    if (currentArrayIndex > 0) {
        startDragging(columnID, taskID);
        moveTo(renderedBoardArrays[currentArrayIndex - 1]['id']);
        closeBigView(1);
    }
}


/**
 * Moves the task to the next column in the mobile view
 * @param {string} columnID 
 * @param {integer} taskID 
 */
function moveDown(columnID, taskID) {
    let currentArrayIndex = renderedBoardArrays.findIndex(element => element['id'] == columnID['id']);

    if (currentArrayIndex < 3) {
        startDragging(columnID, taskID);
        moveTo(renderedBoardArrays[currentArrayIndex + 1]['id']);
        closeBigView(1);
    }
}