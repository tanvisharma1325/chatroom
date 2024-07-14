import styled from 'styled-components';

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center; // center content horizontally
  justify-content: center; // center content vertically
  width: 100%; // occupy full width
  height: 100vh; // occupy full height
  margin: 0; // remove margin
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #f5f5f5;
  position: relative;
  box-sizing: border-box; // include padding in width & height
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%; // occupy full width
  max-width: 400px; // limit maximum width
  padding: 20px;
  box-sizing: border-box; // include padding in width
`;

export const Label = styled.label`
  font-weight: bold;
  margin-bottom: 5px;
`;

export const Input = styled.input`
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 16px;
  width: 100%; // occupy full width
`;

export const Button = styled.button`
  padding: 10px;
  border: none;
  background: #007BFF;
  color: white;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  width: 100%; // occupy full width

  &:hover {
    background: #0056b3;
  }
`;

export const SignOutButton = styled.button`
  padding: 10px;
  border: none;
  background: #007BFF;
  color: white;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  position: absolute; // absolute positioning
  top: 10px; // position from the top
  right: 10px; // position from the right

  &:hover {
    background: #0056b3;
  }
`;
