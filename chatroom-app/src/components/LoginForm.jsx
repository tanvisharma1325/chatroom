import { useState } from 'react';
import { FormContainer, Form, Label, Input, Button } from '../styles/FormStyles';

function LoginForm({ setUsername }) {
  const [tempUsername, setTempUsername] = useState('');
  const [error, setError] = useState('');

  function handleSubmit(event) {
    event.preventDefault();

    if (tempUsername.trim() === '') {
      setError('Username cannot be empty');
    } else {
      setUsername(tempUsername);
      setError('');
    }
  }

  return (
    <FormContainer>
      <h2>Login</h2>
      <Form onSubmit={handleSubmit}>
        <Label>Username:</Label>
        <Input type="text" value={tempUsername} onChange={e => setTempUsername(e.target.value)} />
        {error && <p>{error}</p>}
        <Button type="submit">Login</Button>
      </Form>
    </FormContainer>
  );
}

export default LoginForm;
