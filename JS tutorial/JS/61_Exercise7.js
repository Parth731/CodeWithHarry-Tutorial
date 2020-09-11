
console.log("This is Exercise 6");

// create clock
let clock = document.getElementById(`myclock`);

function showTime() {
    let date = new Date();
    let hour = date.getHours();//0-12
    let minutes = date.getMinutes();//0-59
    let second = date.getSeconds();//0-59
    let session;
    console.log(hour);
    if(hour == 0){
        hour = 12;
    }
    
    if(hour < 12){
        
        //am
        session = "AM";
    }
    else{
        
        //pm
        hour = hour - 12;
        session = "PM";
    }

    hour = (hour < 10) ? "0" + hour  : hour;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    second = (second < 10) ? "0"+ second : second;


    let time = hour + ":" +  minutes  + ":" + second + " " + session;

    clock.innerHTML = time;


    console.log(hour, minutes, second,session);
    
    
    setTimeout(showTime,1000);   
    
}

showTime();