// Code oder Funktionen, die nur für die Add Task Seite relevant sind!

let contacts = [
    {
        'first-name' : 'Thomas',
        'name' : 'Mueller'
    },
    {
        'first-name' : 'Bernd',
        'name' : 'Schneider'
    },
    {
        'first-name' : 'Michael',
        'name' : 'Ballack'
    }
]

let colors = ['#9747FF', '#FF5EB3', '#6E52FF', '#9327FF', '#00BEE8', '#1FD7C1', '#FF745E', '#FF745E', '#FC71FF', '#FFC701', '#0038FF', '#C3FF2B', '#FFE62B', '#FF4646', '#FF4646'];

let = categories = ['Test1', 'Test2', 'Test3'];

function assignMenu() {
    let content = document.getElementById('contactContainer');
    let arrow = document.getElementById('arrowDropDownContact');
    content.classList.toggle('d-none');
    arrow.classList.toggle('arrow-drop-down')
}

function closeMenus() {
    let contacts = document.getElementById('contactContainer');
    let category = document.getElementById('categoryContainer');
    if (!contacts.classList.contains('d-none')) {
        contacts.classList.add('d-none')
    }
}

function categoryMenu() {
    let content = document.getElementById('categoryContainer');
    let arrow = document.getElementById('arrowDropDownCategory');
    content.classList.toggle('d-none');
    arrow.classList.toggle('arrow-drop-down')
}

function getContacts() {
    let content = document.getElementById('listOptions');
    content.innerHTML = '';

    for (let i = 0; i < contacts.length; i++) {
        const names = contacts[i];
        let name = names['name'];
        let firstName = names['first-name'];

        content.innerHTML += /* html */ `
            <li id="listedNames${i}" class="option">
                <div class="short-and-fullname">
                    <div id="shortName${i}" class="short-name">${firstName.charAt(0) + name.charAt(0)}</div>
                    <span id="fullName">${firstName + ' ' + name}</span>
                </div>
                <input type="checkbox" id="">
            </li>
         `;
        
    }
    colorize(); 
}

function getCategories() {
    let content = document.getElementById('listOptionsCategory');
    content.innerHTML = '';

    for (let i = 0; i < categories.length; i++) {
        const category = categories[i];
        content.innerHTML += /* html */ `
        <li class="categories-list" id="categoryList${i}">${category}</li>
        `; 
    }
}

function colorize() {
    
    for (let i = 0; i < colors.length; i++) {
        let content = document.getElementById(`shortName${i}`);
        const color = colors[i];
        if (content == null) {
            break
        } else {
            content.style.backgroundColor += color;
        }
    }
}
