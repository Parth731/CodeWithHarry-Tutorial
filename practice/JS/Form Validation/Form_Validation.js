
console.log("This is form validation");

let name = document.getElementById(`username`);
let email = document.getElementById(`email`);
let phoneno = document.getElementById(`phone`);
let submit = document.getElementById(`submit`);
let city = document.getElementById(`city`);
let state = document.getElementById(`state`);
let Zip = document.getElementById(`Zip`);
let car = document.getElementById(`selectcar`);
let address = document.getElementById(`address`);
let condition = document.getElementById(`myCheck`)

// console.log(checkbox.value);


let namevalue = false;
let emailvalue = false;
let phonenovalue = false;
let cityvalue = false;
let statevalue = false;
let zipvalue = false;
let carvalue = false;
let addressvalue = false;
let conditionvalue = false;
$('#success').hide();
$('#Failure').hide();


// city
city.addEventListener(`blur`,()=>{

    let regex = /^([a-zA-Z])/;
    let citystr = city.value;

    // console.log(regex,citystr);


    if(regex.test(citystr)){
        city.classList.remove("is-invalid");
        cityvalue = true;
    }
    else{
        city.classList.add("is-invalid");
        cityvalue = false;
    }

})

// state
state.addEventListener(`blur`,()=>{

    let regex = /^([a-zA-Z])/;
    let statestr = city.value;

    // console.log(statevalue);

    if(regex.test(statestr)){
        state.classList.remove("is-invalid");
        statevalue = true;
    }
    else{
        state.classList.add("is-invalid");
        statevalue = false;
    }

})


// zip
Zip.addEventListener(`blur`,()=>{

    let regex = /^([0-9]{6})$/;
    let zipstr = Zip.value;


    if(regex.test(zipstr)){
        Zip.classList.remove("is-invalid");
        zipvalue = true;
    }
    else{
        Zip.classList.add("is-invalid");
        zipvalue = false;

    }

})


// name
name.addEventListener(`blur`,()=>{

    // console.log("name is blur");

    // here write name code

    let regex = /^([_a-zA-Z])([0-9a-zA-Z]{5,15}$)/;
    let namestr = name.value;
    // console.log(regex,namestr);

    if(regex.test(namestr)){

        // console.log('Your name is valid');
        name.classList.remove("is-invalid");
        namevalue = true;


    }
    else{
        // console.log('Your name is not valid');
        name.classList.add("is-invalid");
        namevalue = false;


    }



})


// email
email.addEventListener(`blur`,()=>{

    // console.log("email is blur");

    // here write email code
    let regex = /^([_\.\-0-9a-zA-Z]+)@([_\.\-0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
    let emailstr = email.value;
    // console.log(regex,emailstr);

    if(regex.test(emailstr)){

        // console.log('Your email is valid');
        email.classList.remove("is-invalid");
        emailvalue = true;

    }
    else{

        // console.log('Your email is not valid');
        email.classList.add("is-invalid");
        emailvalue = false;

    }
    
})


// phone number
phoneno.addEventListener(`blur`,()=>{

    // console.log("phone is blur");

    // write here phonno code

    let regex = /^([0-9]{1,10}$)/;
    let phonestr = phoneno.value;
    // console.log(regex,phonestr);

    if(regex.test(phonestr)){

        // console.log('Your phone no is valid');
        phoneno.classList.remove("is-invalid");
        phonenovalue = true;

    }
    else{

        // console.log('Your phone no is valid');
        phoneno.classList.add("is-invalid");
        phonenovalue = false;
    }

})

// car
car.addEventListener(`blur`,() => {

    let carselect = car.value;

    // console.log(carselect);
    if(carselect !== "Select"){
        car.classList.remove("is-invalid");
        carvalue = true;
    }
    else{
        car.classList.add("is-invalid");
        carvalue = false;
    }
})

// trem and condition
condition.addEventListener(`blur`,() =>{

    let check = condition.checked;
    // console.log(check)

    if(check){

        condition.classList.remove("is-invalid");
        conditionvalue = true;
    }
    else{

        condition.classList.add("is-invalid");
        conditionvalue = false;
    }

})

// Address
address.addEventListener(`blur`,()=>{

    // let regex = /^$/;
    // let addressstr = address.value;


    if(address.value){

        address.classList.remove("is-invalid");
        addressvalue = true;


    }
    else{
           
        address.classList.add("is-invalid");
        addressvalue = false;

        
    }
})


// submit
submit.addEventListener(`click`,(e)=>{

    e.preventDefault();

    // console.log("you click submit");

    console.log(namevalue, emailvalue, phonenovalue,condition.checked);

    if(namevalue && emailvalue && phonenovalue && statevalue && cityvalue && zipvalue 
        && conditionvalue && carvalue && addressvalue){

        success.classList.add('show')
        $('#success').show();
        $('#failure').hide();

        let obj = {

            UserName : name.value,
            City: city.value,
            state : state.value,
            zip : Zip.value,
            Email : email.value,
            phoneNo : phoneno.value,
            car : car.value,
            Address : address.value,
            term : condition.checked

        }
        console.log(obj);

    }
    else{

        failure.classList.add('show')
        $('#success').hide();
        $('#failure').show();


    }

})
