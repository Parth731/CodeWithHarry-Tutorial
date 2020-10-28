/*
socket io running attached http instance on 8000 port 
        
ye server listen karega upcomming event ko
        
io.on socket instance hai ye bohat sare socket connection ko listen karega
        
socket.on perticular ak socket ko handle karega
*/

//1 connnected socket io server in 8000 port to client
const io = require('socket.io')(8000);

//multiple user connected in users object
const users = {};

io.on('connection', socket => {

    //if any new user joins, we call it
    //if any new user joins, let other users connected to the server know!
    socket.on("new-user-joined", name => {

        // console.log("new user", name);
        users[socket.id] = name;
        socket.broadcast.emit("user-joined", name)

    })

    //send message to the client and received message from client
    //if someone sends a message, broadcast it to other people
    socket.on('send', message => {
        socket.broadcast.emit('receive', { message: message, name: users[socket.id] })
        console.log(message);
    })

    // any user disconnected to server
    //if someone leaves the chat, let other know
    socket.on('disconnect', message => {
        socket.broadcast.emit('left', users[socket.id])
        delete users[socket.id];
    })




})