import { useState } from 'react';
import { FormContainer, Form, Label, Input, Button, SignOutButton} from '../styles/FormStyles';

function RoomForm({ setRoom, setUsername }) {
  const [tempRoom, setTempRoom] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    setRoom(tempRoom);
  }

  function handleSignOut() {
    setUsername(''); // Clear the username
  }

  return (
    <FormContainer>
      <h2>Create a Room</h2>
      <Form onSubmit={handleSubmit}>
        <Label>Room:</Label>
        <Input type="text" value={tempRoom} onChange={e => setTempRoom(e.target.value)} />
        <Button type="submit">Enter Room</Button>
      </Form>
      <SignOutButton type="button" onClick={handleSignOut}>Sign Out</SignOutButton> 
    </FormContainer>
  );
}

export default RoomForm;
