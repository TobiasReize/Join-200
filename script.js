let importContacts = [];
let importTasks = [];
let initialsArray = [];


/**
 * initial function to load the database,
 */
async function init() {
    includeHTML();
    await loadContacts();
    await loadTasks();
}


/**
 * funtion to load the templates for the html
 */
async function includeHTML() {
    let includeElements = document.querySelectorAll('[w3-include-html]');
    for (let i = 0; i < includeElements.length; i++) {
        const element = includeElements[i];
        file = element.getAttribute("w3-include-html");
        let resp = await fetch(file);
        if (resp.ok) {
            element.innerHTML = await resp.text();
        } else {
            element.innerHTML = 'Page not found';
        }
    }
    displayInitials();
}


/**
 * function to sort the imported contacts by first letter 
 */
function sortContacts() {
    if (importContacts.length > 0) {
        importContacts.sort((a, b) => {
            if (a.firstName.toLowerCase() < b.firstName.toLowerCase()) {
                return -1;
            }
            if (a.firstName.toLowerCase() > b.firstName.toLowerCase()) {
                return 1;
            }
            return 0;
        });
    }
}


/**
 * set the intitials for the user 
 */
var storedInitials = localStorage.getItem('initialsArray');
initialsArray = storedInitials ? JSON.parse(storedInitials) : [];


/**
 * adds the initials in the header and stores them in the local storage
 * @param {string-array} initials 
 */
function addInitials(initials) {
    initialsArray = [];
    initialsArray.push(initials);
    try {
        document.getElementById('user-short').innerHTML = initialsArray.join(', ');
    } catch (error) {
        
    }
    // Speichern im Local Storage
    localStorage.setItem('initialsArray', JSON.stringify(initialsArray));
}


/**
 * displays the initials in the header
 */
function displayInitials() {
    try {
         document.getElementById('user-short').innerHTML = initialsArray.join(', ');
    } catch (error) {
        
    }
}


/**
 * function to log out and remove the initials
 */
function logOut() {
    localStorage.clear();
    window.location.href = '../index.html';
}


/**
 * function to open the User Menu to Log-Out or go to to privacy,...
 */
function openUserMenu() {
    if (innerWidth <= 1120) {
        document.getElementById('user_menu').classList.remove('d-none');
    }
}


/**
 * function to close the user menu
 */
function closeUserMenu() {
    document.getElementById('user_menu').classList.add('fly-out-user');
    setTimeout(() => {
        document.getElementById('user_menu').classList.add('d-none');
        document.getElementById('user_menu').classList.remove('fly-out-user');
    }, 400); 
}


/**
 * function to stop propagation
 * used to close overlays onclick next to and not on the overlay
 * @param {event} event 
 */
function stopPropagation(event) {           
    event.stopPropagation();
}


/**
 * checks the saved credentials
 */
function checkCredentials() {
    let token = localStorage.getItem('token');
    if (!token) {
        logOut();
    }
}


/**
 * get the saved user token
 * @returns user token
 */
function getUserToken() {
    let token = localStorage.getItem('token');
    if (token) {
        return token;
    }
}


/**
 * redirects to the summary page
 */
function back() {
    window.location.href = './summary.html'
}