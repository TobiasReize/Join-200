let priorities = {
    'low':      `<svg width="21" height="16" viewBox="0 0 21 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path class="prio-low" d="M10.3555 9.69779C10.1209 9.69819 9.89234 9.62335 9.70349 9.48427L0.800382 2.91453C0.684543 2.82898 0.586704 2.72146 0.512448 2.59812C0.438193 2.47478 0.388977 2.33803 0.367609 2.19569C0.324455 1.90821 0.397354 1.61537 0.57027 1.3816C0.743187 1.14782 1.00196 0.992265 1.28965 0.949143C1.57734 0.906021 1.8704 0.978866 2.10434 1.15165L10.3555 7.23414L18.6066 1.15165C18.7224 1.0661 18.854 1.00418 18.9938 0.969432C19.1336 0.934685 19.2788 0.927791 19.4213 0.949143C19.5637 0.970495 19.7006 1.01967 19.824 1.09388C19.9474 1.16808 20.055 1.26584 20.1407 1.3816C20.2263 1.49735 20.2883 1.62882 20.323 1.7685C20.3578 1.90818 20.3647 2.05334 20.3433 2.19569C20.322 2.33803 20.2727 2.47478 20.1985 2.59812C20.1242 2.72146 20.0264 2.82898 19.9106 2.91453L11.0075 9.48427C10.8186 9.62335 10.5901 9.69819 10.3555 9.69779Z" fill="white"/>
                    <path class="prio-low" d="M10.3555 15.4463C10.1209 15.4467 9.89234 15.3719 9.70349 15.2328L0.800381 8.66307C0.566436 8.49028 0.410763 8.2317 0.367609 7.94422C0.324455 7.65674 0.397354 7.3639 0.57027 7.13013C0.743187 6.89636 1.00196 6.7408 1.28965 6.69768C1.57734 6.65456 1.8704 6.7274 2.10434 6.90019L10.3555 12.9827L18.6066 6.90019C18.8405 6.7274 19.1336 6.65456 19.4213 6.69768C19.709 6.7408 19.9678 6.89636 20.1407 7.13013C20.3136 7.3639 20.3865 7.65674 20.3433 7.94422C20.3002 8.2317 20.1445 8.49028 19.9106 8.66307L11.0075 15.2328C10.8186 15.3719 10.5901 15.4467 10.3555 15.4463Z" fill="white"/>
                </svg>`,
    'medium':  `<svg width="21" height="8" viewBox="0 0 21 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path class="prio-medium" d="M19.7596 7.91717H1.95136C1.66071 7.91717 1.38197 7.80087 1.17645 7.59386C0.970928 7.38685 0.855469 7.10608 0.855469 6.81332C0.855469 6.52056 0.970928 6.23979 1.17645 6.03278C1.38197 5.82577 1.66071 5.70947 1.95136 5.70947H19.7596C20.0502 5.70947 20.329 5.82577 20.5345 6.03278C20.74 6.23979 20.8555 6.52056 20.8555 6.81332C20.8555 7.10608 20.74 7.38685 20.5345 7.59386C20.329 7.80087 20.0502 7.91717 19.7596 7.91717Z" fill="white"/>
                    <path class="prio-medium" d="M19.7596 2.67388H1.95136C1.66071 2.67388 1.38197 2.55759 1.17645 2.35057C0.970928 2.14356 0.855469 1.86279 0.855469 1.57004C0.855469 1.27728 0.970928 0.996508 1.17645 0.789496C1.38197 0.582485 1.66071 0.466187 1.95136 0.466187L19.7596 0.466187C20.0502 0.466187 20.329 0.582485 20.5345 0.789496C20.74 0.996508 20.8555 1.27728 20.8555 1.57004C20.8555 1.86279 20.74 2.14356 20.5345 2.35057C20.329 2.55759 20.0502 2.67388 19.7596 2.67388Z" fill="white"/>
                </svg>`,
    'urgent':  `<svg width="21" height="16" viewBox="0 0 21 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path class="prio-urgent" d="M19.2597 15.4464C19.0251 15.4468 18.7965 15.3719 18.6077 15.2328L10.3556 9.14965L2.10356 15.2328C1.98771 15.3184 1.85613 15.3803 1.71633 15.4151C1.57652 15.4498 1.43124 15.4567 1.28877 15.4354C1.14631 15.414 1.00944 15.3648 0.885997 15.2906C0.762552 15.2164 0.654943 15.1186 0.569314 15.0029C0.483684 14.8871 0.421712 14.7556 0.386936 14.6159C0.352159 14.4762 0.345259 14.331 0.366629 14.1887C0.409788 13.9012 0.565479 13.6425 0.799451 13.4697L9.70356 6.89926C9.89226 6.75967 10.1208 6.68433 10.3556 6.68433C10.5904 6.68433 10.819 6.75967 11.0077 6.89926L19.9118 13.4697C20.0977 13.6067 20.2356 13.7988 20.3057 14.0186C20.3759 14.2385 20.3747 14.4749 20.3024 14.6941C20.2301 14.9133 20.0904 15.1041 19.9031 15.2391C19.7159 15.3742 19.4907 15.4468 19.2597 15.4464Z" fill="white"/>
                    <path class="prio-urgent" d="M19.2597 9.69733C19.0251 9.69774 18.7965 9.62289 18.6077 9.48379L10.3556 3.40063L2.10356 9.48379C1.86959 9.6566 1.57651 9.72945 1.28878 9.68633C1.00105 9.6432 0.742254 9.48762 0.569318 9.25383C0.396382 9.02003 0.323475 8.72716 0.366634 8.43964C0.409793 8.15213 0.565483 7.89352 0.799455 7.72072L9.70356 1.15024C9.89226 1.01065 10.1208 0.935303 10.3556 0.935303C10.5904 0.935303 10.819 1.01065 11.0077 1.15024L19.9118 7.72072C20.0977 7.85763 20.2356 8.04974 20.3057 8.26962C20.3759 8.4895 20.3747 8.72591 20.3024 8.94509C20.2301 9.16427 20.0904 9.35503 19.9031 9.49012C19.7159 9.62521 19.4907 9.69773 19.2597 9.69733Z" fill="white"/>
                </svg>`
}

let colorsCategories = {
    'Technical Task': '#1FD7C1',
    'User Story': '#0038FF'
}

let subtaskCheckbox = {
    'open': `<svg width="24" height="24" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="4" y="4.96582" width="16" height="16" rx="3" stroke="#2A3647" stroke-width="2"/>
            </svg>`,
    'done': `<svg width="24" height="24" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 11.9658V17.9658C20 19.6227 18.6569 20.9658 17 20.9658H7C5.34315 20.9658 4 19.6227 4 17.9658V7.96582C4 6.30897 5.34315 4.96582 7 4.96582H15" stroke="#2A3647" stroke-width="2" stroke-linecap="round"/>
                <path d="M8 12.9658L12 16.9658L20 5.46582" stroke="#2A3647" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>`
}

let toDoTasks = [];
let inProgressTasks = [
    {
        'category': 'User Story',
        'title': 'Daily Kochwelt Recipe',
        'description': 'Implement daily recipe and portion calculator',
        'subtasks': [
            {
            'subtaskTitle': 'Subtask 1',
            'status': 'open'
            },
            {
            'subtaskTitle': 'Subtask 2',
            'status': 'open'
            }],
        'contacts': [
            {
                'firstName': 'Emmanuel',
                'lastName': 'Mauer'
            },
            {
                'firstName': 'Marcel',
                'lastName': 'Bauer'
            }
        ],
        'date': '2024-05-02',
        'priority': 'medium'
    }
];
let awaitFeedbackTasks = [
    {
        'category': 'Technical Task',
        'title': 'HTML Base Template Creation',
        'description': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil laboriosam, illum laudantium vitae voluptatem tempora tenetur est harum autem? Nostrum, quam. Eos asperiores necessitatibus minus fuga obcaecati amet? Molestiae, nobis.',
        'subtasks': [],
        'contacts': [
            {
                'firstName': 'Anton',
                'lastName': 'Mayer'
            },
            {
                'firstName': 'Sofia',
                'lastName': 'Müller'
            },
            {
                'firstName': 'Benedikt',
                'lastName': 'Ziegler'
            }
        ],
        'date': '2023-06-09',
        'priority': 'low'
    },
    {
        'category': 'User Story',
        'title': 'Daily Kochwelt Recipe',
        'description': 'Implement daily recipe and portion calculator',
        'subtasks': [
            {
            'subtaskTitle': 'Subtask 1',
            'status': 'done'
            },
            {
            'subtaskTitle': 'Subtask 2',
            'status': 'done'
            },
            {
            'subtaskTitle': 'Subtask 3',
            'status': 'open'
            }],
        'contacts': [
            {
                'firstName': 'Marcel',
                'lastName': 'Bauer'
            },
            {
                'firstName': 'Klaus',
                'lastName': 'Lang'
            },
            {
                'firstName': 'Sofia',
                'lastName': 'Müller'
            }
        ],
        'date': '2024-07-18',
        'priority': 'urgent'
    }
];
let doneTasks = [];

let allBoardArrays = [     //Hilfsarray, in dem nochmal alle Board-Arrays zusammengefasst sind! --> Dieses wird in der Regel vom Backend runtergeladen!
    {
        'title': 'To Do',
        'id': 'to_do',
        'array': toDoTasks
    },
    {
        'title': 'In Progress',
        'id': 'in_progress',
        'array': inProgressTasks
    },
    {
        'title': 'Await Feedback',
        'id': 'await_feedback',
        'array': awaitFeedbackTasks
    },
    {
        'title': 'Done',
        'id': 'done',
        'array': doneTasks
    }
];

let renderedBoardArrays = [     //Hilfsarray für die tatsächlich dargestellten Spalten (am Anfang immer leer!)
    {
        'title': 'To Do',
        'id': 'to_do',
        'array': []
    },
    {
        'title': 'In Progress',
        'id': 'in_progress',
        'array': []
    },
    {
        'title': 'Await Feedback',
        'id': 'await_feedback',
        'array': []
    },
    {
        'title': 'Done',
        'id': 'done',
        'array': []
    }
];

let filteredBoardArrays = [     //Hilfsarray für die gefilterten Tasks durch die Suchleiste (am Anfang immer leer!)
    {
        'title': 'To Do',
        'id': 'to_do',
        'array': []
    },
    {
        'title': 'In Progress',
        'id': 'in_progress',
        'array': []
    },
    {
        'title': 'Await Feedback',
        'id': 'await_feedback',
        'array': []
    },
    {
        'title': 'Done',
        'id': 'done',
        'array': []
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
        renderColumn(boardArray['title'], boardArray['id'], boardArray['array']);
    }
}


function renderColumn(columnTitle, columnID, columnArray) {     //Rendert die jeweilige Spalte mit ihren Karten
    let columnContainer = document.getElementById(columnID);
    columnContainer.innerHTML = '';

    //Prüft ob die einzelnen Spalten leer oder voll sind:
    if (columnArray.length == 0) {
        columnContainer.innerHTML = `<div class="empty-card">No tasks ${columnTitle}</div>`;    //für leere Spalten
    } else {
        for (let i = 0; i < columnArray.length; i++) {
            const task = columnArray[i];
            columnContainer.innerHTML += taskCardHTML(columnID, i, task);
            
            //prüft ob die aktuelle Task Subtasks enthält, wenn ja wird die Progress-bar ergänzt sonst nicht:
            if (task['subtasks'].length != 0) {
                
                //Zählen der erledigten Subtasks:
                let doneSubtasks = 0;
                for (let j = 0; j < task['subtasks'].length; j++) {
                    const singleSubtask = task['subtasks'][j];
                    if (singleSubtask['status'] == 'done') {
                        doneSubtasks++;
                    }
                }
                //Einfügen der Progress-bar und Text:
                document.getElementById(`${columnID}_subtasks_container_${i}`).innerHTML = /*html*/ `
                    <div class="progress-bar">
                        <div class="bar-of-progress" style="width: ${(doneSubtasks/task['subtasks'].length)*100}%"></div>
                    </div>
                    <span class="subtask-text">
                        ${doneSubtasks}/${task['subtasks'].length} Subtasks
                    </span>
                `;
            }

            //fügt die Kontakte hinzu:
            for (let k = 0; k < task['contacts'].length; k++) {
                const personFirstName = task['contacts'][k]['firstName'];
                const personLastName = task['contacts'][k]['lastName'];
                const initials = `${oneLetterUppercase(personFirstName)}${oneLetterUppercase(personLastName)}`;
                document.getElementById(`${columnID}_contacts_container_${i}`).innerHTML += `<div class="initials">${initials}</div>`;
            }
        }
    }
}


function taskCardHTML(columnID, i, task) {  //HTML-Template für ausgefüllte Karten
    return /*html*/ `
        <div draggable="true" id="card_${columnID}_${i}" class="full-card" ondragstart="startDragging(${columnID}, ${i})" onmousedown="rotateCard(${columnID}, ${i})" onmouseup="endRotateCard(${columnID}, ${i})" onclick="showBigView(${columnID}, ${i})">
            <div class="task-category" style="background-color: ${colorsCategories[task['category']]}">${task['category']}</div>
            <div class="task-title">${task['title']}</div>
            <p class="task-description">${task['description']}</p>
            <div id="${columnID}_subtasks_container_${i}" class="subtasks-container"></div>
            <div class="ai-ctr-space-btwn">
                <div id="${columnID}_contacts_container_${i}" class="df-ai-ctr"></div>
                ${priorities[task['priority']]}
            </div>
        </div>
    `;
}


function showBigView(columnID, index) {
    let bigViewContainer = document.getElementById('big_view_container');
    let currentArrayIndex = renderedBoardArrays.findIndex(element => element['id'] == columnID['id']);
    let currentTask = renderedBoardArrays[currentArrayIndex]['array'][index];
    
    bigViewContainer.classList.remove('d-none');
    bigViewContainer.innerHTML = /*html*/ `
        <div id="big_view_card" class="big-view-card" onclick="stopPropagation(event)">
            <div class="ai-ctr-space-btwn m-btm24">
                <div class="big-view-category" style="background-color: ${colorsCategories[currentTask['category']]}">${currentTask['category']}</div>
                <svg onclick="closeBigView(0)" class="big-view-close" width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <mask id="mask0_71720_5473" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="25">
                        <rect y="0.96582" width="24" height="24" fill="#D9D9D9"/>
                    </mask>
                    <g mask="url(#mask0_71720_5473)">
                        <path d="M11.9998 14.3659L7.0998 19.2659C6.91647 19.4492 6.68314 19.5409 6.3998 19.5409C6.11647 19.5409 5.88314 19.4492 5.6998 19.2659C5.51647 19.0825 5.4248 18.8492 5.4248 18.5659C5.4248 18.2825 5.51647 18.0492 5.6998 17.8659L10.5998 12.9659L5.6998 8.06587C5.51647 7.88254 5.4248 7.6492 5.4248 7.36587C5.4248 7.08254 5.51647 6.8492 5.6998 6.66587C5.88314 6.48254 6.11647 6.39087 6.3998 6.39087C6.68314 6.39087 6.91647 6.48254 7.0998 6.66587L11.9998 11.5659L16.8998 6.66587C17.0831 6.48254 17.3165 6.39087 17.5998 6.39087C17.8831 6.39087 18.1165 6.48254 18.2998 6.66587C18.4831 6.8492 18.5748 7.08254 18.5748 7.36587C18.5748 7.6492 18.4831 7.88254 18.2998 8.06587L13.3998 12.9659L18.2998 17.8659C18.4831 18.0492 18.5748 18.2825 18.5748 18.5659C18.5748 18.8492 18.4831 19.0825 18.2998 19.2659C18.1165 19.4492 17.8831 19.5409 17.5998 19.5409C17.3165 19.5409 17.0831 19.4492 16.8998 19.2659L11.9998 14.3659Z" fill="#2A3647"/>
                    </g>
                </svg>
            </div>
            <h1 class="m-btm24">${currentTask['title']}</h1>
            <p class="fs20-fw400 m-btm24">${currentTask['description']}</p>
            <div class="big-view-date-container df-ai-ctr fs20-fw400 m-btm24">
                <div class="default-color">Due date:</div>
                <div>${currentTask['date']}</div>
            </div>
            <div class="big-view-priority-container df-ai-ctr fs20-fw400 m-btm24">
                <div class="default-color">Priority:</div>
                <div class="df-ai-ctr gap-10">
                    <div>${firstLetterUppercase(currentTask['priority'])}</div>
                    <div>${priorities[currentTask['priority']]}</div>
                </div>
            </div>
            <div id="big_view_contacts_container" class="m-btm24">
                <div class="default-color fs20-fw400">Assigned To:</div>
            </div>
            <div id="big_view_subtasks_container" class="m-btm24">
                <div class="big-view-subtask-headline default-color fs20-fw400">Subtasks</div>
            </div>
            <div class="big-view-lowest-container df-ai-ctr">
                <div class="big-view-delete-edit-container df-ai-ctr">
                    <div class="big-view-delete-container df-ai-ctr" onclick="deleteTask(${columnID['id']}, ${index})">
                        <svg width="24" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <mask id="mask0_75592_9951" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="25" height="24">
                                <rect x="0.144531" width="24" height="24" fill="#D9D9D9"/>
                            </mask>
                            <g mask="url(#mask0_75592_9951)">
                                <path d="M7.14453 21C6.59453 21 6.1237 20.8042 5.73203 20.4125C5.34036 20.0208 5.14453 19.55 5.14453 19V6C4.8612 6 4.6237 5.90417 4.43203 5.7125C4.24036 5.52083 4.14453 5.28333 4.14453 5C4.14453 4.71667 4.24036 4.47917 4.43203 4.2875C4.6237 4.09583 4.8612 4 5.14453 4H9.14453C9.14453 3.71667 9.24036 3.47917 9.43203 3.2875C9.6237 3.09583 9.8612 3 10.1445 3H14.1445C14.4279 3 14.6654 3.09583 14.857 3.2875C15.0487 3.47917 15.1445 3.71667 15.1445 4H19.1445C19.4279 4 19.6654 4.09583 19.857 4.2875C20.0487 4.47917 20.1445 4.71667 20.1445 5C20.1445 5.28333 20.0487 5.52083 19.857 5.7125C19.6654 5.90417 19.4279 6 19.1445 6V19C19.1445 19.55 18.9487 20.0208 18.557 20.4125C18.1654 20.8042 17.6945 21 17.1445 21H7.14453ZM7.14453 6V19H17.1445V6H7.14453ZM9.14453 16C9.14453 16.2833 9.24036 16.5208 9.43203 16.7125C9.6237 16.9042 9.8612 17 10.1445 17C10.4279 17 10.6654 16.9042 10.857 16.7125C11.0487 16.5208 11.1445 16.2833 11.1445 16V9C11.1445 8.71667 11.0487 8.47917 10.857 8.2875C10.6654 8.09583 10.4279 8 10.1445 8C9.8612 8 9.6237 8.09583 9.43203 8.2875C9.24036 8.47917 9.14453 8.71667 9.14453 9V16ZM13.1445 16C13.1445 16.2833 13.2404 16.5208 13.432 16.7125C13.6237 16.9042 13.8612 17 14.1445 17C14.4279 17 14.6654 16.9042 14.857 16.7125C15.0487 16.5208 15.1445 16.2833 15.1445 16V9C15.1445 8.71667 15.0487 8.47917 14.857 8.2875C14.6654 8.09583 14.4279 8 14.1445 8C13.8612 8 13.6237 8.09583 13.432 8.2875C13.2404 8.47917 13.1445 8.71667 13.1445 9V16Z" fill="#2A3647"/>
                            </g>
                        </svg>
                        <span>Delete</span>
                    </div>
                    <div class="big-view-separator"></div>
                    <div class="big-view-edit-container df-ai-ctr">
                        <svg width="24" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <mask id="mask0_75592_9969" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="25" height="24">
                                <rect x="0.144531" width="24" height="24" fill="#D9D9D9"/>
                            </mask>
                            <g mask="url(#mask0_75592_9969)">
                                <path d="M5.14453 19H6.54453L15.1695 10.375L13.7695 8.975L5.14453 17.6V19ZM19.4445 8.925L15.1945 4.725L16.5945 3.325C16.9779 2.94167 17.4487 2.75 18.007 2.75C18.5654 2.75 19.0362 2.94167 19.4195 3.325L20.8195 4.725C21.2029 5.10833 21.4029 5.57083 21.4195 6.1125C21.4362 6.65417 21.2529 7.11667 20.8695 7.5L19.4445 8.925ZM17.9945 10.4L7.39453 21H3.14453V16.75L13.7445 6.15L17.9945 10.4Z" fill="#2A3647"/>
                            </g>
                        </svg>
                        <span>Edit</span>
                    </div>
                </div>
            </div>
        </div>
    `;

    //fügt die Kontakte der Großansicht hinzu:
    for (let i = 0; i < currentTask['contacts'].length; i++) {
        const person = currentTask['contacts'][i];
        const initials = `${oneLetterUppercase(person['firstName'])}${oneLetterUppercase(person['lastName'])}`;
        document.getElementById('big_view_contacts_container').innerHTML += /*html*/ `
            <div class="big-view-contacts df-ai-ctr">
                <div class="big-view-initials">${initials}</div>
                <div class="big-view-contacts-name">${person['firstName']} ${person['lastName']}</div>
            </div>
        `;
    }

    //fügt die Subtasks der Großansicht hinzu:
    for (let j = 0; j < currentTask['subtasks'].length; j++) {
        const singleSubtask = currentTask['subtasks'][j];
        document.getElementById('big_view_subtasks_container').innerHTML += /*html*/ `
            <div class="big-view-subtask df-ai-ctr">
                <div class="big-view-checkbox df-ai-ctr">${subtaskCheckbox[singleSubtask['status']]}</div>
                <div class="big-view-subtask-text">${singleSubtask['subtaskTitle']}</div>
            </div>
        `;
    }

    //lässt die Karte von rechts reinfliegen:
    setTimeout(() => document.getElementById('big_view_card').classList.add('translateX-0'), 100);  //Verzögerung damit die Karte erst außerhalb des Bildschirms dargestellt wird und dann reinfliegt!
}


function closeBigView(id) {       //Schließt die Großansicht wieder
    if (id == 0) {      //zur Fall-Unterscheidung: Kenner "0" kommt vom Schließen der Großansicht (Animation wird ausgeführt)
        document.getElementById('big_view_card').classList.remove('translateX-0');
        setTimeout(() => document.getElementById('big_view_container').classList.add('d-none'),300);    //zur Verzögerung für die Animation
    } else {    //Kenner "1" kommt vom Löschen der Aufgabe (Animation wird nicht ausgeführt)
        document.getElementById('big_view_container').classList.add('d-none');
        document.getElementById('big_view_card').classList.remove('translateX-0');
    }
}


function moveTo(idColumn) {   //Funktion, die die Tasks/Karten verschiebt (ergänzt und entfernt die aktuelle Task von dem jeweiligen Array)
    let targetArrayIndex = renderedBoardArrays.findIndex(element => element['id'] == idColumn);
    let targetArray = renderedBoardArrays[targetArrayIndex]['array'];
    let startArrayIndex = renderedBoardArrays.findIndex(element => element['id'] == currentDraggedElement['columnTitle']);
    let startArray = renderedBoardArrays[startArrayIndex]['array'];

    targetArray.push(renderedBoardArrays[startArrayIndex]['array'][currentDraggedElement['taskNumber']]);
    startArray.splice(currentDraggedElement.taskNumber, 1);
    // allBoardArrays = renderedBoardArrays; --> darf ich nicht machen, da vorher renderedBoardArrays = filteredBoardArrays gemacht wird!
    // renderedBoardArrays = allBoardArrays; --> sobald man eine Task verschiebt, werden wieder alle Tasks angezeigt!
    renderAll();
}


function startDragging(columnID, taskID) {  //Die Infos des aktuellen Drag-Elements werden in einer globalen Variable zwischengespeichert
    currentDraggedElement = {
        'columnTitle': columnID['id'],  //Hier muss nochmal extra die 'id' angesprochen werden?
        'taskNumber': taskID
    }

    //In der Spalte vor und nach dem aktuellen Drag-Elements soll ein gestricheltes Rechteck (Platzhalter) angezeigt werden:
    // let startArrayIndex = renderedBoardArrays.findIndex(element => element['id'] == currentDraggedElement['columnTitle']);
    // renderedBoardArrays[startArrayIndex + 1]['array'].push();
    // renderedBoardArrays[startArrayIndex - 1]['array'].push();
}


function rotateCard(columnID, taskID) {     //Karte wird beim Mausklick gedreht
    document.getElementById(`card_${columnID['id']}_${taskID}`).classList.add('rotate-card');
}


function endRotateCard(columnID, taskID) {      //Karte wird wieder in den Ausgangszustand zurückversetzt, wenn die Maustaste losgelassen wird
    document.getElementById(`card_${columnID['id']}_${taskID}`).classList.remove('rotate-card');
}


function deleteTask(columnID, index) {
    let currentArrayIndex = renderedBoardArrays.findIndex(element => element['id'] == columnID['id']);
    let currentArray = renderedBoardArrays[currentArrayIndex]['array'];
    // let currentTask = currentArray[index];
    currentArray.splice(index, 1);
    closeBigView(1);
    renderAll();
}


function searchTasks() {    //Funktion für die Suchleiste. Die gerenderten Arrays werden gefiltert und in ein extra-Array gespeichert!
    let searchField = document.getElementById('search_field');
    let searchFieldInput = searchField.value.trim().toLowerCase();
    renderedBoardArrays = allBoardArrays;   //wenn man seine Eingabe wieder löscht, sollen wieder alle Tasks angezeigt werden (zurücksetzen)!

    if (searchFieldInput.length > 2) {
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
        renderedBoardArrays = filteredBoardArrays;
        renderAll();
    } else if (searchFieldInput.length == 0) {      //falls die Eingabe wieder gelöscht wird
        renderAll();
    }
}


// Hilfsfunktionen:
function stopPropagation(event) {           //Verhindert das Event Bubbling beim Schließen der Großansicht
    event.stopPropagation();
}


function allowDrop(event) {                 //Funktion, die das Fallenlassen (Drop) in andere Elemente ermöglicht (ist standardmäßig nicht erlaubt, daher muss es umgestellt werden!)
    event.preventDefault();
}


function oneLetterUppercase(word) {           //Hilfsfunktion, die nur den ersten Buchstaben großgeschrieben zurückgibt
    return word.charAt(0).toUpperCase();
}


function firstLetterUppercase(word) {           //Hilfsfunktion, die den ersten Buchstaben großschreibt und dann das ganze Wort wieder zurückgibt
    return word.charAt(0).toUpperCase() + word.slice(1);
}