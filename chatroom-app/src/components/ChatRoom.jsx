import { useState, useEffect } from 'react';
import { db } from './firebase';
import { ChatContainer, Form, Message, Input, Button, RoomDetails, LeaveButton, SignOutButton, MessagesContainer } from '../styles/ChatRoomStyles';
import { ref, onValue, off, push, set } from 'firebase/database';  

function ChatRoom({ username, room, setRoom, setUsername }) {
  const [tempMessage, setTempMessage] = useState('');
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const messagesRef = ref(db, 'rooms/' + room + '/messages');
    const handleNewMessage = (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const values = Object.values(data);
        setMessages(values);
      }
    };
    onValue(messagesRef, handleNewMessage);

    return () => off(messagesRef, 'value', handleNewMessage);
  }, [room]);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (tempMessage !== '') {
      const messagesRef = ref(db, 'rooms/' + room + '/messages');
      const newMessageRef = push(messagesRef);
      set(newMessageRef, {
        username,
        text: tempMessage
      });

      setTempMessage('');
    }
  };

  const handleLeave = () => {
    setRoom(''); 
    localStorage.removeItem('room'); 
  };

  const handleSignOut = () => {
    setUsername('');
    setRoom(''); 
    localStorage.removeItem('room'); 
    localStorage.removeItem('username'); 
  };

  return (
    <ChatContainer>
      <RoomDetails>
        <h2>Room: {room}</h2>
        <p>Logged in as: {username}</p>
        <LeaveButton onClick={handleLeave}>Leave</LeaveButton>
      </RoomDetails>
      <MessagesContainer>
        {messages.map((message, index) => (
          <Message key={index}>{message.username}: {message.text}</Message>
        ))}
      </MessagesContainer>
      <Form onSubmit={handleSubmit}>
        <Input type="text" value={tempMessage} onChange={e => setTempMessage(e.target.value)} />
        <Button type="submit">Send</Button>
      </Form>
      <SignOutButton type="button" onClick={handleSignOut}>Sign Out</SignOutButton> 
    </ChatContainer>
  );
}

export default ChatRoom;
