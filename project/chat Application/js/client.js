//client connected to the server
const socket = io('http://localhost:8000');

// get data from html
//get DOM element in repective js variables
const form = document.getElementById('send-conatainer');
const messageinput = document.getElementById('messageInp');
const messageContainer = document.querySelector(".container");


//audio that will play on receiving messages
var x = document.getElementById("myAudio");

//function which will apppend event info to the conatainer
const append = (message, position) => {

    const messageElement = document.createElement('div');
    messageElement.innerText = message;
    messageElement.classList.add('message');
    messageElement.classList.add(position);
    messageContainer.append(messageElement);
    if (position == 'left') {

        x.play();
        console.log("play")
    }
    console.log(messageElement, position);
}


// if the form gets submitted, send server the message
form.addEventListener('submit', (e) => {

    // send the message to the server
    e.preventDefault();
    const msg = messageinput.value;
    append(`you:${msg}`, 'right');
    socket.emit('send', msg);
    messageinput.value = '';
})

// connected new user send request to the server
// ask new user for his/her name and let the server know
const name = prompt("Enter your name to join");
socket.emit("new-user-joined", name);


//any new one user connected that message bordcast to the all user
// if new use joins, receive his/her name from the server
socket.on('user-joined', name => {
    append(`${name} joined the chat`, 'center');
});

// message is received from server
// if server send the message, received it
socket.on('receive', data => {
    append(`${data.name}:${data.message}`, 'left');
});


// any user left show message the here
// if a user leave the chat append the info to the container
socket.on('left', name => {
    append(`${name} left the chat`, 'center');

});