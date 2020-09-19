

const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");


form.addEventListener('submit',(e) => {
    
    e.preventDefault();
    
    checkInput();
    
})

function checkInput(){
    
    // get value from the inputs
    
    const usernamevalue = username.value.trim();
    const emailvalue = email.value.trim();
    console.log(usernamevalue);
    const passwordvalue = password.value.trim();
    const password2value = password2.value.trim();

    if(usernamevalue == ""){
        setErrorFor(username,'username cannot be blank');
    }
    else{
        setSucessFor(username);
    }

    if(emailvalue == ""){
        setErrorFor(email,'Email cannot be blank');
    }
    else if(!isEmail(emailvalue)){

        setErrorFor(email,'not a vaild email');
        console.log(email);
    }
    else {
        setSucessFor(email);
    }

    if(passwordvalue == ""){
        setErrorFor(password,'Password cannot be blank');
    }
    else{
        setSucessFor(password);
    }

    if(password2value == ""){
        setErrorFor(password2,'Password2 cannot be blank');
    }
    else if(passwordvalue != password2value){
        setErrorFor(password2, 'Passwords does not match');
    }
    else{
        setSucessFor(password2);
    }

}


function setErrorFor(input, message){
 
    console.log(input);
    const formControl = input.parentElement;    // .form-control 
    const small = formControl.querySelector("small")
    formControl.className = "form-control error";
    small.innerText = message;


}

function setSucessFor(input){
    
    console.log(input);
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
    
} 

function isEmail(email){

    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);

}


// SOCIAL PANEL JS
const floating_btn = document.querySelector('.floating-btn');
const close_btn = document.querySelector('.close-btn');
const social_panel_container = document.querySelector('.social-panel-container');

floating_btn.addEventListener('click', () => {
	social_panel_container.classList.toggle('visible')
});

close_btn.addEventListener('click', () => {
	social_panel_container.classList.remove('visible')
});