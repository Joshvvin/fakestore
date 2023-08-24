const username = document.getElementById('username_input');
const signin = document.querySelector('.signin');
const password = document.getElementById('password_input');
function verify(e){
    console.log(username.value, password.value);
    if(username.value.length == 0 || password.value.length == 0){
        alert('Please Enter Username and Password');
    }
    else{
        if(username.value == localStorage.getItem('username') && password.value == localStorage.getItem('password')){
            alert('signin successful');
            window.location.replace('./index.html');
        }
        else{
            alert('Incorrect username or password');
        }
    }
}
signin.addEventListener('click', verify);