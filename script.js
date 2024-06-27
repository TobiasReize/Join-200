let importContacts = [];
let importTasks = [];
let importCategories = [];
let initialsArray = [];


/**
 * Initial function to load the database,
 */
async function init() {
    includeHTML();
    await loadContacts('contacts', importContacts); // Kontakte von Datenbank laden
    await loadData('tasks', importTasks); // Tasks von Datenbank laden
    await loadData('categories', importCategories); // Tasks von Datenbank laden
}


/**
 * funtion to laod the templates for the html
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
 * functtion to sort the imported contacts by first letter 
 */
function sortContacts() {
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


/**
 * set the intitials for the user 
 */
var storedInitials = localStorage.getItem('initialsArray');
initialsArray = storedInitials ? JSON.parse(storedInitials) : [];



/**
 * 
 * @param {*} initials 
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
};



/**
 * 
 */
function displayInitials() {
    try {
         document.getElementById('user-short').innerHTML = initialsArray.join(', ');
    } catch (error) {
        
    }
};


/**
 * function to log out and remove the initials
 */
function logOut() {
    localStorage.removeItem('initialsArray');
    window.location.href = '../index.html';
};

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


function back() {
    window.location.href = './summary.html'
}