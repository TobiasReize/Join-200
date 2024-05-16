// Code oder Funktionen, die nur für die Add Task Seite relevant sind!

let contacts = [
    {
        'first-name' : 'Thomas',
        'name' : 'Mueller',
        'checked' : false
    },
    {
        'first-name' : 'Bernd',
        'name' : 'Schneider',
        'checked' : false
    },
    {
        'first-name' : 'Michael',
        'name' : 'Ballack',
        'checked' : false
    }
]

let colors = ['#9747FF', '#FF5EB3', '#6E52FF', '#9327FF', '#00BEE8', '#1FD7C1', '#FF745E', '#FF745E', '#FC71FF', '#FFC701', '#0038FF', '#C3FF2B', '#FFE62B', '#FF4646', '#FF4646'];

let = categories = ['Test1', 'Test2', 'Test3'];

let priority = [false, false, false]

function assignMenu() {
    let content = document.getElementById('contact_container');
    let arrow = document.getElementById('arrow_drop_down_contact');
    content.classList.toggle('d-none');
    arrow.classList.toggle('arrow-drop-down')
}

function closeMenus() {
    let contacts = document.getElementById('contact_container');
    let category = document.getElementById('category_container');
    if (!contacts.classList.contains('d-none')) {
        contacts.classList.add('d-none')
    }
}

function categoryMenu() {
    let content = document.getElementById('category_container');
    let arrow = document.getElementById('arrow_drop_down_category');
    content.classList.toggle('d-none');
    arrow.classList.toggle('arrow-drop-down')
}

function getContacts() {
    let content = document.getElementById('list_options');
    content.innerHTML = '';

    for (let i = 0; i < contacts.length; i++) {
        const names = contacts[i];
        let name = names['name'];
        let firstName = names['first-name'];

        content.innerHTML += /* html */ `
            <li id="listed_names${i}" class="option">
                <div class="short-and-fullname">
                    <div id="short_name${i}" class="short-name">${firstName.charAt(0) + name.charAt(0)}</div>
                    <span id="full_name">${firstName + ' ' + name}</span>
                </div>
                <input class="d-none" id="checkbox_contacts${i}" type="checkbox">
                <img class="d-none" id="img_checkbox_contacts${i}" src="../assets/img/00_general-elements/check-button.svg" alt="Checkobox" onclick="changeCheckboxContacts(${i})">
                <img class="d-none" id="img_checkbox_checked_contacts${i}" src="../assets/img/00_general-elements/check-button-checked.svg" alt="Checkobox" onclick="changeCheckboxContacts(${i})">
            </li>
         `;
    }
    renderCheckBox()
    colorizeDropDownContacts(); 
}

function renderCheckBox() {
    for (let i = 0; i < contacts.length; i++) {
        let imgUnchecked = document.getElementById(`img_checkbox_contacts${i}`);
        let imgChecked = document.getElementById(`img_checkbox_checked_contacts${i}`);
        let checkbox = document.getElementById(`checkbox_contacts${i}`);
        const contact = contacts[i];

        if (contact['checked'] == true) {
            checkbox.checked = true;
            imgChecked.classList.remove('d-none')
            imgUnchecked.classList.add('d-none')
        } else {
            checkbox.checked = false;
            imgChecked.classList.add('d-none')
            imgUnchecked.classList.remove('d-none')
        } 
    }
}

function getCategories() {
    let content = document.getElementById('list_options_category');
    content.innerHTML = '';

    for (let i = 0; i < categories.length; i++) {
        const category = categories[i];
        content.innerHTML += /* html */ `
        <li class="categories-list" id="category_list${i}">${category}</li>
        `; 
    }
}

function colorizeDropDownContacts() {
    for (let i = 0; i < colors.length; i++) {
        let content = document.getElementById(`short_name${i}`);
        const color = colors[i];
        if (content == null) {
            break
        } else {
            content.style.backgroundColor += color;
        }
    }
}

function colorizeCheckedContacts() {
    for (let i = 0; i < colors.length; i++) {
        let content = document.getElementById(`checked_contact${i}`);
        const color = colors[i];
        if (content == null) {
            break
        } else {
            content.style.backgroundColor += color;
        }
    }
}

function changeCheckboxContacts (i) {
    let checkbox = document.getElementById(`checkbox_contacts${i}`);
    // toggle der Checkbox zwischen true and false
    checkbox.checked = !checkbox.checked;

    if (checkbox.checked) {
        contacts[i]['checked'] = true;
        
    } else {
        contacts[i]['checked'] = false;
    }
    renderCheckBox()
    renderCheckedContacts()
}

function renderCheckedContacts() {
    let content = document.getElementById(`checked_contacts`);
    content.innerHTML = '';
    for (let i = 0; i < contacts.length; i++) {
        const contact = contacts[i];
        if (contact['checked'] == true) {
            let name = contact['name'];
            let firstName = contact['first-name'];
            content.innerHTML += /* html */ `
                <div id="checked_contact${i}" class="short-name checked-contact">${firstName.charAt(0) + name.charAt(0)}</div>
            `;
        }
    }
    colorizeCheckedContacts();
}   

function colorChangeUrgent() {
    document.getElementById('urgent_btn').classList.toggle('urgent-btn-change');
    document.getElementById('img_urgent').classList.toggle('d-none');
    document.getElementById('img_urgent_white').classList.toggle('d-none');
}

function colorChangeMedium() {
    document.getElementById('medium_btn').classList.toggle('medium-btn-change');
    document.getElementById('img_medium').classList.toggle('d-none');
    document.getElementById('img_medium_white').classList.toggle('d-none');
}

function colorChangeLow() {
    document.getElementById('low_btn').classList.toggle('low-btn-change');
    document.getElementById('img_low').classList.toggle('d-none');
    document.getElementById('img_low_white').classList.toggle('d-none');
}