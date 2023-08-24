const username = document.getElementById('username_input');
const signup = document.querySelector('.signup');
const password = document.getElementById('password_input');
const email = document.getElementById('email_input');
const firstname = document.getElementById('firstname_input');
const lastname = document.getElementById('lastname_input');
// const fs = require('fs');
// let login_credentials = {};
function create(e){
    // console.log(username.value, password.value);
    if(username.value.length == 0 || password.value.length == 0 || firstname.value.length == 0 || email.value.length == 0){
        alert('Please Enter all the details');
    }
    else{
        const user_details = {
            firstname : firstname,
            lastname : lastname,
            email : email,
            username : username,
            password : password
        }
        // console.log(user_details);
        // const data_to_send = JSON.stringify(user_details);
        // console.log(data_to_send);
        // fs.appendFile('./login_credentials.json', data_to_send, (err)=>{
        //     if(err){
        //         console.error(err);
        //     }
        //     else{
        //         console.log('user data entered to login_credentials.json file');
        //     }
        // });  
        alert('signup successful');      
        window.location.replace('./index.html');
    }
}
signup.addEventListener('click', create);