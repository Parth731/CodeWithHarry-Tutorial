
console.log("This is project 4");


const name = document.getElementById(`name`);
const email = document.getElementById(`email`);
const phone = document.getElementById(`phone`);

let validEmail = false;
let validphone = false;
let validUser = false;
$('#success').hide();
$('#failure').hide();



// console.log(name,email,phone);

name.addEventListener(`blur`, () => {
    console.log("name is blurred");

    // validate name here


    let regex = /^[a-zA-Z]([0-9a-zA-Z]{5,15}$)/;//^ must start with a-z,A-Z and $ must end 2 to maximum 10 charcter
    let str = name.value;
    console.log(regex, str);

    if (regex.test(str)) {
        console.log('Your name is valid');
        name.classList.remove('is-invalid'); //is-invalid is bootstrap valid class
        validUser = true;

    }
    else {
        console.log('Your name is not valid');
        name.classList.add('is-invalid');
        validUser = false;
    }

})


email.addEventListener(`blur`, () => {
    console.log("email is blurred");

    // validate email here
    let regex = /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;// 1. name 2.@ 3.gmail 4.com
    let str = email.value;
    console.log(regex, str);

    if (regex.test(str)) {
        console.log('Your email is valid');
        email.classList.remove('is-invalid'); //is-invalid is bootstrap valid class
        validEmail = true;

    }
    else {
        console.log('Your email is not valid');
        email.classList.add('is-invalid');
        validEmail = false; 
    }
})


phone.addEventListener(`blur`, () => {
    console.log("phone is blurred");

    // validate phone here
    let regex = /^([0-9]){10}$/;//^ must start with a-z,A-Z and $ must end 2 to maximum 10 charcter
    let str = phone.value;
    console.log(regex, str);

    if (regex.test(str)) {
        console.log('Your phone is valid');
        phone.classList.remove('is-invalid'); //is-invalid is bootstrap valid class
        validphone = true;

    }
    else {
        console.log('Your phone is not valid');
        phone.classList.add('is-invalid');
        validphone = false;
    }
})

let submit = document.getElementById(`submit`);
submit.addEventListener(`click`, (e) => {

    e.preventDefault();

    console.log("You clicked on submit");

    console.log(validUser,validEmail,validphone);

    // sumbit your form here

    if (validEmail && validUser && validphone) {
        console.log('phone,email and user are valid. submitting the form');
        let success = document.getElementById(`success`);
        let failure = document.getElementById(`failure`);
        success.classList.add('show');
        // failure.classList.remove('show');
        $('#failure').hide();
        $('#success').show();
        
    }
    else {
        console.log('one of phone, email or user are not vaild. Hance not submitting the form. Please correct the error and try again');
        let success = document.getElementById(`success`);
        let failure = document.getElementById(`failure`);
        failure.classList.add('show');
        // success.classList.remove('show');
        $('#success').hide();
        $('#failure').show();


    }




})