
console.log("This is alarm project");


const alarmsubmit = document.getElementById(`alarmsubmit`);
const alarm = document.getElementById(`alarm`);
let clock = document.getElementById(`myclock`);

alarmsubmit.addEventListener('click', (e) => {

    e.preventDefault();

    const alarm = document.getElementById(`alarm`);
    let alarmdate = new Date(alarm.value);
    console.log(`submit Alarm for ${alarmdate}`);

    now = new Date();
    let timetoalarm = alarmdate - now;
    if (timetoalarm >= 0) {
        setTimeout(() => {

            console.log("ring bell");
            ringBell();

        }, timetoalarm);
    }

    console.log(timetoalarm);
    // console.log(timetoalarm * 2);
    
})

let audio = new Audio("https://media.namealarmringtone.co/5242dbb3b3fea60.mp3")

function ringBell() {

    console.log("alarm play")
    // ringBell();
    audio.play();
}


alarm.addEventListener(`blur`, () => {

    // yyyy-mm-dd hh:mm:ss
    // let regex = /^([0-9]){1,4}$([\-0-9]){1,3}$([\ \-0-9]){1,4}$([\:0-9]){1,2}$([\:0-9]){1,2}$([0-9]){1,2}$/;
    let regex = /^([\-0-9]+)\ ([\:0-9]){8}$/;
    let str = alarm.value;

    console.log(regex, str);

    if (regex.test(str)) {
        console.log('Your alarm yes');
        alarm.classList.remove('is-invalid'); //is-invalid is bootstrap valid class
        // validEmail = true;

    }
    else {
        console.log('no');
        alarm.classList.add('is-invalid');
        // validEmail = false; 
    }

})

function showTime() {


    // get current date
    let currentTime = new Date();

    // Extract hour, minute and seconds from the date
    let cuurrentHour = currentTime.getHours();
    let cuurrentMinutes = currentTime.getMinutes();
    let cuurrentSeconds = currentTime.getSeconds();
    let date = currentTime.getDate();
    let month = currentTime.getMonth();
    let year = currentTime.getFullYear();


    // pad 0 of minute or second is less than 10 (single digit)
    cuurrentMinutes = (cuurrentMinutes < 10) ? "0" + cuurrentSeconds : cuurrentMinutes;

    cuurrentSeconds = (cuurrentSeconds < 10) ? "0" + cuurrentSeconds : cuurrentSeconds;

    // choose AM/PM as per the time of the day
    let timeDay = (cuurrentHour < 12) ? "AM" : "PM";

    // convert railway clock to AM/PM clock
    // cuurrentHour = (cuurrentHour > 12) ? cuurrentHour - 12 : cuurrentHour;
    cuurrentHour = (cuurrentHour == 0) ? 12 : cuurrentHour;

    cuurrentHour = (cuurrentHour < 10) ? "0" + cuurrentHour : cuurrentHour;

    // prepare the time string from hours, minutes and seconds
    let currentTimeStr = cuurrentHour + ":" + cuurrentMinutes + ":" + cuurrentSeconds + " " + timeDay;

    let Dates = year + "-" + parseInt(month + 1) + "-" + date;

    // insert the time string inside the DOM
    document.getElementById("myclock").innerHTML = Dates + " " + currentTimeStr;



    // clock.innerHTML = time;



    // console.log(hour, minutes, second,session);


    // setTimeout(showTime,1000);   

}

// showTime();