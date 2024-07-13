import React, { useState, useEffect } from 'react';
import socketIOClient from "socket.io-client";
import styled from 'styled-components';

const ChatContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
  height: 600px;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 20px;
  overflow-y: auto;
`;

const Message = styled.p`
  background: #eee;
  padding: 10px;
  border-radius: 5px;
  margin-bottom: 10px;
`;

const Form = styled.form`
  display: flex;
  margin-top: 10px;
`;

const Input = styled.input`
  flex-grow: 1;
  border-radius: 5px;
  padding: 10px;
  border: 1px solid #ddd;
`;

const Button = styled.button`
  background: #007BFF;
  color: white;
  border: none;
  padding: 10px;
  margin-left: 10px;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background: #0056b3;
  }
`;

const RoomDetails = styled.div`
  background: #f8f9fa;
  padding: 10px;
  border-radius: 5px;
  margin-bottom: 10px;
  text-align: center;
`;

function ChatRoom({ username, room }) {
  const [tempMessage, setTempMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    const newSocket = socketIOClient('http://localhost:3001');
    setSocket(newSocket);
  
    newSocket.emit('joinRoom', { username, room });
  
    newSocket.on('message', (message) => {
      setMessages((oldMsgs) => [...oldMsgs, message]);
    });
  
    return () => newSocket.close();
  }, [username, room]);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (tempMessage !== '') {
      socket.emit('message', { username, room, text: tempMessage });
      setTempMessage('');
    }
  };

  return (
    <ChatContainer>
      <RoomDetails>
        <h2>Room: {room}</h2>
        <p>Logged in as: {username}</p>
      </RoomDetails>
      {messages.map((message, index) => (
        <Message key={index}>{message.username}: {message.text}</Message>
      ))}
      <Form onSubmit={handleSubmit}>
        <Input type="text" value={tempMessage} onChange={e => setTempMessage(e.target.value)} />
        <Button type="submit">Send</Button>
      </Form>
    </ChatContainer>
  );
}

export default ChatRoom;