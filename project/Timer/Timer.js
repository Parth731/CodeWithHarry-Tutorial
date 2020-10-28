

const startingminutes = 10;
let time = startingminutes * 60;


const countdown = document.getElementById('countdowm');

setInterval(updatecountdown, 1000);

function updatecountdown(){
    
    const minutes = Math.floor(time/60);
    // console.log("minutes -> ",minutes);
    let seconds = time % 60;
    // console.log("second -> ", seconds);

    seconds = seconds < 10 ? "0" + seconds : seconds;

    countdown.innerHTML = `${minutes}:${seconds}`;
    time--;


}