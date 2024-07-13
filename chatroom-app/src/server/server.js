const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const cors = require('cors');

const app = express();
app.use(cors());

const server = http.createServer(app);
const io = socketIo(server, {
  cors: {
    origin: "*", // Allow any origin
    methods: ["GET", "POST"] // Allow GET and POST requests
  }
});

io.on('connection', (socket) => {
  console.log('New client connected');

  socket.on('joinRoom', ({ username, room }) => {
    socket.join(room);
    console.log(`User ${username} joined room ${room}`);
  });

  socket.on('message', ({ username, room, text }) => {
    console.log('Message received:', { username, room, text });

    // Broadcast the message to all clients in the same room
    io.to(room).emit('message', { username, text });
  });

  socket.on('disconnect', () => {
    console.log('Client disconnected');
  });
});

const port = process.env.PORT || 3001;
server.listen(port, () => console.log(`Listening on port ${port}`));
