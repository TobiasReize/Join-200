/**
 * create img chechbox
 * there is a input type=checkbox and return the checked or unchecked to the img
 */
function renderCheckBox() {
    importContacts.forEach((contact, i) => {
        let imgUnchecked = document.getElementById(`img_checkbox_contacts${i}`);
        if (!imgUnchecked) return;

        let imgChecked = document.getElementById(`img_checkbox_checked_contacts${i}`);
        let checkbox = document.getElementById(`checkbox_contacts${i}`);

        checkbox.checked = contact['checked'];
        imgChecked.classList.toggle('d-none', !contact['checked']);
        imgUnchecked.classList.toggle('d-none', contact['checked']);
    });
}


/**
 * function to render the html for the category menu
 */
function renderCategories() {
    let content = document.getElementById('list_options_category');
    content.innerHTML = '';

    for (let i = 0; i < importCategories.length; i++) {
        const category = importCategories[i];
        content.innerHTML += /* html */ `
        <li class="categories-list" id="category_list${i}" onclick="chooseCategory(${i})">${category}</li>
        `; 
    }
}


/**
 * function to open the assign menu 
 */
function openAssignMenu() {
    let content = document.getElementById('contact_container');
    let arrow = document.getElementById('arrow_drop_down_contact');
    content.classList.remove('d-none');
    arrow.classList.add('arrow-drop-down')
}


/**
 * function to close the assign menu
 */
function closeAssignMenu() {
    ['contact', 'category'].forEach(id => {
        document.getElementById(`${id}_container`).classList.add('d-none');
        document.getElementById(`arrow_drop_down_${id}`).classList.remove('arrow-drop-down');
    });
}


/**
 * function to open/close the category menu
 */
function categoryMenu() {
    let content = document.getElementById('category_container');
    let arrow = document.getElementById('arrow_drop_down_category');
    content.classList.toggle('d-none');
    arrow.classList.toggle('arrow-drop-down')
}

/**
 * animation for the added task
 * forwarding to board.html
 */
function addtaskAnimation() {
    try {
        document.getElementById('animate_btn_overlay').style.display = "flex"; 
        document.getElementById('animate_btn').classList.remove('d-none');
        setTimeout(function() {
            document.getElementById('animate_btn_overlay').style.display = "none"; 
            document.getElementById('animate_btn').classList.remove('d-none'); 
            window.location.href = "./board.html"; // Ziel URL Weiterleitung - board.html
        }, 2400 );
    } catch (error) {
        
    }
}


/**
 * clear the input field subtask
 */
function clearInputField() {
    let input= document.getElementById('input_subtask');
    input.value = '';
}


/**
 * delete the choosen subtask
 * @param {integer} i - choosen subtask
 */
function deleteSubtask(i) {
    subtasks.splice(i, 1)
    addSubtasks();
}