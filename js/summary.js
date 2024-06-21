// Globale Konstante für den Standardnamen
const DEFAULT_NAME = 'guest';

document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

async function initializeApp() {
    await loadTasksFromFirebase();
    letsGreet();
    loadNumber();
};

async function letsGreet() {
    let userName = getQueryParameter('name');
    
    // Versuche den Namen aus dem localStorage zu lesen
    let storedName = localStorage.getItem('userName');
    
    if (userName !== null) {
        await greet(userName);
        // Speichere den Namen im localStorage, falls er über die URL übergeben wurde
        localStorage.setItem('userName', userName);
    } else if (storedName !== null) {
        await greet(storedName);
    } else {
        await greet(DEFAULT_NAME); // Standardname verwenden
    }
};

function getQueryParameter(name) {
    let params = new URLSearchParams(window.location.search);
    return params.get(name);
};

async function greet(userName) {
    const greeting = await getGreeting();
    let greetingText;
    
    if (userName === DEFAULT_NAME) {
        greetingText = `<p>${greeting}!</p>`;
    } else {
        greetingText = `<p>${greeting},<br> ${userName}!</p>`;
    }
    
    document.getElementById('greeting').innerHTML = greetingText;
};

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
};

let toDoTasks = [];
let inProgressTasks = [];
let awaitFeedbackTasks = [];
let doneTasks = [];

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
};

async function loadNumber() {
    await sortTasks();
    const todoNumber = toDoTasks.length;
    const doneNumber = doneTasks.length;
    const awaitFeedbackNumber = awaitFeedbackTasks.length;
    const inProgressNumber = inProgressTasks.length;
    const sum = toDoTasks.length + doneTasks.length + awaitFeedbackTasks.length + inProgressTasks.length;

    document.getElementById('todoNumber').innerHTML = `${todoNumber}`;
    document.getElementById('doneNumber').innerHTML = `${doneNumber}`;
    document.getElementById('awaitFeedbackNumber').innerHTML = `${awaitFeedbackNumber}`;
    document.getElementById('inProgressNumber').innerHTML = `${inProgressNumber}`;
    document.getElementById('taskSum').innerHTML = `${sum}`;
};

async function loadTasksFromFirebase() {
    await loadData('tasks', importTasks);
};