const username = document.getElementById('username_input');
const signin = document.querySelector('.signin');
const password = document.getElementById('password_input');
function verify(e){
    console.log(username.value, password.value);
    if(username.value.length == 0 || password.value.length == 0){
        alert('Please Enter Username and Password');
    }
    if(username.value == 'joshvvin' && password.value == 'thrissur'){
        window.location.replace('./index.html');
    }
    else{
        alert('Incorrect username or password');
    }
}
signin.addEventListener('click', verify);