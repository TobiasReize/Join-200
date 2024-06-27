/**
 * HTML-template for the tasks
 * @param {string} columnID 
 * @param {integer} i 
 * @param {JSON} task 
 * @returns 
 */
function taskCardHTML(columnID, i, task) {
    return /*html*/ `
        <div draggable="true" id="card_${columnID}_${i}" class="full-card" ondragstart="startDragging(${columnID}, ${i})" onmousedown="rotateCard(${columnID}, ${i})" onmouseup="endRotateCard(${columnID}, ${i})" onclick="showBigView(${columnID}, ${i})">
            <div class="task-category" style="background-color: ${colorsCategories[task['categories']]}">${task['categories']}</div>
            <div class="task-title">${task['title']}</div>
            <p class="task-description">${task['description']}</p>
            <div id="${columnID}_subtasks_container_${i}" class="subtasks-container"></div>
            <div class="ai-ctr-space-btwn">
                <div id="${columnID}_contacts_container_${i}" class="df-ai-ctr"></div>
                ${priorityImages[getPriority(task['priorities'])]}
            </div>
        </div>
    `;
}


/**
 * HTML-template for the progress bar
 * @param {JSON} task 
 * @param {integer} doneSubtasks 
 * @returns 
 */
function progressBarHTML(task, doneSubtasks) {
    return /*html*/ `
        <div class="progress-bar">
            <div class="bar-of-progress" style="width: ${(doneSubtasks/task['subtasks'].length)*100}%"></div>
        </div>
        <span class="subtask-text">
            ${doneSubtasks}/${task['subtasks'].length} Subtasks
        </span>
    `;
}


/**
 * HTML-template for the big view of a task
 * @param {string} columnID 
 * @param {integer} taskID 
 * @param {JSON} currentTask 
 * @returns 
 */
function bigViewHTML(columnID, taskID, currentTask) {
    return /*html*/ `
        <div id="big_view_card" class="big-view-card transition" onclick="stopPropagation(event)">
            <div class="ai-ctr-space-btwn m-btm24">
                <div class="big-view-category fs16-fw400" style="background-color: ${colorsCategories[currentTask['categories']]}">${currentTask['categories']}</div>
                <img onclick="closeBigView(0)" class="big-view-close" src="../assets/img/00_general-elements/close-dark.svg" alt="close">
            </div>
            <div class="big-view-card-content">
                <h1 class="m-btm24 overflow-wrap-break-word">${currentTask['title']}</h1>
                <p class="fs20-fw400 m-btm24 overflow-wrap-break-word fs16-fw400">${currentTask['description']}</p>
                <div class="big-view-date-container df-ai-ctr fs20-fw400 m-btm24">
                    <div class="default-color fs16-fw400">Due date:</div>
                    <div class="fs16-fw400">${currentTask['date']}</div>
                </div>
                <div class="big-view-priority-container df-ai-ctr fs20-fw400 m-btm24">
                    <div class="default-color fs16-fw400">Priority:</div>
                    <div class="df-ai-ctr gap-10">
                        <div class="fs16-fw400">${firstLetterUppercase(getPriority(currentTask['priorities']))}</div>
                        <div>${priorityImages[getPriority(currentTask['priorities'])]}</div>
                    </div>
                </div>
                <div id="big_view_contacts_container" class="m-btm24">
                    <div class="default-color fs20-fw400 fs16-fw400">Assigned To:</div>
                </div>
                <div id="big_view_subtasks_container">
                    <div class="big-view-subtask-headline default-color fs20-fw400 fs16-fw400">Subtasks</div>
                </div>
            </div>
            <div class="big-view-lowest-container df-ai-ctr m-top24">
                <div class="df-ai-ctr gap-8">
                    <img onclick="moveUp(${columnID['id']}, ${taskID})" class="arrow-mobile" src="../assets/img/04_board/arrow-up.png" alt="arrow-up">
                    <img onclick="moveDown(${columnID['id']}, ${taskID})" class="arrow-mobile" src="../assets/img/04_board/arrow-down.png" alt="arrow-down">
                </div>
                <div class="big-view-delete-edit-container df-ai-ctr">
                    <div class="big-view-delete-container df-ai-ctr" onclick="deleteTask(${columnID['id']}, ${taskID})">
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
                    <div class="big-view-edit-container df-ai-ctr" onclick="editTask(${columnID['id']}, ${taskID})">
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
}


/**
 * HTML-template for tasks to be edited
 * @param {string} columnID 
 * @param {integer} taskID 
 * @param {JSON} currentTask 
 * @returns 
 */
function editTaskHTML(columnID, taskID, currentTask) {
    return /*html*/ `
        <div id="big_view_card" class="big-view-card" onclick="stopPropagation(event), editTaskCloseAssignMenu()">
            <div class="ai-ctr-fe m-btm24">
                <img onclick="closeBigView(1)" class="big-view-close" src="../assets/img/00_general-elements/close-dark.svg" alt="close">
            </div>
            <div class="big-view-card-content">
                <div class="df-column-gap-8 m-btm16">
                    <div class="fs20-fw400 default-color fs16-fw400">Title</div>
                    <input id="edit_task_title" class="fs20-fw400 big-view-input-style padding-12-16 border-focus fs16-fw400" type="text" value="${currentTask['title']}">
                </div>
                <div class="df-column-gap-8 m-btm16">
                    <div class="fs20-fw400 default-color fs16-fw400">Description</div>
                    <textarea id="edit_task_description" class="fs20-fw400 big-view-input-style big-view-description-input border-focus fs16-fw400" rows="4">${currentTask['description']}</textarea>
                </div>
                <div class="df-column-gap-8 m-btm24">
                    <div class="fs20-fw400 default-color fs16-fw400">Due date</div>
                    <input id="edit_task_date" class="fs20-fw400 big-view-input-style padding-12-16 m-btm16 border-focus fs16-fw400" type="date" value="${currentTask['date']}">
                </div>
                <div class="df-column-gap-8 m-btm24">
                    <div class="big-view-edit-priority-text fs16-fw400">Priority</div>
                    <div class="edit-task-priority-container ai-ctr-space-btwn">
                        <div id="priority_urgent" class="priority-btn ai-ctr-jc-ctr" onclick="changePriority('urgent')">
                            <div class="fs20-fw400 fs16-fw400">Urgent</div>
                            <svg width="21" height="16" viewBox="0 0 21 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path class="priority-path-urgent" d="M19.2597 15.4464C19.0251 15.4468 18.7965 15.3719 18.6077 15.2328L10.3556 9.14965L2.10356 15.2328C1.98771 15.3184 1.85613 15.3803 1.71633 15.4151C1.57652 15.4498 1.43124 15.4567 1.28877 15.4354C1.14631 15.414 1.00944 15.3648 0.885997 15.2906C0.762552 15.2164 0.654943 15.1186 0.569314 15.0029C0.483684 14.8871 0.421712 14.7556 0.386936 14.6159C0.352159 14.4762 0.345259 14.331 0.366629 14.1887C0.409788 13.9012 0.565479 13.6425 0.799451 13.4697L9.70356 6.89926C9.89226 6.75967 10.1208 6.68433 10.3556 6.68433C10.5904 6.68433 10.819 6.75967 11.0077 6.89926L19.9118 13.4697C20.0977 13.6067 20.2356 13.7988 20.3057 14.0186C20.3759 14.2385 20.3747 14.4749 20.3024 14.6941C20.2301 14.9133 20.0904 15.1041 19.9031 15.2391C19.7159 15.3742 19.4907 15.4468 19.2597 15.4464Z" fill="#FF3D00"/>
                                <path class="priority-path-urgent" d="M19.2597 9.69733C19.0251 9.69774 18.7965 9.62289 18.6077 9.48379L10.3556 3.40063L2.10356 9.48379C1.86959 9.6566 1.57651 9.72945 1.28878 9.68633C1.00105 9.6432 0.742254 9.48762 0.569318 9.25383C0.396382 9.02003 0.323475 8.72716 0.366634 8.43964C0.409793 8.15213 0.565483 7.89352 0.799455 7.72072L9.70356 1.15024C9.89226 1.01065 10.1208 0.935303 10.3556 0.935303C10.5904 0.935303 10.819 1.01065 11.0077 1.15024L19.9118 7.72072C20.0977 7.85763 20.2356 8.04974 20.3057 8.26962C20.3759 8.4895 20.3747 8.72591 20.3024 8.94509C20.2301 9.16427 20.0904 9.35503 19.9031 9.49012C19.7159 9.62521 19.4907 9.69773 19.2597 9.69733Z" fill="#FF3D00"/>
                            </svg>
                        </div>
                        <div id="priority_medium" class="priority-btn ai-ctr-jc-ctr" onclick="changePriority('medium')">
                            <div class="fs20-fw400 fs16-fw400">Medium</div>
                            <svg width="21" height="8" viewBox="0 0 21 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path class="priority-path-medium" d="M19.7596 7.91717H1.95136C1.66071 7.91717 1.38197 7.80087 1.17645 7.59386C0.970928 7.38685 0.855469 7.10608 0.855469 6.81332C0.855469 6.52056 0.970928 6.23979 1.17645 6.03278C1.38197 5.82577 1.66071 5.70947 1.95136 5.70947H19.7596C20.0502 5.70947 20.329 5.82577 20.5345 6.03278C20.74 6.23979 20.8555 6.52056 20.8555 6.81332C20.8555 7.10608 20.74 7.38685 20.5345 7.59386C20.329 7.80087 20.0502 7.91717 19.7596 7.91717Z" fill="#FFA800"/>
                                <path class="priority-path-medium" d="M19.7596 2.67388H1.95136C1.66071 2.67388 1.38197 2.55759 1.17645 2.35057C0.970928 2.14356 0.855469 1.86279 0.855469 1.57004C0.855469 1.27728 0.970928 0.996508 1.17645 0.789496C1.38197 0.582485 1.66071 0.466187 1.95136 0.466187L19.7596 0.466187C20.0502 0.466187 20.329 0.582485 20.5345 0.789496C20.74 0.996508 20.8555 1.27728 20.8555 1.57004C20.8555 1.86279 20.74 2.14356 20.5345 2.35057C20.329 2.55759 20.0502 2.67388 19.7596 2.67388Z" fill="#FFA800"/>
                            </svg>
                        </div>
                        <div id="priority_low" class="priority-btn ai-ctr-jc-ctr" onclick="changePriority('low')">
                            <div class="fs20-fw400 fs16-fw400">Low</div>
                            <svg width="21" height="16" viewBox="0 0 21 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path class="priority-path-low" d="M10.8555 9.69779C10.6209 9.69819 10.3923 9.62335 10.2035 9.48427L1.30038 2.91453C1.18454 2.82898 1.0867 2.72146 1.01245 2.59812C0.938193 2.47478 0.888977 2.33803 0.867609 2.19569C0.824455 1.90821 0.897354 1.61537 1.07027 1.3816C1.24319 1.14782 1.50196 0.992265 1.78965 0.949143C2.07734 0.906021 2.3704 0.978866 2.60434 1.15165L10.8555 7.23414L19.1066 1.15165C19.2224 1.0661 19.354 1.00418 19.4938 0.969432C19.6336 0.934685 19.7788 0.927791 19.9213 0.949143C20.0637 0.970495 20.2006 1.01967 20.324 1.09388C20.4474 1.16808 20.555 1.26584 20.6407 1.3816C20.7263 1.49735 20.7883 1.62882 20.823 1.7685C20.8578 1.90818 20.8647 2.05334 20.8433 2.19569C20.822 2.33803 20.7727 2.47478 20.6985 2.59812C20.6242 2.72146 20.5264 2.82898 20.4106 2.91453L11.5075 9.48427C11.3186 9.62335 11.0901 9.69819 10.8555 9.69779Z" fill="#7AE229"/>
                                <path class="priority-path-low" d="M10.8555 15.4463C10.6209 15.4467 10.3923 15.3719 10.2035 15.2328L1.30038 8.66307C1.06644 8.49028 0.910763 8.2317 0.867609 7.94422C0.824455 7.65674 0.897354 7.3639 1.07027 7.13013C1.24319 6.89636 1.50196 6.7408 1.78965 6.69768C2.07734 6.65456 2.3704 6.7274 2.60434 6.90019L10.8555 12.9827L19.1066 6.90019C19.3405 6.7274 19.6336 6.65456 19.9213 6.69768C20.209 6.7408 20.4678 6.89636 20.6407 7.13013C20.8136 7.3639 20.8865 7.65674 20.8433 7.94422C20.8002 8.2317 20.6445 8.49028 20.4106 8.66307L11.5075 15.2328C11.3186 15.3719 11.0901 15.4467 10.8555 15.4463Z" fill="#7AE229"/>
                            </svg>
                        </div>
                    </div>
                </div>
                <div class="df-column-gap-8 m-btm24">
                    <div class="fs20-fw400 default-color fs16-fw400">Assigned To</div>
                    <div class="edit-task-contact-container big-view-input-style df-ai-ctr border-focus" onclick="showContactList(); stopPropagation(event)">
                        <input id="input_search_contact_edit_task" class="edit-task-contact-input fs20-fw400 padding-12-16 fs16-fw400 width-100" type="text" placeholder="Select contacts to assign">
                        <img id="arrow_drop_down_contact_edit_task" class="edit-task-dropdown-arrow" src="../assets/img/00_general-elements/arrow_drop_down.svg" alt="arrow">
                    </div>
                    <div onclick="stopPropagation(event)">
                        <div id="contact_container_edit_task" class="edit-task-contacts-container d-none">
                            <ul id="list_options_edit_task" class="list-options fs16-fw400"></ul>
                        </div>
                    </div>
                    <div>
                        <div class="checked-contacts" id="checked_contacts_edit_task"></div>
                    </div>
                </div>
                <div class="df-column-gap-8">
                    <div class="fs20-fw400 default-color fs16-fw400">Subtasks</div>
                    <div class="edit-task-contact-container big-view-input-style df-ai-ctr border-focus" onclick="showSubtaskIcons()">
                        <input id="input_subtask_edit_task" class="edit-task-contact-input fs20-fw400 padding-12-16 fs16-fw400 width-100" type="text" placeholder="Add new subtask" required>
                        <div class="icons-subtask">
                            <div id="add_icon_edit_task" class="icon-box">
                                <img class="add-icon" src="../assets/img/03_addtask/add.svg">
                            </div>
                            <div id="close_icon_edit_task" class="d-none icon-box b-right" onclick="clearSubtaskField()">
                                <img class="add-icon" src="../assets/img/03_add-task/close.svg">
                            </div>
                            <div id="check_icon_edit_task" class="d-none icon-box" onclick="showSubtasksInEditView()">
                                <img class="add-icon" src="../assets/img/03_add-task/check.svg" alt="">
                            </div>
                        </div>
                    </div>
                    <div>
                        <ul id="list_subtasks_edit_task" class="edit-task-subtasks-ul fs16-fw400"></ul>
                    </div>
                </div>
            </div>
            <div class="ai-ctr-fe m-top24">
                <div class="edit-task-ok-button df-ai-ctr" onclick="saveCurrentTask(${columnID['id']}, ${taskID})">
                    <span class="fs21-fw700">OK</span>
                    <img src="../assets/img/00_general-elements/check-white.svg" alt="check">
                </div>
            </div>
        </div>
    `;
}


/**
 * HTML-template for the contact dropdown list in the editing view
 * @param {integer} i 
 * @returns 
 */
function editTaskContactsHTML(i) {
    return /* html */ `
        <li id="listed_names_edit_task${i}" class="option" onclick="changeContactsCheckbox(${i})">
            <div class="short-and-fullname">
                <div id="short_name_edit_task${i}" class="short-name" style="background-color: ${importContacts[i]['color']}">${importContacts[i]['firstName'].charAt(0) + importContacts[i]['lastName'].charAt(0)}</div>
                <span>${importContacts[i]['firstName'] + ' ' + importContacts[i]['lastName']}</span>
            </div>
            <input class="d-none" id="checkbox_contacts_edit_task${i}" type="checkbox">
            <svg class="d-none" id="img_checkbox_contacts_edit_task${i}" width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="4" y="4.96582" width="16" height="16" rx="3" stroke="#2A3647" stroke-width="2"/>
            </svg>
            <svg class="d-none white-checkbox" id="img_checkbox_checked_contacts_edit_task${i}" width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 11.9658V17.9658C20 19.6227 18.6569 20.9658 17 20.9658H7C5.34315 20.9658 4 19.6227 4 17.9658V7.96582C4 6.30897 5.34315 4.96582 7 4.96582H15" stroke="#2A3647" stroke-width="2" stroke-linecap="round"/>
                <path d="M8 12.9658L12 16.9658L20 5.46582" stroke="#2A3647" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </li>
    `;
}


/**
 * HTML-template for the subtasks in the subtasks list in the editing view
 * @param {integer} i 
 * @param {JSON} subtask 
 * @returns 
 */
function subtaskHTML(i, subtask) {
    return /* html */ `
        <div id="subtasks_edit_task${i}" class="li-subtask">
            <li>${subtask.subtaskTitle}</li>
            <div class="edit-icons-subtasks">
                <div class="icon-box b-right">
                    <img class="add-icon" src="../assets/img/03_add-task/pencil.svg" onclick="changeSubtask(${i})">
                </div>
                <div class="icon-box" onclick="">
                    <img class="add-icon" src="../assets/img/03_add-task/delete.svg" onclick="removeSubtask(${i})">
                </div>
            </div>
        </div>
        <div id="edit_container_edit_task${i}" class="edit-subtask-container"></div>
    `;
}


/**
 * HTML-template for editing Subtasks in the editing view
 * @param {integer} i 
 * @returns 
 */
function changeSubtaskHTML(i) {
    return /* html */ `
        <div class="edit-subtask-div">
            <input id="edit_input_subtask_edit_task" class="edit-input-subtask width-100" type="text">
            <div>
                <div class="icons-subtask">
                    <div class="icon-box b-right">
                        <img class="add-icon" src="../assets/img/03_add-task/delete.svg" onclick="removeSubtask(${i})">
                    </div>
                    <div class="icon-box">
                        <img class="add-icon" src="../assets/img/03_add-task/check.svg" onclick="saveChangedSubtask(${i})">
                    </div> 
                </div>
            </div>
        </div>
    `;
}