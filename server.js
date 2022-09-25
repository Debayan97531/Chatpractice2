const express = require('express');
const app = express();
const path = require('path');
const http = require('http');
const socketio = require('socket.io');
const formatMessage = require('./utils/messages');
const { userJoin,getCurrentUser,userLeave,getRoomUsers} = require('./utils/users');
//const { markAsUntransferable } = require('worker_threads');

const port = 3000 || process.env.port;

const server = http.createServer(app);

const io = socketio(server);

app.use(express.static(path.join(__dirname,'public')));

const botName = 'ChatCord Bot';

//Run when client connects
io.on('connection',socket =>{
    //console.log("New Ws connection....");

    io.on('connection', socket =>{
        socket.on('joinRoom',({username,room}) =>{
            const user = userJoin(socket.id,username,room);

            socket.join(user.room);

            //welcome current user
            socket.emit('message',formatMessage(botName,"Welcome to chatcord!.."));

            //broadcast when a user connects
            socket.broadcast.
            to(user.room).emit('message',
                formatMessage(botName,`${user.username} joined the chat..`)
            );

            //send users and room info
            io.to(user.room).emit('roomUsers',{
                room: user.room,
                users: getRoomUsers(user.room)
            });
        })
    })
    
    //listen for chatMessage
    socket.on('chatMessage', msg =>{
        //console.log(msg);
        const user= getCurrentUser(socket.id);

        io.to(user.room).emit('message', formatMessage(user.username,msg));
    });

    //runs when client disconnects
    socket.on('disconnect', ()=>{
        const user = userLeave(socket.id);

        if(user){
        io.to(user.room).emit(
            'message',
            formatMessage(botName,`${user.username} left the chat...`))};
        
         //send users and room info
         io.to(user.room).emit('roomUsers', {
            room: user.room,
            users: getRoomUsers(user.room)
          });
    });
})

server.listen(port, () => console.log(`Server running on port ${port}`));


