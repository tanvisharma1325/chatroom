import { useState, useEffect } from 'react';
import LoginForm from './LoginForm';
import RoomForm from './RoomForm';
import ChatRoom from './ChatRoom';

function Lobby() {
  const [username, setUsername] = useState('');
  const [room, setRoom] = useState('');
  const [messages, setMessages] = useState([]);

  if (!username) {
    return <LoginForm setUsername={setUsername} />;
  } else if (!room) {
    return <RoomForm setRoom={setRoom} />;
  } else {
    return <ChatRoom username={username} room={room} messages={messages} setMessages={setMessages} />;
  }
}

export default Lobby;
