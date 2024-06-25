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