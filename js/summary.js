// Globale Konstante für den Standardnamen
const DEFAULT_NAME = 'guest';

let toDoTasks = [];
let inProgressTasks = [];
let awaitFeedbackTasks = [];
let doneTasks = [];
const allTasks = [];


function initSummary() {
    includeHTML();
    initializeApp();
    checkWidthAndAddClass();
}


function checkWidthAndAddClass() {
    if (window.innerWidth < 920) {
        document.getElementById('titleBoard').classList.add('d-none');
        document.getElementById('board').classList.add('d-none');
        document.getElementById('greeting').classList.add('greet-animation');
        document.getElementById('body').classList.add('change-background');
        setTimeout(() => {
            document.getElementById('titleBoard').classList.remove('d-none');
            document.getElementById('board').classList.remove('d-none');
            document.getElementById('greeting').classList.remove('greet-animation');
            document.getElementById('body').classList.remove('change-background');
        }, 3000);
    }
}


async function initializeApp() {
    await loadTasks();
    await letsGreet();
    await loadNumber();
}


function getInitials(name) {
    if (!name) {
        return '';
    }
    let names = name.split(' ');
    let initials = names.map(n => n.charAt(0).toUpperCase()).join('');
    return initials;
}


async function letsGreet() {
    const firstName = localStorage.getItem('first_name') ? localStorage.getItem('first_name') : '';
    const lastName = localStorage.getItem('last_name') ? localStorage.getItem('last_name') : '';
    let userName = `${firstName} ${lastName}`;

    if (firstName) {
        await greet(userName);
    } else {
        userName = DEFAULT_NAME
        await greet(userName);
    }

    const initials = getInitials(userName);
    addInitials(initials);
}


async function greet(userName) {
    const greeting = await getGreeting();
    let greetingText;

    if (userName === null || userName === DEFAULT_NAME) {
        greetingText = `<p>${greeting}!</p>`;
    } else {
        greetingText = `<p>${greeting},</p>
        <br>
        <p class="blue-name">${userName}!</p>`;
    }
    document.getElementById('greeting').innerHTML = greetingText;
}


function getGreeting() {
    return new Promise(resolve => {
        const now = new Date();
        const hour = now.getHours();
        let greeting;

        if (hour >= 5 && hour < 12) {
            greeting = "Good morning";
        } else if (hour >= 12 && hour < 18) {
            greeting = "Good day";
        } else {
            greeting = "Good evening";
        }

        resolve(greeting);
    });
}


async function sortTasks() {
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
                break;
        }
    }
}


async function loadNumber() {
    await sortTasks();
    allTasks.push(...importTasks);    
    const todoNumber = toDoTasks.length;
    const doneNumber = doneTasks.length;
    const awaitFeedbackNumber = awaitFeedbackTasks.length;
    const inProgressNumber = inProgressTasks.length;
    const sum = toDoTasks.length + doneTasks.length + awaitFeedbackTasks.length + inProgressTasks.length;
    await countUrgent();
    document.getElementById('todoNumber').innerHTML = `${todoNumber}`;
    document.getElementById('doneNumber').innerHTML = `${doneNumber}`;
    document.getElementById('awaitFeedbackNumber').innerHTML = `${awaitFeedbackNumber}`;
    document.getElementById('inProgressNumber').innerHTML = `${inProgressNumber}`;
    document.getElementById('taskSum').innerHTML = `${sum}`;
}


async function countUrgent() {
    let urgentCount = 0;
    allTasks.forEach(task => {
        if (task.priority == 'urgent') {
            urgentCount++;
        }
    });
    document.getElementById('urgentNumber').innerHTML = `${urgentCount}`;
    await findClosestDate();
}


async function findClosestDate() {
    let closestDate = null;
    allTasks.forEach(task => {
        if (task.date) {
            const currentDate = new Date(task.date);

            if (!closestDate || currentDate < closestDate) {
                closestDate = currentDate;
            }
        }
    });
    const dateParts = extractDateParts(closestDate);
    document.getElementById('upcomingDeadline').innerHTML = `${dateParts.month} ${dateParts.day}, ${dateParts.year}`;
    return closestDate;
}


function extractDateParts(dateString) {
    let date = new Date(dateString);
    let month = date.toLocaleString('default', { month: 'short' });
    let day = date.getDate();
    let year = date.getFullYear();

    return {
        month: month,
        day: day,
        year: year
    }
}
