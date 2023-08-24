const username = document.getElementById('username_input');
const signin = document.querySelector('.signin');
const password = document.getElementById('password_input');
function verify(e){
    // console.log(username.value, password.value);
    const message = document.querySelector('.message');
    // console.log(message);
    if(username.value.length == 0 || password.value.length == 0){
        console.log('Please Enter Username and Password');        
    }
    else{
        if(username.value == localStorage.getItem('username') && password.value == localStorage.getItem('password')){
            console.log('signin successful');
            window.location.replace('./index.html');
        }
        else{
            console.log('Incorrect username or password');
        }
    }
}
signin.addEventListener('click', verify);