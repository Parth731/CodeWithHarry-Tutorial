
console.log("This is a Exercise 7 soluation clock");

function updateclock() {

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
    cuurrentHour =  (cuurrentHour > 12) ? cuurrentHour -12: cuurrentHour; 
    cuurrentHour =  (cuurrentHour == 0) ? 12 : cuurrentHour; 
    
    cuurrentHour = (cuurrentHour < 10) ? "0" + cuurrentHour : cuurrentHour;
    
    // prepare the time string from hours, minutes and seconds
    let currentTimeStr = cuurrentHour + ":" + cuurrentMinutes + ":" + cuurrentSeconds + " " + timeDay;

    let Dates = date + "/" + parseInt(month + 1) + "/" + year; 

    // insert the time string inside the DOM
    document.getElementById("myclock").innerHTML = Dates +" " + currentTimeStr;


    setTimeout(updateclock,1000);    
}

updateclock();