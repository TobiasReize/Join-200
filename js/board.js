let low = `
    <svg width="21" height="16" viewBox="0 0 21 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path class="prio-low" d="M10.3555 9.69779C10.1209 9.69819 9.89234 9.62335 9.70349 9.48427L0.800382 2.91453C0.684543 2.82898 0.586704 2.72146 0.512448 2.59812C0.438193 2.47478 0.388977 2.33803 0.367609 2.19569C0.324455 1.90821 0.397354 1.61537 0.57027 1.3816C0.743187 1.14782 1.00196 0.992265 1.28965 0.949143C1.57734 0.906021 1.8704 0.978866 2.10434 1.15165L10.3555 7.23414L18.6066 1.15165C18.7224 1.0661 18.854 1.00418 18.9938 0.969432C19.1336 0.934685 19.2788 0.927791 19.4213 0.949143C19.5637 0.970495 19.7006 1.01967 19.824 1.09388C19.9474 1.16808 20.055 1.26584 20.1407 1.3816C20.2263 1.49735 20.2883 1.62882 20.323 1.7685C20.3578 1.90818 20.3647 2.05334 20.3433 2.19569C20.322 2.33803 20.2727 2.47478 20.1985 2.59812C20.1242 2.72146 20.0264 2.82898 19.9106 2.91453L11.0075 9.48427C10.8186 9.62335 10.5901 9.69819 10.3555 9.69779Z" fill="white"/>
        <path class="prio-low" d="M10.3555 15.4463C10.1209 15.4467 9.89234 15.3719 9.70349 15.2328L0.800381 8.66307C0.566436 8.49028 0.410763 8.2317 0.367609 7.94422C0.324455 7.65674 0.397354 7.3639 0.57027 7.13013C0.743187 6.89636 1.00196 6.7408 1.28965 6.69768C1.57734 6.65456 1.8704 6.7274 2.10434 6.90019L10.3555 12.9827L18.6066 6.90019C18.8405 6.7274 19.1336 6.65456 19.4213 6.69768C19.709 6.7408 19.9678 6.89636 20.1407 7.13013C20.3136 7.3639 20.3865 7.65674 20.3433 7.94422C20.3002 8.2317 20.1445 8.49028 19.9106 8.66307L11.0075 15.2328C10.8186 15.3719 10.5901 15.4467 10.3555 15.4463Z" fill="white"/>
    </svg>
`;

let medium = `
    <svg width="21" height="8" viewBox="0 0 21 8" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path class="prio-medium" d="M19.7596 7.91717H1.95136C1.66071 7.91717 1.38197 7.80087 1.17645 7.59386C0.970928 7.38685 0.855469 7.10608 0.855469 6.81332C0.855469 6.52056 0.970928 6.23979 1.17645 6.03278C1.38197 5.82577 1.66071 5.70947 1.95136 5.70947H19.7596C20.0502 5.70947 20.329 5.82577 20.5345 6.03278C20.74 6.23979 20.8555 6.52056 20.8555 6.81332C20.8555 7.10608 20.74 7.38685 20.5345 7.59386C20.329 7.80087 20.0502 7.91717 19.7596 7.91717Z" fill="white"/>
        <path class="prio-medium" d="M19.7596 2.67388H1.95136C1.66071 2.67388 1.38197 2.55759 1.17645 2.35057C0.970928 2.14356 0.855469 1.86279 0.855469 1.57004C0.855469 1.27728 0.970928 0.996508 1.17645 0.789496C1.38197 0.582485 1.66071 0.466187 1.95136 0.466187L19.7596 0.466187C20.0502 0.466187 20.329 0.582485 20.5345 0.789496C20.74 0.996508 20.8555 1.27728 20.8555 1.57004C20.8555 1.86279 20.74 2.14356 20.5345 2.35057C20.329 2.55759 20.0502 2.67388 19.7596 2.67388Z" fill="white"/>
    </svg>
`;

let urgent = `
    <svg width="21" height="16" viewBox="0 0 21 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path class="prio-urgent" d="M19.2597 15.4464C19.0251 15.4468 18.7965 15.3719 18.6077 15.2328L10.3556 9.14965L2.10356 15.2328C1.98771 15.3184 1.85613 15.3803 1.71633 15.4151C1.57652 15.4498 1.43124 15.4567 1.28877 15.4354C1.14631 15.414 1.00944 15.3648 0.885997 15.2906C0.762552 15.2164 0.654943 15.1186 0.569314 15.0029C0.483684 14.8871 0.421712 14.7556 0.386936 14.6159C0.352159 14.4762 0.345259 14.331 0.366629 14.1887C0.409788 13.9012 0.565479 13.6425 0.799451 13.4697L9.70356 6.89926C9.89226 6.75967 10.1208 6.68433 10.3556 6.68433C10.5904 6.68433 10.819 6.75967 11.0077 6.89926L19.9118 13.4697C20.0977 13.6067 20.2356 13.7988 20.3057 14.0186C20.3759 14.2385 20.3747 14.4749 20.3024 14.6941C20.2301 14.9133 20.0904 15.1041 19.9031 15.2391C19.7159 15.3742 19.4907 15.4468 19.2597 15.4464Z" fill="white"/>
        <path class="prio-urgent" d="M19.2597 9.69733C19.0251 9.69774 18.7965 9.62289 18.6077 9.48379L10.3556 3.40063L2.10356 9.48379C1.86959 9.6566 1.57651 9.72945 1.28878 9.68633C1.00105 9.6432 0.742254 9.48762 0.569318 9.25383C0.396382 9.02003 0.323475 8.72716 0.366634 8.43964C0.409793 8.15213 0.565483 7.89352 0.799455 7.72072L9.70356 1.15024C9.89226 1.01065 10.1208 0.935303 10.3556 0.935303C10.5904 0.935303 10.819 1.01065 11.0077 1.15024L19.9118 7.72072C20.0977 7.85763 20.2356 8.04974 20.3057 8.26962C20.3759 8.4895 20.3747 8.72591 20.3024 8.94509C20.2301 9.16427 20.0904 9.35503 19.9031 9.49012C19.7159 9.62521 19.4907 9.69773 19.2597 9.69733Z" fill="white"/>
    </svg>
`;

let toDoTasks = [];
let inProgressTasks = [
    {
        category: 'User Story',
        title: 'Daily Kochwelt Recipe',
        description: 'Implement daily recipe and portion calculator...',
        persons: ['MK', 'OS', 'XG'],
        priority: medium
    }
];
let awaitFeedbackTasks = [
    {
        category: 'Technical Task',
        title: 'HTML Base Template Creation',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil laboriosam, illum laudantium vitae voluptatem tempora tenetur est harum autem? Nostrum, quam. Eos asperiores necessitatibus minus fuga obcaecati amet? Molestiae, nobis.',
        persons: ['DE', 'BZ', 'AS'],
        priority: low
    },
    {
        category: 'User Story',
        title: 'Daily Kochwelt Recipe',
        description: 'Implement daily recipe and portion calculator...',
        persons: ['MK', 'OS', 'XG'],
        priority: urgent
    }
];
let doneTasks = [];

let allBoardArrays = [     //Hilfsarray, in dem nochmal alle Board-Arrays zusammengefasst sind! --> Dieses wird in der Regel vom Backend runtergeladen!
    {
        title: 'To Do',
        id: 'to_do',
        array: toDoTasks
    },
    {
        title: 'In Progress',
        id: 'in_progress',
        array: inProgressTasks
    },
    {
        title: 'Await Feedback',
        id: 'await_feedback',
        array: awaitFeedbackTasks
    },
    {
        title: 'Done',
        id: 'done',
        array: doneTasks
    }
];

let renderedBoardArrays = [     //Hilfsarray für die tatsächlich dargestellten Spalten (am Anfang immer leer!)
    {
        title: 'To Do',
        id: 'to_do',
        array: []
    },
    {
        title: 'In Progress',
        id: 'in_progress',
        array: []
    },
    {
        title: 'Await Feedback',
        id: 'await_feedback',
        array: []
    },
    {
        title: 'Done',
        id: 'done',
        array: []
    }
];

let filteredBoardArrays = [     //Hilfsarray für die gefilterten Tasks durch die Suchleiste (am Anfang immer leer!)
    {
        title: 'To Do',
        id: 'to_do',
        array: []
    },
    {
        title: 'In Progress',
        id: 'in_progress',
        array: []
    },
    {
        title: 'Await Feedback',
        id: 'await_feedback',
        array: []
    },
    {
        title: 'Done',
        id: 'done',
        array: []
    }
];

let currentDraggedElement;


function initBoard() {
    includeHTML();
    renderedBoardArrays = allBoardArrays;
    renderAll();
}


function renderAll() {  //Diese Funktion rendert alle Board-Spalten mit ihren Karten
    for (let i = 0; i < renderedBoardArrays.length; i++) {
        const boardArray = renderedBoardArrays[i];
        renderColumn(boardArray.title, boardArray.id, boardArray.array);
    }
}


function renderColumn(columnTitle, columnID, columnArray) {     //Rendert die jeweilige Spalte mit ihren Karten
    let columnContainer = document.getElementById(columnID);
    columnContainer.innerHTML = '';

    if (columnArray.length == 0) {
        columnContainer.innerHTML = `<div class="empty-card">No tasks ${columnTitle}</div>`;
    } else {
        for (let i = 0; i < columnArray.length; i++) {
            const task = columnArray[i];
            columnContainer.innerHTML += taskCardHTML(columnID, i, task);
            
            for (let j = 0; j < task.persons.length; j++) {
                const person = task.persons[j];
                document.getElementById(`${columnID}_persons_container_${i}`).innerHTML += `<div class="initials">${person}</div>`;
            }
        }
    }
}


function taskCardHTML(columnID, i, task) {  //HTML-Template für ausgefüllte Karten
    return /*html*/ `
        <div draggable="true" id="card_${columnID}_${i}" class="full-card" ondragstart="startDragging(${columnID}, ${i})" onmousedown="rotateCard(${columnID}, ${i})" onmouseup="endRotateCard(${columnID}, ${i})">
            <div class="task-category category-color-mint">${task.category}</div>
            <div class="task-title">${task.title}</div>
            <p class="task-description">${task.description}</p>
            <div class="subtasks-container df-ai-ctr">
                <div class="progress-bar">
                    <div class="bar-of-progress" id="bar_of_progress"></div>
                </div>
                <span class="subtask-text">1/2 Subtasks</span>
            </div>
            <div class="persons-priority-container ai-ctr-space-btwn">
                <div id="${columnID}_persons_container_${i}" class="persons-container df-ai-ctr"></div>
                ${task.priority}
            </div>
        </div>
    `;
}


function allowDrop(event) {    //Funktion, die das Fallenlassen (Drop) in andere Elemente ermöglicht (ist standardmäßig nicht erlaubt, daher muss es umgestellt werden!)
    event.preventDefault();
}


function moveTo(idColumn) {   //Funktion, die die Tasks/Karten verschiebt (ergänzt und entfernt die aktuelle Task von dem jeweiligen Array)
    let targetArrayIndex = renderedBoardArrays.findIndex(element => element.id == idColumn);
    let targetArray = renderedBoardArrays[targetArrayIndex]['array'];
    let startArrayIndex = renderedBoardArrays.findIndex(element => element.id == currentDraggedElement.columnTitle);
    let startArray = renderedBoardArrays[startArrayIndex]['array'];

    targetArray.push(renderedBoardArrays[startArrayIndex]['array'][currentDraggedElement.taskNumber]);
    startArray.splice(currentDraggedElement.taskNumber, 1);
    // allBoardArrays = renderedBoardArrays; --> darf ich nicht machen, da vorher renderedBoardArrays = filteredBoardArrays gemacht wird!
    // renderedBoardArrays = allBoardArrays; --> sobald man eine Task verschiebt, werden wieder alle Tasks angezeigt!
    renderAll();
}


function startDragging(columnID, taskID) {  //Die Infos des aktuellen Drag-Elements werden in einer globalen Variable zwischengespeichert
    currentDraggedElement = {
        columnTitle: columnID.id,
        taskNumber: taskID
    }
}


function rotateCard(columnID, taskID) {     //Karte wird beim Mausklick gedreht
    document.getElementById(`card_${columnID.id}_${taskID}`).classList.add('rotate-card');
}


function endRotateCard(columnID, taskID) {      //Karte wird wieder in den Ausgangszustand zurückversetzt, wenn die Maustaste losgelassen wird
    document.getElementById(`card_${columnID.id}_${taskID}`).classList.remove('rotate-card');
}


function searchTasks() {    //Funktion für die Suchleiste. Die gerenderten Arrays werden gefiltert und in ein extra-Array gespeichert!
    let searchField = document.getElementById('search_field');
    let searchFieldInput = searchField.value.trim().toLowerCase();
    renderedBoardArrays = allBoardArrays;   //wenn man seine Eingabe wieder löscht, sollen wieder alle Tasks angezeigt werden (zurücksetzen)!

    for (let i = 0; i < renderedBoardArrays.length; i++) {
        const searchedArray = renderedBoardArrays[i]['array'];
        filteredBoardArrays[i]['array'] = [];   //Bevor in das filteredBoardArrays die Tasks reingepusht werden, muss es zurückgesetzt werden, damit nur die aktuell gefilterten Tasks angezeigt werden! (und keine früheren, gefilterten Tasks!)
        
        for (let j = 0; j < searchedArray.length; j++) {
            const singleTask = searchedArray[j];
            if (singleTask['title'].trim().toLowerCase().includes(searchFieldInput)) {
                filteredBoardArrays[i]['array'].push(singleTask);   //Die gefilterten Arrays werden in einem extra-Array gespeichert
            }
        }
    }
    renderedBoardArrays = filteredBoardArrays;
    renderAll();
}