import React, { useState } from 'react';
import { FormContainer, Form, Label, Input, Button } from './FormStyles';

function RoomForm({ setRoom }) {
  const [tempRoom, setTempRoom] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    setRoom(tempRoom);
  }

  return (
    <FormContainer>
      <h2>Choose a Room</h2>
      <Form onSubmit={handleSubmit}>
        <Label>Room:</Label>
        <Input type="text" value={tempRoom} onChange={e => setTempRoom(e.target.value)} />
        <Button type="submit">Enter Room</Button>
      </Form>
    </FormContainer>
  );
}

export default RoomForm;
