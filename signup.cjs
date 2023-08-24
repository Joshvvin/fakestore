const username = document.getElementById('username_input');
const signup = document.querySelector('.signup');
const password = document.getElementById('password_input');
const email = document.getElementById('email_input');
const password_confirm = document.getElementById('password_confirm_input');
// const firstname = document.getElementById('firstname_input');
// const lastname = document.getElementById('lastname_input');
// const fs = require('fs');
// let login_credentials = {};
function create(e){
    // console.log(username.value, password.value);
    if(username.value.length == 0 || password.value.length == 0 || password_confirm.value.length == 0 || email.value.length == 0){
        alert('Please Enter all the details');
    }
    else{
        // const user_details = {
        //     firstname : firstname,
        //     lastname : lastname,
        //     email : email,
        //     username : username,
        //     password : password
        // }
        // console.log(password.value, password_confirm.value);
        if(password.value != password_confirm.value){
            alert('Passwords do not match!');
        }
        else{
            localStorage.setItem('username', username.value );
            localStorage.setItem('password', password.value);
            alert('Account Created Successfully');      
            window.location.replace('./index.html');
        }
    }
}
signup.addEventListener('click', create);