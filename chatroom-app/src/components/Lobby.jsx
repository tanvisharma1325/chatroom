import { useState, useEffect } from 'react';
import LoginForm from './LoginForm';
import RoomForm from './RoomForm';
import ChatRoom from './ChatRoom';

function Lobby() {
  const [username, setUsername] = useState(localStorage.getItem('username') || '');
  const [room, setRoom] = useState(localStorage.getItem('room') || '');
  const [messages, setMessages] = useState([]);

  // Update localStorage whenever username or room changes
  useEffect(() => {
    localStorage.setItem('username', username);
    localStorage.setItem('room', room);
  }, [username, room]);

  if (!username) {
    return <LoginForm setUsername={setUsername} />;
  } else if (!room) {
    return <RoomForm setRoom={setRoom} setUsername={setUsername} />;
  } else {
    return <ChatRoom username={username} room={room} setRoom={setRoom} setUsername={setUsername} messages={messages} setMessages={setMessages} />;
  }
}

export default Lobby;
