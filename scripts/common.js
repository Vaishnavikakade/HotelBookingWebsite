let loginBTN = document.querySelector('#loginbutton');
let innerLoginBtn = document.querySelector('#loginFormBtn');

function login(){
    console.log(document.querySelector('#modalfooter'));
    const username = document.querySelector('#uname');
    const pass = document.querySelector('#pw');
    console.log(username.value, pass.value);
    if ((username.value === "admin") && (pass.value === "admin")) {
        alert('successfully loggedin');
        localStorage.setItem('userName', username);
        localStorage.setItem('password', pass);
        loginBTN.innerHTML = `<a href="#" class="btn btn-light" onclick="logout()" id="loginModalBtn">
        LOGOUT
        </a>`;
    } else {
        alert('username and password cannot be empty');
    }
};

const logout = () => {
    localStorage.clear();
    loginBTN.innerHTML = `<a href="#" class="btn btn-light" data-toggle="modal" data-target="#loginModal" id="loginModalBtn">
    LOGIN
    </a>`;
}
