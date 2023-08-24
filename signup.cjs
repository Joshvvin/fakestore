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
    const message = document.querySelector('.message');
    // console.log(message);
    if(username.value.length == 0 || password.value.length == 0 || password_confirm.value.length == 0 || email.value.length == 0){
        console.log('Please Enter all the details');
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
            console.log('Passwords do not match!');
        }
        else{
            if(localStorage.getItem('username') == username.value){
                console.log('Username already taken!');
            }
            else{
                localStorage.setItem('username', username.value );
                localStorage.setItem('password', password.value);
                console.log('Account Created Successfully');      
                window.location.replace('./index.html');
            }
        }
    }
}
signup.addEventListener('click', create);