let checkbox = 0;


async function login() {
    let loginBtn = document.getElementById('login_btn');
    let email = document.getElementById('login_email');
    let password = document.getElementById('login_password');
    loginBtn.disabled = true;

    // let user = await users.find(u => u.email == email.value && u.password == password.value);
    document.getElementById('userNotFoundMail').classList.add('d-none');
    document.getElementById('userNotFoundPassword').classList.add('d-none');

    let user = await postData('auth/login/', {'username': email.value, 'password': password.value});
    console.log('login user:', user);

    if (user && user.token) {
        resetLoginForm(loginBtn, email, password);
        populateStorage(user);
        window.location.href = './html/summary.html';
    } else {
        document.getElementById('userNotFoundMail').classList.remove('d-none');
        document.getElementById('userNotFoundPassword').classList.remove('d-none');
        resetLoginForm(loginBtn, email, password);
    }
}


function populateStorage(user) {
    localStorage.setItem("first_name", user.first_name);
    localStorage.setItem("last_name", user.last_name);
    localStorage.setItem("email", user.email);
    localStorage.setItem("user_id", user.user_id);
}


function resetLoginForm(loginBtn, email, password) {
    email.value = '';
    password.value = '';
    loginBtn.disabled = false;
}


window.addEventListener('load', () => {
    const logo = document.getElementById('logo');
    const body = document.getElementById('body');
    const loginContent = document.getElementById('login-content');

    setTimeout(() => {
        logo.classList.add('shrink-and-move');
        body.classList.add('change-background');
    }, 200);

    setTimeout(() => {
        logo.classList.remove('shrink-and-move');
        logo.classList.add('logo-final');
        body.classList.remove('change-background');
    }, 2500);

    setTimeout(() => {
        loginContent.style.display = 'block';
    }, 2500);
});


function addGuestName() {
    localStorage.setItem('user_id', 'guest');
    location.href = './html/summary.html';
}


function rememberMe() {
    checkbox++;
    document.getElementById('remember_me').innerHTML = `
    <svg onclick="nrememberMe()" width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 11.9658V17.9658C20 19.6227 18.6569 20.9658 17 20.9658H7C5.34315 20.9658 4 19.6227 4 17.9658V7.96582C4 6.30897 5.34315 4.96582 7 4.96582H15" stroke="#2A3647" stroke-width="2" stroke-linecap="round"/>
        <path d="M8 12.9658L12 16.9658L20 5.46582" stroke="#2A3647" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
    Remember me`;
}


function nrememberMe() {
    checkbox--;
    document.getElementById('remember_me').innerHTML = `
    <svg onclick="rememberMe()" width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="4.5" y="4" width="16" height="16" rx="3" stroke="#2A3647" stroke-width="2"/>
    </svg>
    Remember me`;
}