const username = document.getElementById('username_input');
const signup = document.querySelector('.signup');
const password = document.getElementById('password_input');
function create(e){
    console.log(username.value, password.value);
    if(username.value.length == 0 || password.value.length == 0){
        alert('Please Enter Username and Password');
    }
    if(username.value == 'joshvvin' && password.value == 'thrissur'){
        window.location.replace('./signin.html');
    }
    else{
        alert('Incorrect username or password');
    }
}
signup.addEventListener('click', create);