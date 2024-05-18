/* Retrieve the time from the browser and create a greeting */

async function greet() {
    const greeting = await getGreeting();
    document.getElementById('greeting').innerHTML = `<p>${greeting}</p>`;
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
};