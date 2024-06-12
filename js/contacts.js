// Array in dem die Datenbankdaten geladen werden
// let importContacts = [];
// Startfunktion
async function initContacts() {
    await init();
    renderContacts();
}

// Setzt den Inhalt zurück, gruppiert die Kontakte nach Anfangsbuchstaben und rendert die gruppierten Kontakte
function renderContacts() {
    let content = document.getElementById('all_contacts');
    content.innerHTML = '';

    let groupedContacts = groupContactsByFirstLetter(importContacts);
    renderGroupedContacts(content, groupedContacts);
}

// Gruppiert die Kontakte nach dem ersten Buchstaben des Vornamens
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

// Iteriert über die gruppierten Kontakte und rendert die Buchstabenüberschriften und die zugehörigen Kontakte
function renderGroupedContacts(content, groupedContacts) {
    for (let letter in groupedContacts) {
        renderLetterSection(content, letter);
        renderContactsForLetter(content, groupedContacts[letter]);
    }
}

// Rendert die Buchstabenüberschrift
function renderLetterSection(content, letter) {
    content.innerHTML += /* html */ `<div class="first-letter">${letter}</div>`;
}

// Rendert alle Kontakte für einen bestimmten Buchstaben
function renderContactsForLetter(content, contacts) {
    contacts.forEach((contact, index) => {
        renderContact(content, contact, index);
    });
}

// Rendert einen einzelnen Kontakt
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

// Setzt den gewählten Kontakt und übergibt den Index an das Templay zum rendern
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

// Rendert den gewählten Kontakt
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

// Öffnet der Overlay zum hinzufügen eines neuen Kontakts
function openAddNewContact() {
    let content = document.getElementById('overlay_container');
    let contactCard = document.getElementById('contact_card');
    let editCard = document.getElementById('edit_card');

    content.classList.remove('d-none');
    contactCard.classList.remove('d-none');
    editCard.classList.add('d-none');
    contactCard.classList.add('fly-in');
    document.getElementById(`input_name`).value = '';
    document.getElementById(`input_mail`).value = '';
    document.getElementById(`input_tel`).value = '';
}

// Öffnete das Overlay zum editieren eines Kontakts
function openEditContact() {
    let content = document.getElementById('overlay_container');
    let editCard = document.getElementById('edit_card');
    let contactCard = document.getElementById('contact_card');
    
    content.classList.remove('d-none');
    contactCard.classList.add('d-none');
    editCard.classList.add('fly-in');
}

// Erstellt einen neuen Kontakt
// Nimmt die Werte aus den Input Feldern und setzt sie ein ein Hilfsarray "newContact"
// "newContact" wird in "importContacts" gepushed
// "importContacts" wird dann komplett in die Datenbank geladen und somit aktualisiert
function createContact() {
    let fullName = document.getElementById(`input_name`).value.trim();
    let mail = document.getElementById(`input_mail`).value;
    let tel = document.getElementById(`input_tel`).value;
    let color = getRandomColor();

    let [firstName, lastName] = fullName.split(' ');

    let newContact = {
        "firstName": firstName ||'',
        "lastName": lastName || '',
        "checked": false,
        "color": color,
        "mail": mail,
        "tel": tel
    };

    // Füge den neuen Kontakt zum importContacts-Array hinzu
    importContacts.push(newContact);
    sortContacts();

    // Finde den Index des neuen Kontakts nach dem Sortieren
    let index = importContacts.findIndex(contact => 
        contact.firstName === newContact.firstName && 
        contact.lastName === newContact.lastName && 
        contact.mail === newContact.mail && 
        contact.tel === newContact.tel
    );

    // Pfad für die neue Kontaktliste
    setItem('contacts', importContacts);
    renderContacts();
    closeContactCard();
    successfullyAddedAnimation();

    // Rufe tempRenderActiveContact mit dem Index des neuen Kontakts auf
    setActiveContact(index);
}

// Animation bei hinzufügen eines Kontaktes
function successfullyAddedAnimation() {
    let btn = document.getElementById('btn_suc_added');
    btn.classList.remove('d-none');
    btn.classList.add('fly-in');

    setTimeout(() => {
        btn.classList.remove('fly-in');
    }, 400); // Entferne die fly-in Klasse nach 400ms

    setTimeout(() => {
        btn.classList.add('fly-out');
    }, 800); // Füge die fly-out Klasse nach weiteren 400ms hinzu (insgesamt 800ms)

    setTimeout(() => {
        btn.classList.add('d-none');
        btn.classList.remove('fly-out');
    }, 1200); // Füge die d-none Klasse nach der Ausblendanimation hinzu (insgesamt 1200ms)
}

// Generierung einer Zufälligen Farbe für die erstellung eines neuen Kontaktes
function getRandomColor() {
    let colors = ['#9747FF', '#FF5EB3', '#6E52FF', '#9327FF', '#00BEE8', '#1FD7C1', '#FF745E', '#FC71FF', '#FFC701', '#0038FF', '#C3FF2B', '#FFE62B', '#FF4646'];
    return colors[Math.floor(Math.random() * colors.length)];
}

// schließt das Overlay
function closeContactCard() {
    let content = document.getElementById('overlay_container');
    let contactCard = document.getElementById('contact_card');
    let editCard = document.getElementById('edit_card');
    contactCard.classList.add('fly-out');
    editCard.classList.add('fly-out');
    setTimeout(() => {
        content.classList.add('d-none');
        contactCard.classList.add('d-none')
        contactCard.classList.remove('fly-out');
        editCard.classList.add('d-none')
        editCard.classList.remove('fly-out');
    }, 400);
    renderContacts();
}

// löscht einen Kontakt aus dem Array "importContacts"
// Aktualisiert dann die Datenbank
function deleteContact(i) {
    importContacts.splice(i, 1);
    setItem('contacts', importContacts);
    renderContacts();
    document.getElementById(`active_contact`).innerHTML = '';
}

// löscht einen Kontakt im Edit Overlay
function deleteContactEdit() {
    let index = document.getElementById('delete_btn').dataset.index;
    importContacts.splice(index, 1);
    setItem('contacts', importContacts);
    document.getElementById(`active_contact`).innerHTML = '';
    renderContacts();
    closeContactCard();
}

// Lädt die Daten in das zu editierende Input Feld
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

// rendert im Edit Overlay den Kurznamen
function renderEditShortname(i) {
    let content =  document.getElementById(`edit_card_shortname`);
    content.innerHTML = /* html */ `
    <span class="short-name" style="background-color: ${importContacts[i]['color']}">
        ${importContacts[i]['firstName'].charAt(0) + importContacts[i]['lastName'].charAt(0)}
    </span>
    `;
}

// dient zum sichtbar machen des Edit Overlay
function renderEditContact() {
    let content = document.getElementById('edit_card');
    content.classList.remove('d-none')    
}

// Speichert einen bearbeitet Kontakt
function saveContact() {
    let index = document.getElementById('save_btn').dataset.index;
    let fullName = document.getElementById(`edit_input_name`).value.trim();
    let mail = document.getElementById(`edit_input_mail`).value;
    let tel = document.getElementById(`edit_input_tel`).value;
    let color = importContacts[index].color; // Behalte die bestehende Farbe

    let [firstName, lastName] = fullName.split(' ');

    let updatedContact = {
        "firstName": firstName,
        "lastName": lastName,
        "checked": false,
        "color": color,
        "mail": mail,
        "tel": tel
    };

    importContacts[index] = updatedContact;
    sortContacts();
    setItem('contacts', importContacts);

    closeContactCard();
    renderContacts();
    setActiveContact(index);
}

//Verhindert das Event Bubbling beim Schließen der Großansicht
function stopPropagation(event) {           
    event.stopPropagation();
}

function backToAllContacts() {
    let showContact = document.getElementById('show_contact_container');
    let allContacts = document.getElementById('contact_container');
    
    allContacts.classList.remove('d-none');
    showContact.style.display = "none";
}

function openEditDeleteMenu() {
    try {
        document.getElementById('edit_delete').style.display = "flex";
    } catch (e) {

    }
}

function closeEditDeleteMenu() {
    if (innerWidth <= 920) {
        try {
            document.getElementById('edit_delete').style.display = "none";
        } catch (e) {
            
        } 
    }
    
}