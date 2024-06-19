async function initContacts() {
    await init();
    renderContacts();
}


/**
 * Render the Contacts by alphabet
 * Reset the Content
 */
function renderContacts() {
    let content = document.getElementById('all_contacts');
    content.innerHTML = '';

    let groupedContacts = groupContactsByFirstLetter(importContacts);
    renderGroupedContacts(content, groupedContacts);
}


/**
 * function to sort the contacts by there first name letter
 * @param {string} contacts - these are all contacts
 * @returns all contacts sorted
 */
function groupContactsByFirstLetter(contacts) {
    let groupedContacts = {};

    contacts.forEach(contact => {
        const firstLetter = (contact.firstName.charAt(0) || '').toUpperCase();
        if (!groupedContacts[firstLetter]) {
            groupedContacts[firstLetter] = [];
        }
        groupedContacts[firstLetter].push(contact);
    });

    return groupedContacts;
}


/**
 * function to render the sorted contacts 
 * @param {string} content 
 * @param {string} groupedContacts - all sorted contacts
 */
function renderGroupedContacts(content, groupedContacts) {
    for (let letter in groupedContacts) {
        renderLetterSection(content, letter);
        renderContactsForLetter(content, groupedContacts[letter]);
    }
}


/**
 * function to render the first letter before the contacts
 * @param {string} content 
 * @param {string} letter - first letter of the first name
 */
function renderLetterSection(content, letter) {
    content.innerHTML += /* html */ `<div class="first-letter">${letter}</div>`;
}

/**
 * function to render the contacts with the letter
 * @param {string} content 
 * @param {string} contacts 
 */
function renderContactsForLetter(content, contacts) {
    contacts.forEach((contact, index) => {
        renderContact(content, contact, index);
    });
}


/**
 * function to render the single contact html
 * @param {string} content 
 * @param {string} contact 
 */
function renderContact(content, contact) {
    let index = importContacts.indexOf(contact);
    content.innerHTML += /* html */ `
    <div id="contact${index}" onclick="setActiveContact(${index})">
        <div class="contact-informations-box" id="contact_information_box${index}">
            <span class="short-name" id="short_name${index}" style="background-color: ${contact['color']}">
                ${contact['firstName'].charAt(0) + contact['lastName'].charAt(0)}
            </span>
            <div class="name-and-mail">
                <span class="full-name">${contact['firstName']} ${contact['lastName']}</span>
                <a href="mailto:${contact['mail']}">${contact['mail']}</a>
            </div>
        </div>
    </div>
    `;
}


/**
 * function to set the choosen contact
 * responsive they use under 920px width the single view 
 * @param {integer} i - index of the contact
 */
function setActiveContact(i) {
    let content = document.getElementById(`active_contact`);
    let showContact = document.getElementById('show_contact_container');
    let allContacts = document.getElementById('contact_container');
    content.innerHTML = tempRenderActiveContact(i);
 
    if (innerWidth <= 920) {
        allContacts.classList.add('d-none');
        showContact.style.display = "flex";
    }
}


/**
 * function to render the active contact wich was choose
 * @param {integer} i - index contact
 * @returns 
 */
function tempRenderActiveContact(i) {
    return /* html */ `
    <div class="fly-in d-fl dir-col">
        <div class="contact-name d-fl">
            <span class="short-name big-short-name" style="background-color: ${importContacts[i]['color']}">${importContacts[i]['firstName'].charAt(0) + importContacts[i]['lastName'].charAt(0)}</span>
            <div class="d-fl full-name-edit-delete">
                <span>${importContacts[i]['firstName']} ${importContacts[i]['lastName']}</span>
                <div id="edit_delete" class="d-fl edit-delete">
                    <div class="d-fl show-contact-edit" onclick="editContact(${i})">
                        <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <mask id="mask0_75592_9969" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="25" height="24">
                                <rect x="0.144531" width="24" height="24" fill="#D9D9D9"/>
                            </mask>
                            <g mask="url(#mask0_75592_9969)">
                                <path d="M5.14453 19H6.54453L15.1695 10.375L13.7695 8.975L5.14453 17.6V19ZM19.4445 8.925L15.1945 4.725L16.5945 3.325C16.9779 2.94167 17.4487 2.75 18.007 2.75C18.5654 2.75 19.0362 2.94167 19.4195 3.325L20.8195 4.725C21.2029 5.10833 21.4029 5.57083 21.4195 6.1125C21.4362 6.65417 21.2529 7.11667 20.8695 7.5L19.4445 8.925ZM17.9945 10.4L7.39453 21H3.14453V16.75L13.7445 6.15L17.9945 10.4Z" fill="#2A3647"/>
                            </g>
                        </svg>
                        Edit
                    </div>
                    <div class="d-fl show-contact-edit" onclick="deleteContact(${i})">
                        <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <mask id="mask0_75592_9951" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="25" height="24">
                                <rect x="0.144531" width="24" height="24" fill="#D9D9D9"/>
                            </mask>
                            <g mask="url(#mask0_75592_9951)">
                                <path d="M7.14453 21C6.59453 21 6.1237 20.8042 5.73203 20.4125C5.34036 20.0208 5.14453 19.55 5.14453 19V6C4.8612 6 4.6237 5.90417 4.43203 5.7125C4.24036 5.52083 4.14453 5.28333 4.14453 5C4.14453 4.71667 4.24036 4.47917 4.43203 4.2875C4.6237 4.09583 4.8612 4 5.14453 4H9.14453C9.14453 3.71667 9.24036 3.47917 9.43203 3.2875C9.6237 3.09583 9.8612 3 10.1445 3H14.1445C14.4279 3 14.6654 3.09583 14.857 3.2875C15.0487 3.47917 15.1445 3.71667 15.1445 4H19.1445C19.4279 4 19.6654 4.09583 19.857 4.2875C20.0487 4.47917 20.1445 4.71667 20.1445 5C20.1445 5.28333 20.0487 5.52083 19.857 5.7125C19.6654 5.90417 19.4279 6 19.1445 6V19C19.1445 19.55 18.9487 20.0208 18.557 20.4125C18.1654 20.8042 17.6945 21 17.1445 21H7.14453ZM7.14453 6V19H17.1445V6H7.14453ZM9.14453 16C9.14453 16.2833 9.24036 16.5208 9.43203 16.7125C9.6237 16.9042 9.8612 17 10.1445 17C10.4279 17 10.6654 16.9042 10.857 16.7125C11.0487 16.5208 11.1445 16.2833 11.1445 16V9C11.1445 8.71667 11.0487 8.47917 10.857 8.2875C10.6654 8.09583 10.4279 8 10.1445 8C9.8612 8 9.6237 8.09583 9.43203 8.2875C9.24036 8.47917 9.14453 8.71667 9.14453 9V16ZM13.1445 16C13.1445 16.2833 13.2404 16.5208 13.432 16.7125C13.6237 16.9042 13.8612 17 14.1445 17C14.4279 17 14.6654 16.9042 14.857 16.7125C15.0487 16.5208 15.1445 16.2833 15.1445 16V9C15.1445 8.71667 15.0487 8.47917 14.857 8.2875C14.6654 8.09583 14.4279 8 14.1445 8C13.8612 8 13.6237 8.09583 13.432 8.2875C13.2404 8.47917 13.1445 8.71667 13.1445 9V16Z" fill="#2A3647"/>
                            </g>
                        </svg>
                        Delete
                    </div>
                </div>
                <img class="contact-menu-btn" src="../assets/img/05_contacts/more_vert.svg" onclick="openEditDeleteMenu(); stopPropagation(event)">
            </div>
        </div>
        <span class="show-contact-information-span">Contact Information</span>
        <span><b>Email</b></span>
        <a class="show-contact-mail" href="mailto:${importContacts[i]['mail']}">${importContacts[i]['mail']}</a>
        <span><b>Phone</b></span>
        <a class="show-contact-tel" href="tel:${importContacts[i]['tel']}">${importContacts[i]['tel']}</a>
    </div>    
    `;
}


/**
 * function to open the overlay to add a new contact
 */
function openAddNewContact() {
    ['overlay_container', 'contact_card'].forEach(id => document.getElementById(id).classList.remove('d-none'));
    document.getElementById('edit_card').classList.add('d-none');
    document.getElementById('contact_card').classList.add('fly-in');
    ['input_name', 'input_mail', 'input_tel'].forEach(id => document.getElementById(id).value = '');
}


/**
 * function to open the overlay to edit a contact
 */
function openEditContact() {
    document.getElementById('overlay_container').classList.remove('d-none');
    document.getElementById('contact_card').classList.add('d-none');
    document.getElementById('edit_card').classList.add('fly-in');
}


/**
 * function to create a new contact
 * value of the input set to a array "newContact"
 * "newContact" push to "importContacts"
 * load "importContacts" to database
 */
function createContact() {
    let [firstName = '', lastName = ''] = document.getElementById('input_name').value.trim().split(' ');
    let newContact = {
        firstName,
        lastName,
        checked: false,
        color: getRandomColor(),
        mail: document.getElementById('input_mail').value,
        tel: document.getElementById('input_tel').value
    };

    importContacts.push(newContact);
    sortContacts();
    setItem('contacts', importContacts);
    renderContacts();
    closeContactCard();
    successfullyAddedAnimation();
    setActiveContact(importContacts.findIndex(contact =>
        contact.firstName === newContact.firstName &&
        contact.lastName === newContact.lastName &&
        contact.mail === newContact.mail &&
        contact.tel === newContact.tel
    ));
}


/**
 * function to validate the form and set the function "createContact"
 * @param {event} event - submit listener
 */
function formValidationAddNewContact(event) {
    // Holt das Formular
    let form = document.querySelector('.form-edit-contact');
    
    // Überprüft die native HTML5-Validierung des Formulars
    if (!form.checkValidity()) {
        // Falls das Formular nicht gültig ist, zeigt den Standardvalidierungsfehler an
        event.preventDefault();
        form.reportValidity(); // Zeigt die nativen Fehlermeldungen des Browsers an
    } else {
        // Falls das Formular gültig ist, führt die Funktion createContact aus
        createContact();
    }
}


/**
 * function to add an animation by succesfully added a contact
 */
function successfullyAddedAnimation() {
    let btn = document.getElementById('btn_suc_added');
    btn.classList.remove('d-none', 'fly-out');
    btn.classList.add('fly-in');

    setTimeout(() => {
        btn.classList.replace('fly-in', 'fly-out');
    }, 400); // Ersetze die fly-in Klasse durch fly-out nach 400ms

    setTimeout(() => {
        btn.classList.add('d-none');
    }, 1200); // Füge die d-none Klasse nach der Ausblendanimation hinzu (insgesamt 1200ms)
}


/**
 * function to choose a random color
 * @returns - a random color
 */
function getRandomColor() {
    let colors = ['#9747FF', '#FF5EB3', '#6E52FF', '#9327FF', '#00BEE8', '#1FD7C1', '#FF745E', '#FC71FF', '#FFC701', '#0038FF', '#C3FF2B', '#FFE62B', '#FF4646'];
    return colors[Math.floor(Math.random() * colors.length)];
}


/**
 * function to closse the overlay
 */
function closeContactCard() {
    const ids = ['overlay_container', 'contact_card', 'edit_card'];
    const [content, contactCard, editCard] = ids.map(id => document.getElementById(id));

    [contactCard, editCard].forEach(el => el.classList.add('fly-out'));

    setTimeout(() => {
        ids.forEach(id => document.getElementById(id).classList.add('d-none'));
        [contactCard, editCard].forEach(el => el.classList.remove('fly-out'));
    }, 400);

    renderContacts();
}


/**
 * function to delete the choosen contact from array "importContacts"
 * set the array to the database
 * @param {integer} i - index of the contact
 */
function deleteContact(i) {
    importContacts.splice(i, 1);
    setItem('contacts', importContacts);
    renderContacts();
    document.getElementById(`active_contact`).innerHTML = '';
}


/**
 * function to delete a contact in the overlay edit 
 */
function deleteContactEdit() {
    let index = document.getElementById('delete_btn').dataset.index;
    importContacts.splice(index, 1);
    setItem('contacts', importContacts);
    document.getElementById(`active_contact`).innerHTML = '';
    renderContacts();
    closeContactCard();
}


/**
 * function to load the data in the input fields 
 * @param {integer} i - index of the contact
 */
function editContact(i) {
    let fullName = document.getElementById(`edit_input_name`);
    let mail = document.getElementById(`edit_input_mail`);
    let tel = document.getElementById(`edit_input_tel`);
    let saveButton = document.getElementById('save_btn');
    let deleteButton = document.getElementById('delete_btn');

    saveButton.dataset.index = i;
    deleteButton.dataset.index = i;
    openEditContact();
    renderEditContact();
    renderEditShortname(i);
    fullName.value = importContacts[i]['firstName'] + ' ' + importContacts[i]['lastName'];
    mail.value = importContacts[i]['mail'];
    tel.value = importContacts[i]['tel'];
}


/**
 * function to render the html for the first letter of first name and last name
 * @param {integer} i - index of the contact
 */
function renderEditShortname(i) {
    let content =  document.getElementById(`edit_card_shortname`);
    content.innerHTML = /* html */ `
    <span class="short-name" style="background-color: ${importContacts[i]['color']}">
        ${importContacts[i]['firstName'].charAt(0) + importContacts[i]['lastName'].charAt(0)}
    </span>
    `;
}


/**
 * function to used to make the Edit Overlay visible
 */
function renderEditContact() {
    let content = document.getElementById('edit_card');
    content.classList.remove('d-none')    
}

/**
 * function to save the edit contact
 */
function saveContact() {
    let index = document.getElementById('save_btn').dataset.index;
    let [firstName, lastName] = document.getElementById('edit_input_name').value.trim().split(' ');
    let { color } = importContacts[index];

    importContacts[index] = {
        firstName,
        lastName,
        checked: false,
        color,
        mail: document.getElementById('edit_input_mail').value,
        tel: document.getElementById('edit_input_tel').value
    };

    sortContacts();
    setItem('contacts', importContacts);
    closeContactCard();
    renderContacts();
    setActiveContact(index);
}


/**
 * function to Prevents event bubbling when closing the full-screen view
 * @param {event} event 
 */
function stopPropagation(event) {           
    event.stopPropagation();
}


/**
 * function to went back to view all contacts
 */
function backToAllContacts() {
    let showContact = document.getElementById('show_contact_container');
    let allContacts = document.getElementById('contact_container');
    
    allContacts.classList.remove('d-none');
    showContact.style.display = "none";
}


/**
 * function for responsive to open the menu for delete or edit a contact
 */
function openEditDeleteMenu() {
    try {
        document.getElementById('edit_delete').style.display = "flex";
    } catch (e) {

    }
}


/**
 * function for responsive to close the menu for delete or edit a contact
 */
function closeEditDeleteMenu() {
    if (innerWidth <= 920) {
        try {
            document.getElementById('edit_delete').style.display = "none";
        } catch (e) {
            
        } 
    }
}