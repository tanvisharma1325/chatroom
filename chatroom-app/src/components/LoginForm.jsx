import React, { useState } from 'react';
import { FormContainer, Form, Label, Input, Button } from './FormStyles';

function LoginForm({ setUsername }) {
  const [tempUsername, setTempUsername] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    setUsername(tempUsername);
  }

  return (
    <FormContainer>
      <h2>Login</h2>
      <Form onSubmit={handleSubmit}>
        <Label>Username:</Label>
        <Input type="text" value={tempUsername} onChange={e => setTempUsername(e.target.value)} />
        <Button type="submit">Login</Button>
      </Form>
    </FormContainer>
  );
}

export default LoginForm;
