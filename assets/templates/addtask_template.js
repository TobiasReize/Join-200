/**
 * to render the html code for the assign menu contacts
 * @param {integer} i 
 * @returns 
 */
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


/**
 * @param {integer} i - Number in Array Subtask
 * @returns - html to render the edit Subtask
 */
function editSubtaskTemp(i) {
    return /* html */ `
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
} 