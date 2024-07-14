import { useState, useEffect } from 'react';
import { db } from './firebase';  // Import the firebase.js file you created
import { useNavigate } from 'react-router-dom';
import { ChatContainer, Form, Message, Input, Button, RoomDetails, LeaveButton } from './ChatRoomStyles';
import { ref, onValue, off, push, set } from 'firebase/database';  // Import necessary functions from 'firebase/database'

function ChatRoom({ username, room }) {
  const [tempMessage, setTempMessage] = useState('');
  const [messages, setMessages] = useState([]);
  let navigate = useNavigate();

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
    // Clear room from local storage
    localStorage.removeItem('room');

    // Navigate to /chatrooms
    navigate('/chatrooms');
  };

  return (
    <ChatContainer>
      <RoomDetails>
        <h2>Room: {room}</h2>
        <p>Logged in as: {username}</p>
        <LeaveButton onClick={handleLeave}>Leave</LeaveButton>
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
