// Es wird gewartet bis die Seite komplet fertig geladen ist, sonst kommt es zu überschneidungen mit der templates.js und dadurch wird der header / navbar nicht erzeugt
document.addEventListener('DOMContentLoaded', function() {
    letsGreet();
    loadNumber();
});


// Beim Laden der Seite den Namen aus der URL extrahieren und greet-Funktion aufrufen
async function letsGreet() {
    let userName = getQueryParameter('name');
    if (userName !== null) {
        await greet(userName);
    } else {
        // Wenn kein Name gefunden wird, soll ein Standardname 'guest' verwendet werden
        await greet('guest');
    }
}


// Funktion zum Auslesen des Query-Parameters
function getQueryParameter(name) {
    let params = new URLSearchParams(window.location.search);
    return params.get(name);
}


// Greet-Funktion
async function greet(userName) {
    const greeting = await getGreeting();
    let greetingText;
    
    if (userName == 'guest') {
        greetingText = `<p>${greeting}!</p>`;
    } else {
        greetingText = `<p>${greeting},<br> ${userName}!</p>`;
    }
    
    document.getElementById('greeting').innerHTML = greetingText;
}


// Funktion zur Ermittlung der aktuellen Begrüßung
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


function loadNumber() {
    todoNumber = toDoTasks.length
    doneNumber = doneTasks.length
    awaitFeedbackNumber = awaitFeedbackTasks.length
    inProgressNumber = inProgressTasks.length
    document.getElementById('todoNumber').innerHTML = `${todoNumber}`
    document.getElementById('doneNumber').innerHTML = `${doneNumber}`
    document.getElementById('awaitFeedbackNumber').innerHTML = `${awaitFeedbackNumber}`
    document.getElementById('inProgressNumber').innerHTML = `${inProgressNumber}`
}